// src/services/authService.js
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateProfile
  } from 'firebase/auth';
  import { doc, setDoc, getDoc } from 'firebase/firestore';
  import { auth, db } from '../firebase/config';
  
  /**
   * Registro de estudiante
   * @param {string} email - Correo electrónico del estudiante (NRE@alu.murciaeduca.es)
   * @param {string} password - Contraseña
   * @param {Object} userData - Datos adicionales del estudiante
   * @returns {Object} Resultado de la operación
   */
  export const registerStudent = async (email, password, userData) => {
    try {
      // Validar formato de correo para estudiantes
      if (!email.endsWith('@alu.murciaeduca.es')) {
        return { 
          success: false, 
          error: 'El correo debe ser institucional (@alu.murciaeduca.es)' 
        };
      }
      
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Extraer NRE del correo
      const nre = email.split('@')[0];
      
      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, "users", "students", user.uid), {
        nre,
        alias: userData.alias || '',
        centerIds: userData.centerIds || [],
        course: userData.course || '',
        age: userData.age || null,
        gender: userData.gender || '',
        createdAt: new Date(),
        lastLogin: new Date(),
        settings: userData.settings || {
          notifications: true,
          language: 'es'
        }
      });
      
      // Actualizar perfil en Auth
      await updateProfile(user, {
        displayName: userData.alias || nre
      });
      
      return { success: true, user };
    } catch (error) {
      console.error("Error en registro de estudiante:", error);
      
      // Manejar errores específicos de Firebase Auth
      if (error.code === 'auth/email-already-in-use') {
        return { success: false, error: 'Este correo ya está registrado' };
      } else if (error.code === 'auth/weak-password') {
        return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' };
      }
      
      return { success: false, error: error.message };
    }
  };
  
  /**
   * Registro de profesional sanitario
   * @param {string} email - Correo electrónico institucional (@carm.es)
   * @param {string} password - Contraseña
   * @param {Object} userData - Datos adicionales del profesional
   * @returns {Object} Resultado de la operación
   */
  export const registerProfessional = async (email, password, userData) => {
    try {
      // Validar formato de correo para profesionales
      if (!email.endsWith('@carm.es')) {
        return { 
          success: false, 
          error: 'El correo debe ser institucional (@carm.es)' 
        };
      }
      
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, "users", "professionals", user.uid), {
        email,
        name: userData.name || '',
        role: userData.role || 'nurse',
        centerIds: userData.centerIds || [],
        availability: userData.availability || {},
        createdAt: new Date(),
        lastLogin: new Date(),
        settings: userData.settings || {
          notifications: true,
          language: 'es'
        }
      });
      
      // Actualizar perfil en Auth
      await updateProfile(user, {
        displayName: userData.name || email.split('@')[0]
      });
      
      return { success: true, user };
    } catch (error) {
      console.error("Error en registro de profesional:", error);
      
      // Manejar errores específicos
      if (error.code === 'auth/email-already-in-use') {
        return { success: false, error: 'Este correo ya está registrado' };
      }
      
      return { success: false, error: error.message };
    }
  };
  
  /**
   * Inicio de sesión
   * @param {string} email - Correo electrónico
   * @param {string} password - Contraseña
   * @returns {Object} Resultado de la operación
   */
  export const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Determinar el tipo de usuario
      const userType = await getUserRole(user.uid);
      
      // Actualizar último login
      if (userType.success) {
        const collectionPath = userType.role === 'student' ? 'users/students' : 'users/professionals';
        await setDoc(doc(db, collectionPath, user.uid), {
          lastLogin: new Date()
        }, { merge: true });
      }
      
      return { 
        success: true, 
        user,
        userType: userType.success ? userType.role : null
      };
    } catch (error) {
      console.error("Error en inicio de sesión:", error);
      
      // Manejar errores específicos
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        return { success: false, error: 'Credenciales incorrectas' };
      }
      
      return { success: false, error: error.message };
    }
  };
  
  /**
   * Cerrar sesión
   * @returns {Object} Resultado de la operación
   */
  export const logoutUser = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      return { success: false, error: error.message };
    }
  };
  
  /**
   * Recuperar contraseña
   * @param {string} email - Correo electrónico
   * @returns {Object} Resultado de la operación
   */
  export const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { 
        success: true,
        message: 'Se ha enviado un correo para restablecer tu contraseña'
      };
    } catch (error) {
      console.error("Error al recuperar contraseña:", error);
      
      // Manejar errores específicos
      if (error.code === 'auth/user-not-found') {
        return { success: false, error: 'No existe una cuenta con este correo' };
      }
      
      return { success: false, error: error.message };
    }
  };
  
  /**
   * Obtener rol del usuario
   * @param {string} userId - ID del usuario
   * @returns {Object} Resultado de la operación con el rol y datos del usuario
   */
  export const getUserRole = async (userId) => {
    try {
      // Intentar encontrar al usuario en la colección de estudiantes
      const studentDoc = await getDoc(doc(db, "users", "students", userId));
      if (studentDoc.exists()) {
        return { 
          success: true, 
          role: "student", 
          data: studentDoc.data() 
        };
      }
      
      // Intentar encontrar al usuario en la colección de profesionales
      const professionalDoc = await getDoc(doc(db, "users", "professionals", userId));
      if (professionalDoc.exists()) {
        return { 
          success: true, 
          role: "professional", 
          data: professionalDoc.data() 
        };
      }
      
      return { success: false, error: "Usuario no encontrado" };
    } catch (error) {
      console.error("Error al obtener rol de usuario:", error);
      return { success: false, error: error.message };
    }
  };
  
  /**
   * Obtener usuario actual
   * @returns {Object} Usuario actual o null
   */
  export const getCurrentUser = () => {
    return auth.currentUser;
  };
  
  /**
   * Verificar si el usuario está autenticado
   * @param {Function} callback - Función a ejecutar cuando cambia el estado de autenticación
   * @returns {Function} Función para cancelar la suscripción
   */
  export const onAuthStateChanged = (callback) => {
    return auth.onAuthStateChanged(callback);
  };
  