// src/services/appointmentService.js
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  getDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Crea una nueva cita
 * @param {Object} appointmentData - Datos de la cita
 * @returns {Object} Resultado de la operación
 */
export const createAppointment = async (appointmentData) => {
  try {
    // Validar datos mínimos requeridos
    if (!appointmentData.studentId || !appointmentData.professionalId || 
        !appointmentData.centerId || !appointmentData.date || !appointmentData.time) {
      return {
        success: false,
        message: 'Faltan datos requeridos para la cita'
      };
    }
    
    // Crear documento de cita
    const docRef = await addDoc(collection(db, "appointments"), {
      ...appointmentData,
      status: appointmentData.status || 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    // Registrar en auditoría
    await addDoc(collection(db, "audit"), {
      action: "create",
      resource: "appointment",
      resourceId: docRef.id,
      userId: appointmentData.studentId,
      userType: "student",
      timestamp: serverTimestamp(),
      metadata: {
        professionalId: appointmentData.professionalId,
        centerId: appointmentData.centerId,
        date: appointmentData.date
      }
    });
    
    return {
      success: true,
      message: 'Cita creada correctamente',
      data: {
        id: docRef.id,
        ...appointmentData
      }
    };
  } catch (error) {
    console.error('Error al crear cita:', error);
    return {
      success: false,
      message: 'Error al crear la cita',
      error: error.message
    };
  }
};

/**
 * Obtiene las citas de un estudiante
 * @param {string} studentId - ID del estudiante
 * @returns {Object} Resultado de la operación con lista de citas
 */
export const getStudentAppointments = async (studentId) => {
  try {
    const q = query(
      collection(db, "appointments"),
      where("studentId", "==", studentId),
      orderBy("date", "asc")
    );
    
    const querySnapshot = await getDocs(q);
    const appointments = [];
    
    querySnapshot.forEach((doc) => {
      appointments.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    console.error('Error al obtener citas del estudiante:', error);
    return {
      success: false,
      message: 'Error al obtener citas',
      error: error.message
    };
  }
};

/**
 * Obtiene las citas de un profesional
 * @param {string} professionalId - ID del profesional
 * @param {Object} filters - Filtros opcionales (fecha, centro, estado)
 * @returns {Object} Resultado de la operación con lista de citas
 */
export const getProfessionalAppointments = async (professionalId, filters = {}) => {
  try {
    let q = query(
      collection(db, "appointments"),
      where("professionalId", "==", professionalId)
    );
    
    // Aplicar filtros adicionales si se proporcionan
    if (filters.date) {
      q = query(q, where("date", "==", filters.date));
    }
    
    if (filters.centerId) {
      q = query(q, where("centerId", "==", filters.centerId));
    }
    
    if (filters.status) {
      q = query(q, where("status", "==", filters.status));
    }
    
    // Ordenar por fecha y hora
    q = query(q, orderBy("date", "asc"), orderBy("time", "asc"));
    
    const querySnapshot = await getDocs(q);
    const appointments = [];
    
    querySnapshot.forEach((doc) => {
      appointments.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    console.error('Error al obtener citas del profesional:', error);
    return {
      success: false,
      message: 'Error al obtener citas programadas',
      error: error.message
    };
  }
};

/**
 * Actualiza el estado de una cita
 * @param {string} appointmentId - ID de la cita
 * @param {string} status - Nuevo estado de la cita
 * @param {string} userId - ID del usuario que realiza la actualización
 * @param {string} userType - Tipo de usuario ('student' o 'professional')
 * @returns {Object} Resultado de la operación
 */
export const updateAppointmentStatus = async (appointmentId, status, userId, userType) => {
  try {
    // Verificar que la cita existe
    const appointmentRef = doc(db, "appointments", appointmentId);
    const appointmentDoc = await getDoc(appointmentRef);
    
    if (!appointmentDoc.exists()) {
      throw new Error("La cita no existe");
    }
    
    // Actualizar estado
    await updateDoc(appointmentRef, {
      status: status,
      updatedAt: serverTimestamp()
    });
    
    // Registrar en auditoría
    await addDoc(collection(db, "audit"), {
      action: "update",
      resource: "appointment",
      resourceId: appointmentId,
      userId: userId,
      userType: userType,
      timestamp: serverTimestamp(),
      metadata: {
        previousStatus: appointmentDoc.data().status,
        newStatus: status
      }
    });
    
    return {
      success: true,
      message: 'Estado de la cita actualizado correctamente'
    };
  } catch (error) {
    console.error('Error al actualizar estado de cita:', error);
    return {
      success: false,
      message: 'Error al actualizar el estado de la cita',
      error: error.message
    };
  }
};

/**
 * Cancela una cita
 * @param {string} appointmentId - ID de la cita
 * @param {string} userId - ID del usuario que cancela
 * @param {string} userType - Tipo de usuario ('student' o 'professional')
 * @param {string} reason - Motivo de la cancelación
 * @returns {Object} Resultado de la operación
 */
export const cancelAppointment = async (appointmentId, userId, userType, reason = '') => {
  try {
    // Verificar que la cita existe
    const appointmentRef = doc(db, "appointments", appointmentId);
    const appointmentDoc = await getDoc(appointmentRef);
    
    if (!appointmentDoc.exists()) {
      throw new Error("La cita no existe");
    }
    
    // Actualizar estado a cancelado
    await updateDoc(appointmentRef, {
      status: 'cancelled',
      cancellationReason: reason,
      cancelledBy: {
        userId,
        userType
      },
      updatedAt: serverTimestamp()
    });
    
    // Registrar en auditoría
    await addDoc(collection(db, "audit"), {
      action: "cancel",
      resource: "appointment",
      resourceId: appointmentId,
      userId: userId,
      userType: userType,
      timestamp: serverTimestamp(),
      metadata: {
        previousStatus: appointmentDoc.data().status,
        reason: reason
      }
    });
    
    return {
      success: true,
      message: 'Cita cancelada correctamente'
    };
  } catch (error) {
    console.error('Error al cancelar cita:', error);
    return {
      success: false,
      message: 'Error al cancelar la cita',
      error: error.message
    };
  }
};

/**
 * Configura la disponibilidad de un profesional
 * @param {string} professionalId - ID del profesional
 * @param {string} centerId - ID del centro educativo
 * @param {Object} availabilityData - Datos de disponibilidad
 * @returns {Object} Resultado de la operación
 */
export const setProfessionalAvailability = async (professionalId, centerId, availabilityData) => {
  try {
    // Buscar si ya existe un documento de disponibilidad
    const q = query(
      collection(db, "availability"),
      where("professionalId", "==", professionalId),
      where("centerId", "==", centerId)
    );
    
    const querySnapshot = await getDocs(q);
    let availabilityId;
    
    if (!querySnapshot.empty) {
      // Actualizar disponibilidad existente
      availabilityId = querySnapshot.docs[0].id;
      const availabilityRef = doc(db, "availability", availabilityId);
      
      await updateDoc(availabilityRef, {
        ...availabilityData,
        updatedAt: serverTimestamp()
      });
    } else {
      // Crear nueva disponibilidad
      const docRef = await addDoc(collection(db, "availability"), {
        professionalId,
        centerId,
        ...availabilityData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      availabilityId = docRef.id;
    }
    
    return {
      success: true,
      message: 'Disponibilidad configurada correctamente',
      data: {
        id: availabilityId,
        professionalId,
        centerId,
        ...availabilityData
      }
    };
  } catch (error) {
    console.error('Error al configurar disponibilidad:', error);
    return {
      success: false,
      message: 'Error al configurar disponibilidad',
      error: error.message
    };
  }
};

/**
 * Obtiene la disponibilidad de un profesional en un centro
 * @param {string} professionalId - ID del profesional
 * @param {string} centerId - ID del centro educativo
 * @returns {Object} Resultado de la operación con datos de disponibilidad
 */
export const getProfessionalAvailability = async (professionalId, centerId) => {
  try {
    const q = query(
      collection(db, "availability"),
      where("professionalId", "==", professionalId),
      where("centerId", "==", centerId)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return {
        success: true,
        data: null
      };
    }
    
    const availabilityDoc = querySnapshot.docs[0];
    
    return {
      success: true,
      data: {
        id: availabilityDoc.id,
        ...availabilityDoc.data()
      }
    };
  } catch (error) {
    console.error('Error al obtener disponibilidad:', error);
    return {
      success: false,
      message: 'Error al obtener disponibilidad',
      error: error.message
    };
  }
};
