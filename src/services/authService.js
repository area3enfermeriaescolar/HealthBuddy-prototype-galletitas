// src/services/authService.js
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged as firebaseOnAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
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
    
    // Validar formato del NRE
    const nre = email.split('@')[0];
    if (!/^\d{8}[A-Z]$/.test(nre)) {
      return {
        success: false,
        error: 'El NRE debe tener 7 dígitos'
      };
    }
    
    // Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, "users", user.uid), {
      userType: 'student',
      nre,
      alias: userData.alias || '',
      centerIds: userData.centerIds || [],
      course: userData.course || '',
      age: userData.age || null,
      gender: userData.gender || '',
      educationalCenter: userData.centroEducativo || '',
      email: email,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      settings: userData.settings || {
        notifications: true,
        language: 'es'
      }
    });
    
    // También guardar en la subcolección students para compatibilidad
    await setDoc(doc(db, "users", "students", user.uid), {
      nre,
      alias: userData.alias || '',
      centerIds: userData.centerIds || [],
      course: userData.course || '',
      age: userData.age || null,
      gender: userData.gender || '',
      educationalCenter: userData.centroEducativo || '',
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      settings: userData.settings || {
        notifications: true,
        language: 'es'
      }
    });
    
    // Actualizar perfil en Auth
    await updateProfile(user, {
      displayName: userData.alias || nre
    });
    
    return { success: true, user, userType: 'student' };
  } catch (error) {
    console.error("Error en registro de estudiante:", error);
    
    // Manejar errores específicos de Firebase Auth
    if (error.code === 'auth/email-already-in-use') {
      return { success: false, error: 'Este correo ya está registrado' };
    } else if (error.code === 'auth/weak-password') {
      return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' };
    } else if (error.code === 'auth/invalid-email') {
      return { success: false, error: 'El formato del correo electrónico no es válido' };
    } else if (error.code === 'auth/operation-not-allowed') {
      return { success: false, error: 'El registro de usuarios no está habilitado' };
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
    await setDoc(doc(db, "users", user.uid), {
      userType: 'professional',
      email,
      name: userData.nombre || '',
      lastName: userData.apellidos || '',
      fullName: `${userData.nombre || ''} ${userData.apellidos || ''}`.trim(),
      role: userData.role || 'nurse',
      healthArea: userData.areaSalud || '',
      healthCenter: userData.centroSalud || '',
      educationalCenters: userData.centrosEducativos || [],
      centerIds: userData.centerIds || [],
      availability: userData.availability || {},
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      settings: userData.settings || {
        notifications: true,
        language: 'es'
      }
    });
    
    // También guardar en la subcolección professionals para compatibilidad
    await setDoc(doc(db, "users", "professionals", user.uid), {
      email,
      name: userData.nombre || '',
      lastName: userData.apellidos || '',
      fullName: `${userData.nombre || ''} ${userData.apellidos || ''}`.trim(),
      role: userData.role || 'nurse',
      healthArea: userData.areaSalud || '',
      healthCenter: userData.centroSalud || '',
      educationalCenters: userData.centrosEducativos || [],
      centerIds: userData.centerIds || [],
      availability: userData.availability || {},
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      settings: userData.settings || {
        notifications: true,
        language: 'es'
      }
    });
    
    // Actualizar perfil en Auth
    await updateProfile(user, {
      displayName: `${userData.nombre || ''} ${userData.apellidos || ''}`.trim() || email.split('@')[0]
    });
    
    return { success: true, user, userType: 'professional' };
  } catch (error) {
    console.error("Error en registro de profesional:", error);
    
    // Manejar errores específicos
    if (error.code === 'auth/email-already-in-use') {
      return { success: false, error: 'Este correo ya está registrado' };
    } else if (error.code === 'auth/weak-password') {
      return { success: false, error: 'La contraseña debe tener al menos 8 caracteres' };
    } else if (error.code === 'auth/invalid-email') {
      return { success: false, error: 'El formato del correo electrónico no es válido' };
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
      // Actualizar en la colección principal
      await setDoc(doc(db, "users", user.uid), {
        lastLogin: serverTimestamp()
      }, { merge: true });
      
      // Actualizar en la subcolección correspondiente para compatibilidad
      const collectionPath = userType.role === 'student' ? 'users/students' : 'users/professionals';
      await setDoc(doc(db, collectionPath, user.uid), {
        lastLogin: serverTimestamp()
      }, { merge: true });
    }
    
    return { 
      success: true, 
      user,
      userType: userType.success ? userType.role : null,
      userData: userType.success ? userType.data : null
    };
  } catch (error) {
    console.error("Error en inicio de sesión:", error);
    
    // Manejar errores específicos
    if (error.code === 'auth/user-not-found') {
      return { success: false, error: 'No existe una cuenta con este correo electrónico' };
    } else if (error.code === 'auth/wrong-password') {
      return { success: false, error: 'La contraseña es incorrecta' };
    } else if (error.code === 'auth/invalid-email') {
      return { success: false, error: 'El formato del correo electrónico no es válido' };
    } else if (error.code === 'auth/user-disabled') {
      return { success: false, error: 'Esta cuenta ha sido deshabilitada' };
    } else if (error.code === 'auth/too-many-requests') {
      return { success: false, error: 'Demasiados intentos fallidos. Inténtalo más tarde' };
    } else if (error.code === 'auth/invalid-credential') {
      return { success: false, error: 'Las credenciales proporcionadas son incorrectas' };
    }
    
    return { success: false, error: 'Error al iniciar sesión. Verifica tus credenciales' };
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
    } else if (error.code === 'auth/invalid-email') {
      return { success: false, error: 'El formato del correo electrónico no es válido' };
    } else if (error.code === 'auth/too-many-requests') {
      return { success: false, error: 'Demasiados intentos. Inténtalo más tarde' };
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
    // Primero intentar obtener desde la colección principal
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return { 
        success: true, 
        role: userData.userType, 
        data: userData 
      };
    }
    
    // Si no existe en la colección principal, intentar en las subcolecciones (compatibilidad)
    const studentDoc = await getDoc(doc(db, "users", "students", userId));
    if (studentDoc.exists()) {
      return { 
        success: true, 
        role: "student", 
        data: studentDoc.data() 
      };
    }
    
    const professionalDoc = await getDoc(doc(db, "users", "professionals", userId));
    if (professionalDoc.exists()) {
      return { 
        success: true, 
        role: "professional", 
        data: professionalDoc.data() 
      };
    }
    
    return { success: false, error: "Usuario no encontrado en la base de datos" };
  } catch (error) {
    console.error("Error al obtener rol de usuario:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Obtener datos completos del usuario actual
 * @param {string} userId - ID del usuario
 * @returns {Object} Datos del usuario o null
 */
export const getUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return { success: true, data: userDoc.data() };
    }
    return { success: false, error: "Usuario no encontrado" };
  } catch (error) {
    console.error("Error al obtener datos de usuario:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Actualizar datos del usuario
 * @param {string} userId - ID del usuario
 * @param {Object} updateData - Datos a actualizar
 * @returns {Object} Resultado de la operación
 */
export const updateUserData = async (userId, updateData) => {
  try {
    await setDoc(doc(db, "users", userId), {
      ...updateData,
      updatedAt: serverTimestamp()
    }, { merge: true });
    
    return { success: true };
  } catch (error) {
    console.error("Error al actualizar datos de usuario:", error);
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
  return firebaseOnAuthStateChanged(auth, callback);
};

/**
 * Validar formato de NRE
 * @param {string} nre - NRE a validar
 * @returns {boolean} True si es válido
 */
export const validateNRE = (nre) => {
  return /^\d{8}[A-Z]$/.test(nre);
};

/**
 * Validar formato de email institucional
 * @param {string} email - Email a validar
 * @param {string} domain - Dominio requerido
 * @returns {boolean} True si es válido
 */
export const validateInstitutionalEmail = (email, domain = '@alu.murciaeduca.es') => {
  return email.endsWith(domain);
};

/**
 * Generar email desde NRE
 * @param {string} nre - NRE del estudiante
 * @returns {string} Email generado
 */
export const generateEmailFromNRE = (nre) => {
  return `${nre}@alu.murciaeduca.es`;
};

/**
 * Extraer NRE desde email
 * @param {string} email - Email del estudiante
 * @returns {string} NRE extraído
 */
export const extractNREFromEmail = (email) => {
  return email.split('@')[0];
};