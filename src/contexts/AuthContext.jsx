// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  loginUser, 
  logoutUser, 
  registerStudent, 
  registerProfessional,
  getCurrentUser,
  onAuthStateChanged,
  getUserRole
} from '../services/authService';

// Crear contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para verificar el estado de autenticación al cargar
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          // Obtener rol y datos del usuario
          const roleResult = await getUserRole(user.uid);
          if (roleResult.success) {
            setUserRole(roleResult.role);
            setUserData(roleResult.data);
          } else {
            console.error("Error al obtener rol de usuario:", roleResult.error);
            setError("Error al cargar datos de usuario");
          }
        } catch (err) {
          console.error("Error en verificación de autenticación:", err);
          setError("Error en verificación de autenticación");
        }
      } else {
        // Usuario no autenticado
        setUserRole(null);
        setUserData(null);
      }
      
      setLoading(false);
    });

    // Limpiar suscripción al desmontar
    return () => unsubscribe();
  }, []);

  // Función para iniciar sesión
  const login = async (email, password) => {
    setError(null);
    try {
      const result = await loginUser(email, password);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError("Error al iniciar sesión");
      return { success: false, error: err.message };
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    setError(null);
    try {
      await logoutUser();
      setCurrentUser(null);
      setUserRole(null);
      setUserData(null);
      return { success: true };
    } catch (err) {
      setError("Error al cerrar sesión");
      return { success: false, error: err.message };
    }
  };

  // Función para registrar estudiante
  const registerNewStudent = async (email, password, userData) => {
    setError(null);
    try {
      const result = await registerStudent(email, password, userData);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError("Error al registrar estudiante");
      return { success: false, error: err.message };
    }
  };

  // Función para registrar profesional
  const registerNewProfessional = async (email, password, userData) => {
    setError(null);
    try {
      const result = await registerProfessional(email, password, userData);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError("Error al registrar profesional");
      return { success: false, error: err.message };
    }
  };

  // Valor del contexto
  const value = {
    currentUser,
    userRole,
    userData,
    loading,
    error,
    login,
    logout,
    registerStudent: registerNewStudent,
    registerProfessional: registerNewProfessional,
    isStudent: userRole === 'student',
    isProfessional: userRole === 'professional'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
