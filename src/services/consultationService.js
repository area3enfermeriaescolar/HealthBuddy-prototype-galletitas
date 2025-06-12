// src/services/consultationService.js
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
  getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Guarda un registro de consulta médica
 * @param {Object} consultationData - Datos de la consulta a guardar
 * @returns {Object} Resultado de la operación
 */
export const saveConsultationRecord = async (consultationData) => {
  try {
    let result;
    
    // Si tiene ID, actualizar documento existente
    if (consultationData.id) {
      const consultationRef = doc(db, "consultations", consultationData.id);
      
      // Verificar que la consulta existe
      const consultationDoc = await getDoc(consultationRef);
      if (!consultationDoc.exists()) {
        throw new Error("La consulta no existe");
      }
      
      // Actualizar documento
      await updateDoc(consultationRef, {
        ...consultationData,
        updatedAt: serverTimestamp()
      });
      
      result = {
        success: true,
        message: 'Consulta actualizada correctamente',
        data: {
          ...consultationData,
          id: consultationData.id
        }
      };
    } else {
      // Crear nuevo documento
      const docRef = await addDoc(collection(db, "consultations"), {
        ...consultationData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      result = {
        success: true,
        message: 'Consulta registrada correctamente',
        data: {
          ...consultationData,
          id: docRef.id
        }
      };
    }
    
    // Registrar en auditoría
    await addDoc(collection(db, "audit"), {
      action: consultationData.id ? "update" : "create",
      resource: "consultation",
      resourceId: result.data.id,
      userId: consultationData.professionalId,
      userType: "professional",
      timestamp: serverTimestamp(),
      metadata: {
        studentId: consultationData.studentId
      }
    });
    
    return result;
  } catch (error) {
    console.error('Error al guardar la consulta:', error);
    return {
      success: false,
      message: 'Error al guardar la consulta',
      error: error.message
    };
  }
};

/**
 * Obtiene el historial de consultas de un estudiante
 * @param {string} nre - Número de Registro del Estudiante
 * @returns {Object} Resultado de la operación con lista de consultas
 */
export const getStudentConsultationHistory = async (nre) => {
  try {
    const q = query(
      collection(db, "consultations"),
      where("nre", "==", nre),
      orderBy("date", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const consultations = [];
    
    querySnapshot.forEach((doc) => {
      consultations.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: consultations
    };
  } catch (error) {
    console.error('Error al obtener historial de consultas:', error);
    return {
      success: false,
      message: 'Error al obtener historial de consultas',
      error: error.message
    };
  }
};

/**
 * Obtiene las citas programadas para un profesional
 * @param {string} professionalId - ID del profesional
 * @returns {Object} Resultado de la operación con lista de citas
 */
export const getProfessionalAppointments = async (professionalId) => {
  try {
    const q = query(
      collection(db, "appointments"),
      where("professionalId", "==", professionalId),
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
 * @returns {Object} Resultado de la operación
 */
export const updateAppointmentStatus = async (appointmentId, status, userId) => {
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
      userType: "professional", // Asumimos que es un profesional quien actualiza
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
 * Obtiene una consulta por su ID
 * @param {string} consultationId - ID de la consulta
 * @returns {Object} Resultado de la operación con datos de la consulta
 */
export const getConsultationById = async (consultationId) => {
  try {
    const consultationRef = doc(db, "consultations", consultationId);
    const consultationDoc = await getDoc(consultationRef);
    
    if (!consultationDoc.exists()) {
      return {
        success: false,
        message: 'Consulta no encontrada'
      };
    }
    
    return {
      success: true,
      data: {
        id: consultationDoc.id,
        ...consultationDoc.data()
      }
    };
  } catch (error) {
    console.error('Error al obtener consulta:', error);
    return {
      success: false,
      message: 'Error al obtener la consulta',
      error: error.message
    };
  }
};

/**
 * Obtiene estadísticas de consultas por centro
 * @param {string} centerId - ID del centro educativo
 * @param {Object} dateRange - Rango de fechas para filtrar
 * @returns {Object} Resultado de la operación con estadísticas
 */
export const getConsultationStatsByCenter = async (centerId, dateRange = {}) => {
  try {
    let q = query(
      collection(db, "consultations"),
      where("centerId", "==", centerId)
    );
    
    // Añadir filtros de fecha si se proporcionan
    if (dateRange.start) {
      q = query(q, where("date", ">=", dateRange.start));
    }
    
    if (dateRange.end) {
      q = query(q, where("date", "<=", dateRange.end));
    }
    
    const querySnapshot = await getDocs(q);
    const consultations = [];
    
    querySnapshot.forEach((doc) => {
      consultations.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    // Calcular estadísticas
    const stats = {
      total: consultations.length,
      byReason: {},
      byGender: {},
      byAge: {},
      byCourse: {}
    };
    
    // Procesar cada consulta para generar estadísticas
    consultations.forEach(consultation => {
      // Por motivo de consulta
      if (consultation.consultationReasons) {
        consultation.consultationReasons.forEach(reason => {
          stats.byReason[reason] = (stats.byReason[reason] || 0) + 1;
        });
      }
      
      // Por género
      if (consultation.gender) {
        stats.byGender[consultation.gender] = (stats.byGender[consultation.gender] || 0) + 1;
      }
      
      // Por edad
      if (consultation.age) {
        stats.byAge[consultation.age] = (stats.byAge[consultation.age] || 0) + 1;
      }
      
      // Por curso
      if (consultation.course) {
        stats.byCourse[consultation.course] = (stats.byCourse[consultation.course] || 0) + 1;
      }
    });
    
    return {
      success: true,
      data: stats
    };
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    return {
      success: false,
      message: 'Error al obtener estadísticas de consultas',
      error: error.message
    };
  }
};
