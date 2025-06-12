// ConsultationService.js
// Servicio para gestionar las consultas médicas

/**
 * Guarda un registro de consulta médica
 * @param {Object} consultationData - Datos de la consulta a guardar
 * @returns {Object} Resultado de la operación
 */
export const saveConsultationRecord = (consultationData) => {
    try {
      // En una implementación real, aquí se enviarían los datos al backend
      console.log('Guardando consulta:', consultationData);
      
      // Simulamos una respuesta exitosa para la demo
      return {
        success: true,
        message: consultationData.id 
          ? 'Consulta actualizada correctamente' 
          : 'Consulta registrada correctamente',
        data: {
          ...consultationData,
          id: consultationData.id || Math.floor(Math.random() * 10000) // Generamos un ID si es nuevo
        }
      };
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
   * @returns {Array} Lista de consultas del estudiante
   */
  export const getStudentConsultationHistory = (nre) => {
    // En una implementación real, aquí se obtendría el historial desde el backend
    
    // Datos de ejemplo para la demo
    const mockHistory = [
      {
        id: 1001,
        nre: nre,
        date: '2025-04-10',
        startTime: '10:30',
        endTime: '11:00',
        consultationType: 'presencial',
        age: 15,
        course: '3eso',
        gender: 'mujer',
        consultationReasons: ['sexualidad', 'salud_mental'],
        mentalHealthOptions: ['ansiedad'],
        interventionTypes: ['consejo', 'seguimiento'],
        notes: 'La estudiante muestra signos de ansiedad relacionados con exámenes. Se proporcionaron técnicas de relajación y se programó seguimiento.'
      },
      {
        id: 1002,
        nre: nre,
        date: '2025-03-15',
        startTime: '09:15',
        endTime: '09:45',
        consultationType: 'presencial',
        age: 15,
        course: '3eso',
        gender: 'mujer',
        consultationReasons: ['sexualidad'],
        interventionTypes: ['consejo'],
        notes: 'Consulta informativa sobre métodos anticonceptivos. Se proporcionó información y folletos.'
      }
    ];
    
    return {
      success: true,
      data: mockHistory
    };
  };
  
  /**
   * Obtiene las citas programadas para un profesional
   * @param {string} professionalId - ID del profesional
   * @returns {Array} Lista de citas programadas
   */
  export const getProfessionalAppointments = (professionalId = 'demo') => {
    // En una implementación real, aquí se obtendrían las citas desde el backend
    
    // Datos de ejemplo para la demo
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const formatDate = (date) => {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };
    
    const mockAppointments = [
      {
        id: 2001,
        nre: '30012345',
        studentName: 'NRE: 30012345',
        date: formatDate(today),
        time: '10:30',
        duration: 30,
        center: 'IES Ibáñez Martín',
        status: 'pending',
        type: 'presencial',
        reason: 'Consulta general'
      },
      {
        id: 2002,
        nre: '30023456',
        studentName: 'NRE: 30023456',
        date: formatDate(today),
        time: '11:15',
        duration: 30,
        center: 'IES Ibáñez Martín',
        status: 'pending',
        type: 'presencial',
        reason: 'Seguimiento'
      },
      {
        id: 2003,
        nre: '30045678',
        studentName: 'NRE: 30045678',
        date: formatDate(tomorrow),
        time: '09:30',
        duration: 30,
        center: 'IES Mediterráneo',
        status: 'pending',
        type: 'presencial',
        reason: 'Primera consulta'
      },
      {
        id: 2004,
        nre: '30056789',
        studentName: 'NRE: 30056789',
        date: formatDate(tomorrow),
        time: '10:15',
        duration: 30,
        center: 'IES Mediterráneo',
        status: 'pending',
        type: 'virtual',
        reason: 'Consulta nutricional'
      }
    ];
    
    return {
      success: true,
      data: mockAppointments
    };
  };
  
  /**
   * Actualiza el estado de una cita
   * @param {number} appointmentId - ID de la cita
   * @param {string} status - Nuevo estado de la cita
   * @returns {Object} Resultado de la operación
   */
  export const updateAppointmentStatus = (appointmentId, status) => {
    // En una implementación real, aquí se actualizaría el estado en el backend
    console.log(`Actualizando cita ${appointmentId} a estado: ${status}`);
    
    return {
      success: true,
      message: 'Estado de la cita actualizado correctamente'
    };
  };
  