import React, { useState, useEffect } from 'react';
import ProfessionalLayout from './ProfessionalLayout';
// Importaciones de Firebase
import { saveConsultationRecord } from '../../services/consultationService';
import { useAuth } from '../../contexts/AuthContext';

// Paleta de colores
const COLORS = {
  primary: '#00B7D8',
  primaryDark: '#0095B0',
  textDark: '#2C3E50',
  textMedium: '#4A6572',
  cardBg: '#F9FBFC',
  lightBg: '#F7FAFC',
  accent: '#4CAF50',
  warning: '#FF9800',
  danger: '#E74C3C',
  lightGrey: '#ECEFF1'
};

// Demo badge inline
const DemoBadge = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 10,
      right: 10,
      background: '#00B7D8',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: 20,
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: 0.5,
      zIndex: 1000,
    }}>
      DEMO
    </div>
  );
};

// Componente de Alerta/Aviso
const Alert = ({ type, children, onClose }) => {
  const bgColor = type === 'warning' 
    ? 'rgba(255, 152, 0, 0.1)' 
    : type === 'danger' 
      ? 'rgba(231, 76, 60, 0.1)' 
      : type === 'success'
        ? 'rgba(76, 175, 80, 0.1)'
        : 'rgba(0, 183, 216, 0.1)';
  
  const icon = type === 'warning' 
    ? '⚠️' 
    : type === 'danger' 
      ? '🚨' 
      : type === 'success'
        ? '✅'
        : 'ℹ️';
  
  return (
    <div style={{
      background: bgColor,
      padding: '12px 16px',
      borderRadius: 8,
      marginBottom: 16,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      position: 'relative'
    }}>
      <div style={{ fontSize: 18 }}>{icon}</div>
      <div style={{ 
        color: COLORS.textDark,
        fontSize: 14,
        lineHeight: 1.5,
        flex: 1
      }}>
        {children}
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 18,
            cursor: 'pointer',
            padding: 0,
            color: COLORS.textMedium,
            position: 'absolute',
            top: 8,
            right: 8
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

// Componente de Grupo de Opciones (Checkbox)
const CheckboxGroup = ({ options, selected, onChange, title }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      {title && (
        <label style={{ 
          display: 'block', 
          marginBottom: 8, 
          fontSize: 14, 
          fontWeight: 500, 
          color: COLORS.textDark 
        }}>
          {title} <span style={{ color: COLORS.danger }}>*</span>
        </label>
      )}
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 8 
      }}>
        {options.map((option) => (
          <div 
            key={option.value}
            onClick={() => onChange(option.value)}
            style={{
              background: selected.includes(option.value) ? 'rgba(0, 183, 216, 0.1)' : COLORS.lightBg,
              border: selected.includes(option.value) ? `2px solid ${COLORS.primary}` : `2px solid ${COLORS.lightGrey}`,
              borderRadius: 8,
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              border: `2px solid ${selected.includes(option.value) ? COLORS.primary : COLORS.lightGrey}`,
              background: selected.includes(option.value) ? COLORS.primary : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 12
            }}>
              {selected.includes(option.value) && '✓'}
            </div>
            <span style={{ 
              fontSize: 14, 
              color: selected.includes(option.value) ? COLORS.primary : COLORS.textDark,
              fontWeight: selected.includes(option.value) ? 500 : 'normal'
            }}>
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente Principal de Formulario de Consulta
const ConsultationForm = ({ onNavigate, initialData = null, demoMode = false }) => {
  const { user, userData } = useAuth();
  
  // Estados del formulario
  const [nre, setNre] = useState(initialData?.nre || '');
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState(initialData?.startTime || '');
  const [endTime, setEndTime] = useState(initialData?.endTime || '');
  const [consultationType, setConsultationType] = useState(initialData?.consultationType || 'presencial');
  const [course, setCourse] = useState(initialData?.course || '');
  const [age, setAge] = useState(initialData?.age || '');
  const [gender, setGender] = useState(initialData?.gender || '');
  const [consultationReasons, setConsultationReasons] = useState(initialData?.consultationReasons || []);
  const [mentalHealthOptions, setMentalHealthOptions] = useState(initialData?.mentalHealthOptions || []);
  const [abuseOptions, setAbuseOptions] = useState(initialData?.abuseOptions || []);
  const [addictionOptions, setAddictionOptions] = useState(initialData?.addictionOptions || []);
  const [otherReason, setOtherReason] = useState(initialData?.otherReason || '');
  const [interventionTypes, setInterventionTypes] = useState(initialData?.interventionTypes || []);
  const [referralDetails, setReferralDetails] = useState(initialData?.referralDetails || '');
  const [notes, setNotes] = useState(initialData?.notes || '');
  
  // Estados para control de la UI
  const [showDerivationAlert, setShowDerivationAlert] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Detectar si hay derivación seleccionada al cargar datos iniciales
  useEffect(() => {
    if (initialData?.interventionTypes?.includes('derivacion')) {
      setShowDerivationAlert(true);
    }
  }, [initialData]);
  
  // Opciones para campos de selección
  const genderOptions = [
    { value: '', label: 'Seleccionar' },
    { value: 'hombre', label: 'Hombre' },
    { value: 'mujer', label: 'Mujer' },
    { value: 'otro', label: 'Otro' }
  ];
  
  const courseOptions = [
    { value: '', label: 'Seleccionar' },
    // ESO
    { value: '1eso', label: '1º ESO' },
    { value: '2eso', label: '2º ESO' },
    { value: '3eso', label: '3º ESO' },
    { value: '4eso', label: '4º ESO' },
    // Bachillerato
    { value: '1bach', label: '1º Bachillerato' },
    { value: '2bach', label: '2º Bachillerato' },
    // FP Básica
    { value: '1fpb', label: '1º FP Básica' },
    { value: '2fpb', label: '2º FP Básica' },
    // FP Grado Medio
    { value: '1fpgm', label: '1º FP Grado Medio' },
    { value: '2fpgm', label: '2º FP Grado Medio' },
    // FP Grado Superior
    { value: '1fpgs', label: '1º FP Grado Superior' },
    { value: '2fpgs', label: '2º FP Grado Superior' }
  ];
  
  const reasonOptions = [
    { value: 'sexualidad', label: 'Sexualidad' },
    { value: 'alimentacion', label: 'Alimentación' },
    { value: 'ejercicio_fisico', label: 'Ejercicio físico' },
    { value: 'salud_mental', label: 'Salud mental' },
    { value: 'adicciones', label: 'Adicciones' },
    { value: 'acoso', label: 'Acoso' },
    { value: 'relaciones', label: 'Relaciones' },
    { value: 'otro', label: 'Otro (especificar)' }
  ];
  
  const mentalHealthSubOptions = [
    { value: 'ansiedad', label: 'Ansiedad' },
    { value: 'depresion', label: 'Depresión' },
    { value: 'autolesiones', label: 'Autolesiones' },
    { value: 'ideacion_suicida', label: 'Ideación suicida' },
    { value: 'trastorno_alimentario', label: 'Trastorno alimentario' },
    { value: 'insomnio', label: 'Problemas de sueño' },
    { value: 'otro_salud_mental', label: 'Otro' }
  ];
  
  const abuseSubOptions = [
    { value: 'acoso_escolar', label: 'Escolar/Bullying' },
    { value: 'acoso_sexual', label: 'Sexual' },
    { value: 'acoso_digital', label: 'Digital/Ciberbullying' },
    { value: 'acoso_familiar', label: 'Familiar' },
    { value: 'otro_acoso', label: 'Otro tipo' }
  ];
  
  const addictionSubOptions = [
    { value: 'alcohol', label: 'Alcohol' },
    { value: 'tabaco', label: 'Tabaco' },
    { value: 'cannabis', label: 'Cannabis' },
    { value: 'otras_drogas', label: 'Otras drogas' },
    { value: 'pantallas', label: 'Pantallas/Tecnología' },
    { value: 'juegos_apuestas', label: 'Juegos/Apuestas' },
    { value: 'otra_adiccion', label: 'Otra' }
  ];
  
  const interventionOptions = [
    { value: 'consejo', label: 'Consejo' },
    { value: 'derivacion', label: 'Derivación' },
    { value: 'seguimiento', label: 'Seguimiento' },
    { value: 'otro', label: 'Otro' }
  ];
  
  // Manejar cambio en motivos de consulta
  const handleReasonChange = (reason) => {
    let newReasons;
    
    if (consultationReasons.includes(reason)) {
      newReasons = consultationReasons.filter(r => r !== reason);
      
      // Si quitamos 'salud_mental', resetear opciones específicas
      if (reason === 'salud_mental') {
        setMentalHealthOptions([]);
      }
      
      // Si quitamos 'acoso', resetear opciones específicas
      if (reason === 'acoso') {
        setAbuseOptions([]);
      }
      
      // Si quitamos 'adicciones', resetear opciones específicas
      if (reason === 'adicciones') {
        setAddictionOptions([]);
      }
    } else {
      newReasons = [...consultationReasons, reason];
    }
    
    setConsultationReasons(newReasons);
    
    // Limpiar error si se selecciona al menos una opción
    if (newReasons.length > 0) {
      setFormErrors({...formErrors, consultationReasons: null});
    }
  };
  
  // Manejar cambio en opciones de salud mental
  const handleMentalHealthOptionChange = (option) => {
    let newOptions;
    
    if (mentalHealthOptions.includes(option)) {
      newOptions = mentalHealthOptions.filter(o => o !== option);
    } else {
      newOptions = [...mentalHealthOptions, option];
    }
    
    setMentalHealthOptions(newOptions);
  };
  
  // Manejar cambio en opciones de acoso
  const handleAbuseOptionChange = (option) => {
    let newOptions;
    
    if (abuseOptions.includes(option)) {
      newOptions = abuseOptions.filter(o => o !== option);
    } else {
      newOptions = [...abuseOptions, option];
    }
    
    setAbuseOptions(newOptions);
  };
  
  // Manejar cambio en opciones de adicciones
  const handleAddictionOptionChange = (option) => {
    let newOptions;
    
    if (addictionOptions.includes(option)) {
      newOptions = addictionOptions.filter(o => o !== option);
    } else {
      newOptions = [...addictionOptions, option];
    }
    
    setAddictionOptions(newOptions);
  };
  
  // Manejar cambio en tipo de intervención
  const handleInterventionChange = (intervention) => {
    let newInterventions;
    
    if (interventionTypes.includes(intervention)) {
      newInterventions = interventionTypes.filter(i => i !== intervention);
      
      if (intervention === 'derivacion') {
        setShowDerivationAlert(false);
      }
    } else {
      newInterventions = [...interventionTypes, intervention];
      
      if (intervention === 'derivacion') {
        setShowDerivationAlert(true);
      }
    }
    
    setInterventionTypes(newInterventions);
    
    // Limpiar error si se selecciona al menos una opción
    if (newInterventions.length > 0) {
      setFormErrors({...formErrors, interventionTypes: null});
    }
  };
  
  // Validar formulario
  const validateForm = () => {
    const errors = {};
    
    if (!nre.trim()) errors.nre = 'El NRE es obligatorio';
    if (!date) errors.date = 'La fecha es obligatoria';
    if (!startTime) errors.startTime = 'La hora de inicio es obligatoria';
    if (!age) errors.age = 'La edad es obligatoria';
    if (!course) errors.course = 'El curso es obligatorio';
    if (!gender) errors.gender = 'El sexo es obligatorio';
    if (consultationReasons.length === 0) errors.consultationReasons = 'Debe seleccionar al menos un motivo de consulta';
    if (interventionTypes.length === 0) errors.interventionTypes = 'Debe seleccionar al menos un tipo de intervención';
    
    // Si seleccionó "otro" como motivo pero no especificó
    if (consultationReasons.includes('otro') && !otherReason.trim()) {
      errors.otherReason = 'Debe especificar el otro motivo de consulta';
    }
    
    // Si seleccionó derivación pero no especificó detalles
    if (interventionTypes.includes('derivacion') && !referralDetails.trim()) {
      errors.referralDetails = 'Debe especificar los detalles de la derivación';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Mostrar mensaje de error general
      window.scrollTo(0, 0);
      return;
    }
    
    setIsLoading(true);
    setFormErrors({});
    
    try {
      // Preparar datos para guardar
      const consultationData = {
        nre: nre.trim(),
        date,
        startTime,
        endTime,
        consultationType,
        age: parseInt(age),
        course,
        gender,
        consultationReasons,
        mentalHealthOptions: consultationReasons.includes('salud_mental') ? mentalHealthOptions : [],
        abuseOptions: consultationReasons.includes('acoso') ? abuseOptions : [],
        addictionOptions: consultationReasons.includes('adicciones') ? addictionOptions : [],
        otherReason: consultationReasons.includes('otro') ? otherReason.trim() : '',
        interventionTypes,
        referralDetails: interventionTypes.includes('derivacion') ? referralDetails.trim() : '',
        notes: notes.trim(),
        // Datos del profesional
        professionalId: demoMode ? 'demo-professional' : user?.uid,
        professionalName: demoMode 
          ? 'Demo Professional' 
          : userData 
            ? `${userData.nombre} ${userData.apellidos}` 
            : 'Profesional',
        professionalEmail: demoMode ? 'demo@carm.es' : userData?.email || user?.email,
        centroSalud: demoMode ? 'Centro Demo' : userData?.centroSalud,
        // Metadatos
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // En modo demo, solo simular guardado
      if (demoMode) {
        console.log('Datos de consulta (modo demo):', consultationData);
        
        // Simular delay de guardado
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSuccessMessage(initialData ? 'Consulta actualizada correctamente (modo demo)' : 'Consulta registrada correctamente (modo demo)');
        
        // Limpiar formulario si es nuevo registro
        if (!initialData) {
          resetForm();
        }
        
        // Desplazar al inicio para mostrar mensaje de éxito
        window.scrollTo(0, 0);
        
        // Cerrar después de un tiempo si es edición
        if (initialData) {
          setTimeout(() => {
            handleBack();
          }, 2000);
        }
      } else {
        // Guardar en Firebase
        let result;
        
        // Añadir ID si es una actualización
        if (initialData && initialData.id) {
          consultationData.id = initialData.id;
        }
        
        // Guardar consulta (crear nueva o actualizar existente)
        result = await saveConsultationRecord(consultationData);
        setSuccessMessage(initialData && initialData.id ? 'Consulta actualizada correctamente' : 'Consulta registrada correctamente');
        
        console.log('Consulta guardada en Firebase:', result);
        
        // Limpiar formulario si es nuevo registro
        if (!initialData) {
          resetForm();
        }
        
        // Desplazar al inicio para mostrar mensaje de éxito
        window.scrollTo(0, 0);
        
        // Cerrar después de un tiempo si es edición
        if (initialData) {
          setTimeout(() => {
            handleBack();
          }, 2000);
        }
      }
      
    } catch (error) {
      console.error('Error al guardar la consulta:', error);
      
      let errorMessage = 'Error al guardar la consulta. Inténtalo de nuevo.';
      
      // Manejar diferentes tipos de errores de Firebase
      if (error.code) {
        switch (error.code) {
          case 'permission-denied':
            errorMessage = 'No tienes permisos para realizar esta acción.';
            break;
          case 'network-request-failed':
            errorMessage = 'Error de conexión. Verifica tu internet.';
            break;
          case 'unauthenticated':
            errorMessage = 'Debes iniciar sesión para guardar consultas.';
            break;
          default:
            errorMessage = error.message || errorMessage;
        }
      }
      
      setFormErrors({ general: errorMessage });
      window.scrollTo(0, 0);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Resetear formulario
  const resetForm = () => {
    setNre('');
    setDate(new Date().toISOString().split('T')[0]);
    setStartTime('');
    setEndTime('');
    setConsultationType('presencial');
    setCourse('');
    setAge('');
    setGender('');
    setConsultationReasons([]);
    setMentalHealthOptions([]);
    setAbuseOptions([]);
    setAddictionOptions([]);
    setOtherReason('');
    setInterventionTypes([]);
    setReferralDetails('');
    setNotes('');
    setShowDerivationAlert(false);
    setFormErrors({});
  };
  
  const handleBack = () => {
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };
  
  // Renderizar alertas
  const renderAlerts = () => {
    return (
      <div style={{ marginBottom: 16 }}>
        {/* Mensajes de error/éxito */}
        {formErrors.general && (
          <Alert type="danger" onClose={() => setFormErrors({...formErrors, general: null})}>
            {formErrors.general}
          </Alert>
        )}
        
        {successMessage && (
          <Alert type="success" onClose={() => setSuccessMessage('')}>
            {successMessage}
          </Alert>
        )}
        
        {/* Modo demo notice */}
        {demoMode && (
          <Alert type="warning">
            <strong>Modo Demo:</strong> Los datos no se guardarán permanentemente. En la versión real, se almacenarían en Firebase Firestore.
          </Alert>
        )}
        
        {/* Alertas contextuales */}
        {showDerivationAlert && (
          <Alert type="warning">
            <strong>Recordatorio:</strong> Has seleccionado derivación como tipo de intervención. 
            Por favor, especifica los detalles de la derivación en el campo correspondiente.
          </Alert>
        )}
        
        {/* Alerta para autenticación requerida */}
        {!demoMode && !user && (
          <Alert type="danger">
            <strong>Autenticación requerida:</strong> Debes iniciar sesión para guardar consultas.
          </Alert>
        )}
      </div>
    );
  };
  
  return (
    <ProfessionalLayout 
      title={initialData ? "Editar Consulta" : "Registro de Consulta"} 
      onBack={handleBack}
      activeScreen="consultation-form"
      onNavigate={onNavigate}
    >
      {demoMode && <DemoBadge />}
      
      {/* Agrupamos todas las alertas al inicio del formulario para mejor visibilidad */}
      {renderAlerts()}
      
      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        {/* Datos básicos */}
        <div style={{ 
          background: 'white', 
          padding: 16, 
          borderRadius: 12, 
          marginBottom: 16,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ 
            fontSize: 18, 
            margin: '0 0 16px 0', 
            color: COLORS.textDark 
          }}>
            Datos básicos
          </h2>
          
          <div style={{ marginBottom: 16 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontSize: 14, 
              fontWeight: 500, 
              color: COLORS.textDark 
            }}>
              NRE <span style={{ color: COLORS.danger }}>*</span>
            </label>
            <input 
              type="text" 
              value={nre}
              onChange={(e) => {
                setNre(e.target.value);
                if (e.target.value.trim()) {
                  setFormErrors({...formErrors, nre: null});
                }
              }}
              placeholder="Número de Registro del Estudiante"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 8,
                border: formErrors.nre ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                fontSize: 14
              }}
            />
            {formErrors.nre && (
              <p style={{ 
                color: COLORS.danger, 
                margin: '4px 0 0 0', 
                fontSize: 12 
              }}>
                {formErrors.nre}
              </p>
            )}
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: 16,
            marginBottom: 16
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Fecha <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  if (e.target.value) {
                    setFormErrors({...formErrors, date: null});
                  }
                }}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.date ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14
                }}
              />
              {formErrors.date && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.date}
                </p>
              )}
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Hora inicio <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <input 
                type="time" 
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                  if (e.target.value) {
                    setFormErrors({...formErrors, startTime: null});
                  }
                }}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.startTime ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14
                }}
              />
              {formErrors.startTime && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.startTime}
                </p>
              )}
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Hora fin
              </label>
              <input 
                type="time" 
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14
                }}
              />
            </div>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontSize: 14, 
              fontWeight: 500, 
              color: COLORS.textDark 
            }}>
              Tipo de consulta
            </label>
            <div style={{ 
              display: 'flex', 
              gap: 16 
            }}>
              <div 
                onClick={() => !isLoading && setConsultationType('presencial')}
                style={{
                  flex: 1,
                  background: consultationType === 'presencial' ? 'rgba(0, 183, 216, 0.1)' : COLORS.lightBg,
                  border: consultationType === 'presencial' ? `2px solid ${COLORS.primary}` : `2px solid ${COLORS.lightGrey}`,
                  borderRadius: 8,
                  padding: '10px 12px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'all 0.2s ease',
                  opacity: isLoading ? 0.6 : 1
                }}
              >
                <div style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  border: `2px solid ${consultationType === 'presencial' ? COLORS.primary : COLORS.lightGrey}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {consultationType === 'presencial' && (
                    <div style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: COLORS.primary
                    }} />
                  )}
                </div>
                <span style={{ 
                  fontSize: 14, 
                  color: consultationType === 'presencial' ? COLORS.primary : COLORS.textDark,
                  fontWeight: consultationType === 'presencial' ? 500 : 'normal'
                }}>
                  Presencial
                </span>
              </div>
              
              <div 
                onClick={() => !isLoading && setConsultationType('virtual')}
                style={{
                  flex: 1,
                  background: consultationType === 'virtual' ? 'rgba(0, 183, 216, 0.1)' : COLORS.lightBg,
                  border: consultationType === 'virtual' ? `2px solid ${COLORS.primary}` : `2px solid ${COLORS.lightGrey}`,
                  borderRadius: 8,
                  padding: '10px 12px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'all 0.2s ease',
                  opacity: isLoading ? 0.6 : 1
                }}
              >
                <div style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  border: `2px solid ${consultationType === 'virtual' ? COLORS.primary : COLORS.lightGrey}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {consultationType === 'virtual' && (
                    <div style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: COLORS.primary
                    }} />
                  )}
                </div>
                <span style={{ 
                  fontSize: 14, 
                  color: consultationType === 'virtual' ? COLORS.primary : COLORS.textDark,
                  fontWeight: consultationType === 'virtual' ? 500 : 'normal'
                }}>
                  Virtual
                </span>
              </div>
            </div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: 16
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Edad <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <input 
                type="number" 
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  if (e.target.value) {
                    setFormErrors({...formErrors, age: null});
                  }
                }}
                min="10"
                max="25"
                placeholder="Edad"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.age ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14
                }}
              />
              {formErrors.age && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.age}
                </p>
              )}
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Curso <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <select 
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                  if (e.target.value) {
                    setFormErrors({...formErrors, course: null});
                  }
                }}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.course ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14,
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 10px center',
                  backgroundColor: 'white'
                }}
              >
                {courseOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.course && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.course}
                </p>
              )}
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Sexo <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <select 
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                  if (e.target.value) {
                    setFormErrors({...formErrors, gender: null});
                  }
                }}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.gender ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14,
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 10px center',
                  backgroundColor: 'white'
                }}
              >
                {genderOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.gender && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.gender}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Motivo de consulta */}
        <div style={{ 
          background: 'white', 
          padding: 16, 
          borderRadius: 12, 
          marginBottom: 16,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ 
            fontSize: 18, 
            margin: '0 0 16px 0', 
            color: COLORS.textDark 
          }}>
            Motivo de consulta
          </h2>
          
          <CheckboxGroup 
            options={reasonOptions}
            selected={consultationReasons}
            onChange={handleReasonChange}
            title="Seleccione los motivos de consulta"
          />
          
          {formErrors.consultationReasons && (
            <p style={{ 
              color: COLORS.danger, 
              margin: '4px 0 16px 0', 
              fontSize: 12 
            }}>
              {formErrors.consultationReasons}
            </p>
          )}
          
          {/* Opciones específicas para salud mental */}
          {consultationReasons.includes('salud_mental') && (
            <div style={{ marginBottom: 16 }}>
              <CheckboxGroup 
                options={mentalHealthSubOptions}
                selected={mentalHealthOptions}
                onChange={handleMentalHealthOptionChange}
                title="Especifique problemas de salud mental"
              />
            </div>
          )}
          
          {/* Opciones específicas para acoso */}
          {consultationReasons.includes('acoso') && (
            <div style={{ marginBottom: 16 }}>
              <CheckboxGroup 
                options={abuseSubOptions}
                selected={abuseOptions}
                onChange={handleAbuseOptionChange}
                title="Especifique tipo de acoso"
              />
            </div>
          )}
          
          {/* Opciones específicas para adicciones */}
          {consultationReasons.includes('adicciones') && (
            <div style={{ marginBottom: 16 }}>
              <CheckboxGroup 
                options={addictionSubOptions}
                selected={addictionOptions}
                onChange={handleAddictionOptionChange}
                title="Especifique tipo de adicción"
              />
            </div>
          )}
          
          {/* Campo para especificar otro motivo */}
          {consultationReasons.includes('otro') && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Especifique otro motivo <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <input 
                type="text" 
                value={otherReason}
                onChange={(e) => {
                  setOtherReason(e.target.value);
                  if (e.target.value.trim()) {
                    setFormErrors({...formErrors, otherReason: null});
                  }
                }}
                placeholder="Describa el motivo de consulta"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.otherReason ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14
                }}
              />
              {formErrors.otherReason && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.otherReason}
                </p>
              )}
            </div>
          )}
          
          {/* Alerta unificada para casos sensibles */}
          {(consultationReasons.includes('acoso') || 
            (consultationReasons.includes('salud_mental') && 
             (mentalHealthOptions.includes('autolesiones') || mentalHealthOptions.includes('ideacion_suicida'))) || 
            consultationReasons.includes('adicciones')) && (
              <Alert type="danger">
                <strong>¡Importante!</strong> Recuerda que este tipo de consulta debe notificarse siempre al centro educativo para poder activar los protocolos apropiados.
              </Alert>
          )}
        </div>
        
        {/* Intervención */}
        <div style={{ 
          background: 'white', 
          padding: 16, 
          borderRadius: 12, 
          marginBottom: 16,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ 
            fontSize: 18, 
            margin: '0 0 16px 0', 
            color: COLORS.textDark 
          }}>
            Intervención
          </h2>
          
          <CheckboxGroup 
            options={interventionOptions}
            selected={interventionTypes}
            onChange={handleInterventionChange}
            title="Tipo de intervención realizada"
          />
          
          {formErrors.interventionTypes && (
            <p style={{ 
              color: COLORS.danger, 
              margin: '4px 0 16px 0', 
              fontSize: 12 
            }}>
              {formErrors.interventionTypes}
            </p>
          )}
          
          {/* Campo para especificar detalles de derivación */}
          {interventionTypes.includes('derivacion') && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontSize: 14, 
                fontWeight: 500, 
                color: COLORS.textDark 
              }}>
                Detalles de la derivación <span style={{ color: COLORS.danger }}>*</span>
              </label>
              <textarea 
                value={referralDetails}
                onChange={(e) => {
                  setReferralDetails(e.target.value);
                  if (e.target.value.trim()) {
                    setFormErrors({...formErrors, referralDetails: null});
                  }
                }}
                placeholder="Especifique a dónde se deriva y motivo"
                rows={3}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: formErrors.referralDetails ? `1px solid ${COLORS.danger}` : `1px solid ${COLORS.lightGrey}`,
                  fontSize: 14,
                  resize: 'vertical'
                }}
              />
              {formErrors.referralDetails && (
                <p style={{ 
                  color: COLORS.danger, 
                  margin: '4px 0 0 0', 
                  fontSize: 12 
                }}>
                  {formErrors.referralDetails}
                </p>
              )}
            </div>
          )}
          
          {/* Notas adicionales */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontSize: 14, 
              fontWeight: 500, 
              color: COLORS.textDark 
            }}>
              Notas adicionales
            </label>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Observaciones, recomendaciones, etc."
              rows={4}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 8,
                border: `1px solid ${COLORS.lightGrey}`,
                fontSize: 14,
                resize: 'vertical'
              }}
            />
          </div>
        </div>
        
        {/* Botones de acción */}
        <div style={{ 
          display: 'flex', 
          gap: 16, 
          marginTop: 24 
        }}>
          <button 
            type="button"
            onClick={handleBack}
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px',
              background: 'white',
              border: `1px solid ${COLORS.lightGrey}`,
              borderRadius: 8,
              color: COLORS.textDark,
              fontSize: 14,
              fontWeight: 500,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.6 : 1
            }}
          >
            Cancelar
          </button>
          
          <button 
            type="submit"
            disabled={isLoading || (!demoMode && !user)}
            style={{
              flex: 1,
              padding: '12px',
              background: isLoading || (!demoMode && !user) ? COLORS.lightGrey : COLORS.primary,
              border: 'none',
              borderRadius: 8,
              color: 'white',
              fontSize: 14,
              fontWeight: 500,
              cursor: isLoading || (!demoMode && !user) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}
          >
            {isLoading && (
              <div style={{
                width: 16,
                height: 16,
                border: '2px solid rgba(255,255,255,0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            )}
            {isLoading 
              ? (initialData ? 'Actualizando...' : 'Guardando...') 
              : (initialData ? 'Actualizar consulta' : 'Guardar consulta')
            }
          </button>
        </div>
      </form>
      
      {/* CSS para animación de loading */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </ProfessionalLayout>
  );
};

export default ConsultationForm;