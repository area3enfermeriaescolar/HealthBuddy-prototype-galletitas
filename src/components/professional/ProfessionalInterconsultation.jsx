import React, { useState, useEffect, useRef } from 'react';
import ProfessionalLayout from './ProfessionalLayout';

// Paleta de colores consistente con la aplicación
const COLORS = {
  primary: '#00B7D8',
  primaryDark: '#0095B0',
  textDark: '#2C3E50',
  textMedium: '#4A6572',
  cardBg: '#F9FBFC',
  accentGreen: '#27AE60',
  accentOrange: '#F39C12',
  accentRed: '#E74C3C',
  lightBg: '#F7FAFC',
  lightGrey: '#ECEFF1',
  purple: '#9C27B0'
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

// Componente de Tarjeta de Especialista
const SpecialistCard = ({ specialist, onSelect, active }) => {
  return (
    <div 
      onClick={() => onSelect(specialist)}
      style={{
        background: active ? `${specialist.color}10` : 'white',
        padding: 16,
        borderRadius: 12,
        textAlign: 'center',
        cursor: 'pointer',
        border: active ? `2px solid ${specialist.color}` : 'none',
        transition: 'transform 0.15s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ 
        fontSize: '1.8rem', 
        marginBottom: 8, 
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        backgroundColor: `${specialist.color}20`, 
        color: specialist.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {specialist.icon}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          fontWeight: 500,
          color: active ? specialist.color : COLORS.textDark,
          textAlign: 'center',
          width: '100%',
          lineHeight: '1.3',
          marginBottom: 4
        }}
      >
        {specialist.title}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 12,
          color: COLORS.textMedium,
          textAlign: 'center',
          width: '100%',
          lineHeight: '1.3'
        }}
      >
        {specialist.available ? 'Disponible' : 'No disponible'}
      </p>
    </div>
  );
};

// Componente de Mensaje de Chat
const ChatMessage = ({ message, isCurrentUser }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: isCurrentUser ? 'flex-end' : 'flex-start',
      marginBottom: 16
    }}>
      <div style={{ 
        background: isCurrentUser ? COLORS.primary : 'white', 
        color: isCurrentUser ? 'white' : COLORS.textDark, 
        padding: '10px 16px', 
        borderRadius: 16,
        borderBottomLeftRadius: isCurrentUser ? 16 : 4,
        borderBottomRightRadius: isCurrentUser ? 4 : 16,
        maxWidth: '80%',
        wordBreak: 'break-word',
        boxShadow: !isCurrentUser ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
        fontSize: 14
      }}>
        {message.text}
      </div>
      <span style={{ 
        fontSize: 11, 
        color: COLORS.textMedium, 
        marginTop: 4,
        alignSelf: isCurrentUser ? 'flex-end' : 'flex-start',
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }}>
        {message.time}
        {isCurrentUser && message.status === 'sent' && <span>✓</span>}
        {isCurrentUser && message.status === 'delivered' && <span>✓✓</span>}
        {isCurrentUser && message.status === 'read' && <span style={{ color: COLORS.primary }}>✓✓</span>}
      </span>
    </div>
  );
};

// Componente de Selector de Paciente para Interconsulta
const PatientSelector = ({ onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lista de pacientes de ejemplo
  const patients = [
    { nre: '30012345', age: 15, gender: 'Mujer', center: 'IES Mediterráneo', lastVisit: '15/04/2025' },
    { nre: '30023456', age: 16, gender: 'Hombre', center: 'IES San Juan Bosco', lastVisit: '10/04/2025' },
    { nre: '30034567', age: 14, gender: 'Mujer', center: 'IES Mar Menor', lastVisit: '12/04/2025' },
    { nre: '30045678', age: 17, gender: 'Hombre', center: 'IES Mediterráneo', lastVisit: '08/04/2025' },
  ];
  
  // Filtrar pacientes según término de búsqueda
  const filteredPatients = patients.filter(patient => 
    patient.nre.includes(searchTerm) || 
    patient.center.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: 12,
        padding: 20,
        width: '90%',
        maxWidth: 500,
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16
        }}>
          <h3 style={{ margin: 0, fontSize: 18, color: COLORS.textDark }}>
            Seleccionar Paciente
          </h3>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              color: COLORS.textMedium
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por NRE o centro..."
            style={{
              width: '100%',
              padding: '10px 16px 10px 40px',
              borderRadius: 8,
              border: `1px solid ${COLORS.lightGrey}`,
              fontSize: 14
            }}
          />
          <span style={{ 
            position: 'absolute', 
            left: 12, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: COLORS.textMedium,
            fontSize: 18
          }}>
            🔍
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: COLORS.textMedium,
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          )}
        </div>
        
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient, index) => (
            <div 
              key={index}
              onClick={() => onSelect(patient)}
              style={{
                background: 'white',
                padding: 12,
                borderRadius: 8,
                marginBottom: 8,
                cursor: 'pointer',
                border: `1px solid ${COLORS.lightGrey}`,
                transition: 'background-color 0.15s ease',
                ':hover': {
                  backgroundColor: COLORS.lightBg
                }
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <div>
                  <p style={{ 
                    margin: 0, 
                    fontWeight: 500, 
                    fontSize: 15,
                    color: COLORS.textDark,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <span style={{ color: COLORS.primary }}>📋</span>
                    NRE: {patient.nre}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: 8, 
                    marginTop: 4, 
                    fontSize: 13,
                    color: COLORS.textMedium
                  }}>
                    <span>{patient.age} años</span>
                    <span>|</span>
                    <span>{patient.gender}</span>
                  </div>
                </div>
                <div style={{
                  fontSize: 13,
                  color: COLORS.textMedium
                }}>
                  <div>{patient.center}</div>
                  <div style={{ textAlign: 'right', marginTop: 4 }}>
                    Última visita: {patient.lastVisit}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '20px 0', 
            color: COLORS.textMedium 
          }}>
            No se encontraron pacientes que coincidan con "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

// Componente Principal de Interconsulta
const ProfessionalInterconsultation = ({ onNavigate }) => {
  const [specialists, setSpecialists] = useState([
    { 
      id: 'mental-health', 
      title: 'Salud Mental', 
      icon: '🧠', 
      color: '#9C27B0', 
      available: true,
      description: 'Psicólogos y psiquiatras para consultas sobre salud mental de adolescentes.'
    },
    { 
      id: 'midwife', 
      title: 'Matrona', 
      icon: '👶', 
      color: '#E91E63', 
      available: true,
      description: 'Profesionales especializados en salud sexual y reproductiva.'
    },
    { 
      id: 'social-work', 
      title: 'Trabajo Social', 
      icon: '🤝', 
      color: '#FF9800', 
      available: true,
      description: 'Trabajadores sociales para situaciones de vulnerabilidad y recursos sociales.'
    },
    { 
      id: 'nutrition', 
      title: 'Nutrición', 
      icon: '🥗', 
      color: '#4CAF50', 
      available: true,
      description: 'Especialistas en nutrición y trastornos alimentarios.'
    },
    { 
      id: 'pediatrics', 
      title: 'Pediatría', 
      icon: '👨‍⚕️', 
      color: '#2196F3', 
      available: false,
      description: 'Médicos especialistas en salud infantil y adolescente.'
    },
    { 
      id: 'addiction', 
      title: 'Adicciones', 
      icon: '🚭', 
      color: '#795548', 
      available: true,
      description: 'Especialistas en prevención y tratamiento de adicciones.'
    }
  ]);
  
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientSelector, setShowPatientSelector] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [activeTab, setActiveTab] = useState('new');
  const [conversations, setConversations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Mensajes de chat para la demo
  const [messages, setMessages] = useState([
    // Se llenarán cuando se seleccione un especialista y paciente
  ]);

  // Historial de interconsultas (para demo)
  const pastConsultations = [
    {
      id: 1,
      specialist: 'mental-health',
      specialistName: 'Salud Mental',
      patientNRE: '30012345',
      date: '15/04/2025',
      status: 'active',
      lastMessage: 'Gracias por la información, programaré una evaluación en la próxima visita.',
      unread: true
    },
    {
      id: 2,
      specialist: 'nutrition',
      specialistName: 'Nutrición',
      patientNRE: '30023456',
      date: '10/04/2025',
      status: 'closed',
      lastMessage: 'Se ha completado el plan nutricional para el estudiante.',
      unread: false
    },
    {
      id: 3,
      specialist: 'social-work',
      specialistName: 'Trabajo Social',
      patientNRE: '30034567',
      date: '05/04/2025',
      status: 'pending',
      lastMessage: 'Necesito más información sobre la situación familiar.',
      unread: true
    }
  ];

  // Cargar conversaciones al inicio
  useEffect(() => {
    setConversations(pastConsultations);
  }, []);

  // Desplazarse al final del chat cuando cambian los mensajes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simular respuesta automática después de enviar un mensaje (solo para demo)
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'nurse') {
      const timer = setTimeout(() => {
        const newMessage = {
          id: Date.now(),
          text: getRandomResponse(selectedSpecialist?.id),
          sender: 'specialist',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'delivered'
        };
        
        setMessages([...messages, newMessage]);
      }, 2000 + Math.random() * 3000); // Respuesta entre 2 y 5 segundos
      
      return () => clearTimeout(timer);
    }
  }, [messages, selectedSpecialist]);

  // Generar respuestas aleatorias según especialista
  const getRandomResponse = (specialistId) => {
    const responses = {
      'mental-health': [
        "Basándome en lo que describes, podría tratarse de un caso de ansiedad social. ¿Ha manifestado dificultades para relacionarse en otros contextos?",
        "Es importante evaluar si estos síntomas están afectando su rendimiento académico. ¿Has observado algún cambio en sus calificaciones?",
        "Recomendaría una evaluación más completa. Me gustaría programar una teleconsulta con el estudiante, ¿podríamos coordinar para la próxima semana?",
        "La intervención temprana es clave en estos casos. Podríamos empezar con algunas técnicas de manejo de ansiedad que puedes implementar en el entorno escolar."
      ],
      'midwife': [
        "Es importante normalizar estas consultas sobre cambios corporales, son muy frecuentes a esta edad.",
        "Respecto a la información sobre métodos anticonceptivos, te enviaré material adaptado para adolescentes que puedes utilizar.",
        "Sería recomendable programar un taller informativo en el centro sobre salud sexual y reproductiva.",
        "Para casos como este, disponemos de un protocolo específico de atención. Te lo comparto para que puedas seguirlo."
      ],
      'social-work': [
        "Dada la situación familiar que describes, existen ayudas específicas a las que podrían acceder. Necesitaría que completes este formulario con más información.",
        "Podríamos coordinar una reunión con el departamento de orientación del centro para abordar este caso de manera integral.",
        "Te envío el directorio de recursos comunitarios disponibles para situaciones de vulnerabilidad en su zona.",
        "Es un caso que requiere seguimiento continuado. Propongo establecer un plan de intervención coordinado entre los servicios sanitarios y educativos."
      ],
      'nutrition': [
        "Por los hábitos alimentarios que describes, no parece haber señales de alarma, pero sería conveniente hacer un seguimiento.",
        "Te envío una guía con recomendaciones nutricionales específicas para deportistas adolescentes que puedes compartir.",
        "Los patrones de restricción alimentaria que mencionas podrían ser el inicio de un trastorno alimentario. Sugiero derivación para evaluación presencial.",
        "Podríamos organizar un taller práctico sobre alimentación saludable en el centro educativo, ¿te parecería útil?"
      ],
      'addiction': [
        "El patrón de uso de pantallas que describes es preocupante. Te envío un cuestionario validado para evaluar el nivel de adicción tecnológica.",
        "Para el consumo experimental de cannabis, te recomiendo implementar este protocolo de intervención breve desarrollado para el ámbito educativo.",
        "Sería importante involucrar a la familia en la intervención. ¿Has tenido la oportunidad de hablar con sus padres o tutores sobre este tema?",
        "Te propongo coordinar una sesión conjunta con el estudiante para evaluar mejor la situación y establecer un plan de reducción de riesgos."
      ]
    };
    
    // Si no hay respuestas específicas para ese especialista, usar respuestas genéricas
    const specialistResponses = responses[specialistId] || [
      "Gracias por la información compartida. Voy a analizar el caso.",
      "¿Podrías proporcionarme más detalles sobre los antecedentes?",
      "Esta situación requiere una evaluación presencial. ¿Podríamos coordinar una cita?",
      "Voy a consultar con el equipo y te responderé con recomendaciones específicas."
    ];
    
    return specialistResponses[Math.floor(Math.random() * specialistResponses.length)];
  };

  // Manejar selección de especialista
  const handleSelectSpecialist = (specialist) => {
    if (!specialist.available) {
      return; // No seleccionar especialistas no disponibles
    }
    
    setSelectedSpecialist(specialist);
    setShowPatientSelector(true);
  };

  // Manejar selección de paciente
  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setShowPatientSelector(false);
    setMessages([
      {
        id: 1,
        text: `Iniciando interconsulta sobre el estudiante con NRE ${patient.nre} con el servicio de ${selectedSpecialist.title}.`,
        sender: 'system',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    
    // Añadir esta nueva interconsulta a la lista
    const newConsultation = {
      id: Date.now(),
      specialist: selectedSpecialist.id,
      specialistName: selectedSpecialist.title,
      patientNRE: patient.nre,
      date: new Date().toLocaleDateString('es-ES'),
      status: 'active',
      lastMessage: 'Iniciando interconsulta...',
      unread: false
    };
    
    setConversations([newConsultation, ...conversations]);
    
    // Automáticamente cambiar a la pestaña de esta conversación
    setActiveTab('conversations');

    // Enfocar el input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // Enviar mensaje
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: messageInput,
      sender: 'nurse',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput('');
    
    // Actualizar la conversación en la lista
    const updatedConversations = conversations.map(conv => {
      if (conv.patientNRE === selectedPatient.nre && conv.specialist === selectedSpecialist.id) {
        return {
          ...conv,
          lastMessage: messageInput,
          date: new Date().toLocaleDateString('es-ES')
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    
    // Simular que pasa a "entregado" después de un momento
    setTimeout(() => {
      setMessages(currentMessages => 
        currentMessages.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);
    
    // Simular que pasa a "leído" después de otro momento
    setTimeout(() => {
      setMessages(currentMessages => 
        currentMessages.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
        )
      );
    }, 2000);
    
    // Enfocar el input nuevamente
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // Manejar tecla Enter para enviar mensaje
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Manejar clic en una conversación existente
  const handleConversationClick = (conversation) => {
    // Encontrar el especialista
    const specialist = specialists.find(s => s.id === conversation.specialist);
    setSelectedSpecialist(specialist);
    
    // Crear un objeto paciente con la información disponible
    setSelectedPatient({
      nre: conversation.patientNRE,
      // Otros campos podrían cargarse desde una API en una implementación real
      age: '---',
      gender: '---',
      center: '---'
    });
    
    // Cargar mensajes para esta conversación (simulado)
    setMessages([
      {
        id: 1,
        text: `Historial de interconsulta sobre el estudiante con NRE ${conversation.patientNRE} con el servicio de ${conversation.specialistName}.`,
        sender: 'system',
        time: '10:30'
      },
      {
        id: 2,
        text: "Buenos días, necesito orientación sobre un caso de posible ansiedad en un estudiante. Ha presentado episodios recurrentes de palpitaciones y dificultad para respirar durante las clases.",
        sender: 'nurse',
        time: '10:32',
        status: 'read'
      },
      {
        id: 3,
        text: "Gracias por la información. ¿Desde cuándo ha presentado estos síntomas? ¿Hay algún desencadenante identificable como exámenes o situaciones sociales específicas?",
        sender: 'specialist',
        time: '10:35'
      },
      {
        id: 4,
        text: "Los síntomas comenzaron hace aproximadamente un mes. Coincide con el inicio del período de exámenes, pero también ha mencionado que se siente observado y evaluado por sus compañeros constantemente.",
        sender: 'nurse',
        time: '10:40',
        status: 'read'
      },
      {
        id: 5,
        text: conversation.lastMessage,
        sender: 'specialist',
        time: '10:45'
      }
    ]);
    
    // Marcar como leída
    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversation.id) {
        return { ...conv, unread: false };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
  };

  // Volver a la selección de especialista
  const handleBackToSpecialists = () => {
    setSelectedSpecialist(null);
    setSelectedPatient(null);
    setMessages([]);
    setActiveTab('new');
  };

  // Filtrar conversaciones por término de búsqueda
  const filteredConversations = conversations.filter(conv => 
    conv.specialistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.patientNRE.includes(searchTerm)
  );

  // Determinar si se está viendo una conversación activa
  const isViewingConversation = selectedSpecialist && selectedPatient;

  return (
    <ProfessionalLayout 
      title="Interconsulta"
      onBack={() => onNavigate('dashboard')}
      activeScreen="interconsultation"
      onNavigate={onNavigate}
    >
      <DemoBadge />
      
      {!isViewingConversation ? (
        // Vista de selección de especialista o lista de conversaciones
        <div>
          {/* Pestañas de navegación */}
          <div style={{ 
            display: 'flex', 
            marginBottom: 16,
            borderBottom: `1px solid ${COLORS.lightGrey}` 
          }}>
            <button 
              onClick={() => setActiveTab('new')}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'new' ? `2px solid ${COLORS.primary}` : 'none',
                color: activeTab === 'new' ? COLORS.primary : COLORS.textMedium,
                padding: '12px 16px',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: 14
              }}
            >
              Nueva Interconsulta
            </button>
            <button 
              onClick={() => setActiveTab('conversations')}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'conversations' ? `2px solid ${COLORS.primary}` : 'none',
                color: activeTab === 'conversations' ? COLORS.primary : COLORS.textMedium,
                padding: '12px 16px',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: 14,
                position: 'relative'
              }}
            >
              Historial
              {conversations.some(conv => conv.unread) && (
                <span style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: COLORS.primary,
                  color: 'white',
                  width: 8,
                  height: 8,
                  borderRadius: 4
                }}></span>
              )}
            </button>
          </div>
          
          {activeTab === 'new' ? (
            // Nueva interconsulta: selección de especialista
            <div>
              <div style={{ 
                background: '#e8f5ff', 
                padding: 16, 
                borderRadius: 12, 
                marginBottom: 20 
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 12 
                }}>
                  <div style={{ fontSize: 20, color: COLORS.primary, marginTop: 2 }}>ℹ️</div>
                  <div>
                    <p style={{ 
                      margin: 0, 
                      marginBottom: 8, 
                      fontSize: 15, 
                      fontWeight: 500,
                      color: COLORS.textDark
                    }}>
                      Servicio de Interconsulta
                    </p>
                    <p style={{ 
                      margin: 0, 
                      fontSize: 14, 
                      color: COLORS.textMedium, 
                      lineHeight: 1.5 
                    }}>
                      Selecciona el tipo de especialista con el que quieres consultar sobre un caso. 
                      Podrás compartir información relevante y recibir orientación profesional.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: 16, 
                margin: '0 0 16px 0', 
                color: COLORS.textDark 
              }}>
                Selecciona un especialista
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
                gap: 16,
                marginBottom: 24
              }}>
                {specialists.map(specialist => (
                  <SpecialistCard 
                    key={specialist.id}
                    specialist={specialist}
                    onSelect={handleSelectSpecialist}
                    active={selectedSpecialist?.id === specialist.id}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Vista de conversaciones existentes
            <div>
              <div style={{ position: 'relative', marginBottom: 16 }}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por NRE o especialista..."
                  style={{
                    width: '100%',
                    padding: '10px 16px 10px 40px',
                    borderRadius: 8,
                    border: `1px solid ${COLORS.lightGrey}`,
                    fontSize: 14
                  }}
                />
                <span style={{ 
                  position: 'absolute', 
                  left: 12, 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: COLORS.textMedium,
                  fontSize: 18
                }}>
                  🔍
                </span>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: COLORS.textMedium,
                      fontSize: 16,
                      cursor: 'pointer'
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
              
              {filteredConversations.length > 0 ? (
                filteredConversations.map(conversation => (
                  <div 
                    key={conversation.id}
                    onClick={() => handleConversationClick(conversation)}
                    style={{
                      background: 'white',
                      padding: 16,
                      borderRadius: 12,
                      marginBottom: 12,
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      borderLeft: conversation.unread ? `4px solid ${COLORS.primary}` : 'none',
                      transition: 'transform 0.15s ease'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 8
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ 
                          width: 10, 
                          height: 10, 
                          borderRadius: 5, 
                          backgroundColor: conversation.status === 'active' 
                            ? COLORS.accentGreen 
                            : conversation.status === 'pending' 
                              ? COLORS.accentOrange
                              : COLORS.textMedium
                        }}></div>
                        <span style={{ 
                          fontSize: 15, 
                          fontWeight: conversation.unread ? 600 : 500,
                          color: COLORS.textDark
                        }}>
                          {conversation.specialistName}
                        </span>
                      </div>
                      <span style={{ fontSize: 13, color: COLORS.textMedium }}>
                        {conversation.date}
                      </span>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        fontSize: 14, 
                        color: COLORS.textMedium,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                      }}>
                        <span style={{ color: COLORS.primary, fontSize: 13 }}>👤</span>
                        NRE: {conversation.patientNRE}
                      </span>
                      <span style={{ 
                        fontSize: 12, 
                        color: COLORS.textMedium,
                        backgroundColor: COLORS.lightBg,
                        padding: '2px 8px',
                        borderRadius: 12
                      }}>
                        {conversation.status === 'active' 
                          ? 'Activa' 
                          : conversation.status === 'pending' 
                            ? 'Pendiente'
                            : 'Cerrada'}
                      </span>
                    </div>
                    <p style={{ 
                      margin: '8px 0 0 0', 
                      fontSize: 13, 
                      color: conversation.unread ? COLORS.textDark : COLORS.textMedium,
                      fontWeight: conversation.unread ? 500 : 'normal',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                ))
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '30px 0', 
                  color: COLORS.textMedium,
                  background: 'white',
                  borderRadius: 12
                }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
                  <p>No se encontraron interconsultas</p>
                  {searchTerm && <p>con el término "{searchTerm}"</p>}
                  <button 
                    onClick={() => setSearchTerm('')}
                    style={{
                      background: COLORS.primary,
                      color: 'white',
                      border: 'none',
                      borderRadius: 20,
                      padding: '8px 16px',
                      marginTop: 16,
                      cursor: 'pointer',
                      fontSize: 14
                    }}
                  >
                    Mostrar todas
                  </button>
                </div>
              )}
              
              {filteredConversations.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <button 
                    onClick={() => setActiveTab('new')}
                    style={{
                      background: COLORS.primary,
                      color: 'white',
                      border: 'none',
                      borderRadius: 20,
                      padding: '8px 16px',
                      cursor: 'pointer',
                      fontSize: 14,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8
                    }}
                  >
                    <span>+</span> Nueva Interconsulta
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        // Vista de chat con especialista
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: 'calc(100vh - 140px)' 
        }}>
          {/* Cabecera del chat */}
          <div style={{ 
            background: 'white', 
            padding: 16, 
            borderRadius: 12, 
            marginBottom: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 20, 
                backgroundColor: `${selectedSpecialist.color}20`, 
                color: selectedSpecialist.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18
              }}>
                {selectedSpecialist.icon}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: 16, color: COLORS.textDark }}>
                  {selectedSpecialist.title}
                </h3>
                <p style={{ margin: '4px 0 0 0', fontSize: 13, color: COLORS.textMedium }}>
                  Interconsulta sobre NRE: {selectedPatient.nre}
                </p>
              </div>
            </div>
            <button 
              onClick={handleBackToSpecialists}
              style={{
                background: 'none',
                border: `1px solid ${COLORS.lightGrey}`,
                borderRadius: 8,
                padding: '6px 12px',
                fontSize: 13,
                color: COLORS.textMedium,
                cursor: 'pointer'
              }}
            >
              Volver
            </button>
          </div>
          
          {/* Descripción del servicio */}
          <div style={{ 
            background: `${selectedSpecialist.color}10`, 
            padding: 12, 
            borderRadius: 12, 
            marginBottom: 12,
            border: `1px solid ${selectedSpecialist.color}20`
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 8 
            }}>
              <div style={{ fontSize: 18, color: selectedSpecialist.color, marginTop: 2 }}>ℹ️</div>
              <div>
                <p style={{ 
                  margin: 0, 
                  fontSize: 13, 
                  color: COLORS.textMedium,
                  lineHeight: 1.5 
                }}>
                  {selectedSpecialist.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Área de mensajes */}
          <div style={{ 
            flex: 1, 
            overflowY: 'auto', 
            padding: 16, 
            background: COLORS.lightBg,
            borderRadius: 12,
            marginBottom: 12
          }}>
            {messages.map((message, index) => {
              if (message.sender === 'system') {
                return (
                  <div 
                    key={index} 
                    style={{ 
                      textAlign: 'center', 
                      margin: '16px 0',
                      color: COLORS.textMedium,
                      fontSize: 12
                    }}
                  >
                    {message.text}
                    <div style={{ fontSize: 11, marginTop: 4 }}>{message.time}</div>
                  </div>
                );
              }
              
              return (
                <ChatMessage 
                  key={index} 
                  message={message} 
                  isCurrentUser={message.sender === 'nurse'} 
                />
              );
            })}
            <div ref={bottomRef} />
          </div>
          
          {/* Área de entrada de texto */}
          <div style={{ 
            display: 'flex', 
            gap: 12, 
            marginBottom: 12 
          }}>
            <input 
              ref={inputRef}
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe tu mensaje aquí..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: 12,
                border: `1px solid ${COLORS.lightGrey}`,
                fontSize: 14,
                backgroundColor: 'white'
              }}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!messageInput.trim()}
              style={{
                background: messageInput.trim() ? COLORS.primary : COLORS.lightGrey,
                color: 'white',
                border: 'none',
                borderRadius: 12,
                padding: '0 16px',
                cursor: messageInput.trim() ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                fontSize: 18
              }}
            >
              <span style={{ transform: 'rotate(90deg)' }}>➤</span>
            </button>
          </div>
          
          {/* Acciones adicionales */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            gap: 12
          }}>
            <button style={{
              flex: 1,
              background: 'white',
              border: `1px solid ${COLORS.lightGrey}`,
              borderRadius: 12,
              padding: '10px',
              color: COLORS.textMedium,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}>
              <span>📎</span> Adjuntar
            </button>
            <button style={{
              flex: 1,
              background: 'white',
              border: `1px solid ${COLORS.lightGrey}`,
              borderRadius: 12,
              padding: '10px',
              color: COLORS.textMedium,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}>
              <span>📅</span> Programar
            </button>
            <button style={{
              flex: 1,
              background: 'white',
              border: `1px solid ${COLORS.lightGrey}`,
              borderRadius: 12,
              padding: '10px',
              color: COLORS.textMedium,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}>
              <span>🔒</span> Cerrar caso
            </button>
          </div>
        </div>
      )}
      
      {/* Modal de selección de paciente */}
      {showPatientSelector && (
        <PatientSelector 
          onClose={() => setShowPatientSelector(false)} 
          onSelect={handleSelectPatient}
        />
      )}
    </ProfessionalLayout>
  );
};

export default ProfessionalInterconsultation;