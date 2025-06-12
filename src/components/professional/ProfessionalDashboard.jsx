// ProfessionalDashboard.jsx - Versión unificada
import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeProvider';
import {
  DemoBadge,
  NavBar,
  Card,
  Button,
  Badge,
  Alert,
  Container,
  Heading,
  Loader
} from "../common/CommonComponents";

// Componente ActionCard reutilizable
const ActionCard = ({ icon, title, onClick, highlight }) => {
  const theme = useTheme();
  
  return (
    <div
      onClick={onClick}
      style={{
        background: theme.colors.cardBg,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        textAlign: 'center',
        boxShadow: theme.shadows.sm,
        cursor: 'pointer',
        border: highlight ? `2px solid ${theme.colors.primary}` : 'none',
        transition: theme.transitions.default,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows.md,
        }
      }}
    >
      <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{icon}</div>
      <p
        style={{
          margin: 0,
          fontSize: theme.typography.fontSize.sm,
          fontWeight: highlight ? 
            theme.typography.fontWeight.semibold : 
            theme.typography.fontWeight.medium,
          color: highlight ? theme.colors.primary : theme.colors.textDark,
          textAlign: 'center',
          width: '100%',
          lineHeight: 1.3
        }}
      >
        {title}
      </p>
    </div>
  );
};

// Componente para mostrar una cita
const AppointmentSlot = ({ time, appointment, isAvailable, onAssign }) => {
  const theme = useTheme();
  const isMobile = window.innerWidth < 480;
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? 6 : 8,
      background: theme.colors.lightBg,
      borderRadius: 8,
      padding: isMobile ? 10 : 12,
      borderLeft: appointment?.priority === 'high' ? 
        `4px solid ${theme.colors.error}` : 
        isAvailable ? `4px solid ${theme.colors.success}` : 'none',
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ 
          margin: 0, 
          fontSize: isMobile ? 13 : 14, 
          color: theme.colors.textDark,
          fontWeight: theme.typography.fontWeight.medium,
        }}>
          <span style={{ 
            color: isAvailable ? theme.colors.success : theme.colors.textDark 
          }}>
            ⏰ {time}
          </span>
          {appointment && ` — NRE ${appointment.nre}`}
        </p>
        {appointment ? (
          <span style={{ 
            color: theme.colors.textMedium, 
            fontSize: isMobile ? 12 : 13 
          }}>
            {appointment.type}
          </span>
        ) : (
          <span style={{ 
            color: theme.colors.success, 
            fontSize: isMobile ? 12 : 13 
          }}>
            Disponible
          </span>
        )}
      </div>
      {isAvailable && (
        <Button
          onClick={() => onAssign(time)}
          variant="secondary"
          size="small"
          icon="+"
        >
          {isMobile ? 'Añadir' : 'Asignar'}
        </Button>
      )}
    </div>
  );
};

// Componente principal
function ProfessionalDashboard({ onNavigate }) {
  const theme = useTheme();
  
  // Estados
  const [activeSection, setActiveSection] = useState('home');
  const [availability, setAvailability] = useState('available');
  const [todayConsultation, setTodayConsultation] = useState(null);
  const [nextConsultation, setNextConsultation] = useState(null);
  const [isLoadingConsultations, setIsLoadingConsultations] = useState(true);
  const [showAddAppointmentModal, setShowAddAppointmentModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [newNRE, setNewNRE] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isSmallMobile = windowWidth < 480;

  // Listener para detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Datos de fecha
  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const day = today.toLocaleDateString('es-ES', { weekday: 'long' });
  const date = today.getDate();
  const month = today.toLocaleDateString('es-ES', { month: 'long' });
  const formattedDate = `${day.charAt(0).toUpperCase() + day.slice(1)} ${date} ${month}`;

  // Programación de consultas (simulado)
  const consultationSchedule = [
    { 
      center: "IES San Juan Bosco", 
      dayOfWeek: 1, // Lunes
      startTime: "10:00",
      endTime: "11:00",
      location: "Dept. orientación",
      availableSlots: ['10:00', '10:15', '10:30', '10:45'],
      pendingAppointments: 2,
      appointments: [
        { time: '10:00', nre: '123456', type: 'Consulta general', priority: 'normal' },
        { time: '10:30', nre: '234567', type: 'Salud emocional', priority: 'high' },
      ]
    },
    { 
      center: "IES Mediterráneo", 
      dayOfWeek: 3, // Miércoles
      startTime: "11:30",
      endTime: "12:30",
      location: "Sala de enfermería",
      availableSlots: ['11:30', '11:45', '12:00', '12:15'],
      pendingAppointments: 1,
      appointments: [
        { time: '11:30', nre: '345678', type: 'Consulta preventiva', priority: 'normal' },
      ]
    },
    { 
      center: "IES Francisco Ros Giner", 
      dayOfWeek: 4, // Jueves
      startTime: "09:30",
      endTime: "10:30",
      location: "Sala de reuniones",
      availableSlots: ['09:30', '09:45', '10:00', '10:15'],
      pendingAppointments: 0,
      appointments: []
    },
  ];

  // Cargar datos de consulta
  useEffect(() => {
    setIsLoadingConsultations(true);
    
    setTimeout(() => {
      // Buscar la consulta de hoy
      const consultation = consultationSchedule.find(c => c.dayOfWeek === currentDayOfWeek);
      setTodayConsultation(consultation || null);
      
      // Buscar la próxima consulta si hoy no hay
      if (!consultation) {
        let nextDay = currentDayOfWeek;
        let daysChecked = 0;
        let nextConsult = null;
        
        while (daysChecked < 7 && !nextConsult) {
          nextDay = (nextDay + 1) % 7;
          nextConsult = consultationSchedule.find(c => c.dayOfWeek === nextDay);
          daysChecked++;
        }
        
        setNextConsultation(nextConsult);
      }
      
      setIsLoadingConsultations(false);
    }, 1000);
  }, [currentDayOfWeek]);
  
  // Toggle de disponibilidad
  const toggleAvailability = () =>
    setAvailability(({ available: 'busy', busy: 'away', away: 'available' })[availability]);

  // Información de disponibilidad
  const availabilityInfo = {
    available: { color: theme.colors.success, text: 'Disponible' },
    busy: { color: theme.colors.warning, text: 'Ocupado' },
    away: { color: '#999', text: 'Ausente' },
  }[availability];
  
  // Obtener los slots disponibles
  const getAvailableSlots = (consultation) => {
    if (!consultation) return [];
    
    const bookedTimes = consultation.appointments?.map(apt => apt.time) || [];
    return consultation.availableSlots?.filter(slot => !bookedTimes.includes(slot)) || [];
  };
  
  // Manejar la adición de una cita
  const handleAddAppointment = (slot) => {
    setSelectedSlot(slot);
    setShowAddAppointmentModal(true);
  };
  
  // Confirmar la adición de la cita
  const confirmAddAppointment = () => {
    if (!newNRE.trim()) {
      alert('Por favor ingrese un NRE válido');
      return;
    }

    // Actualizar el estado con la nueva cita
    const updatedConsultation = { ...todayConsultation };
    if (!updatedConsultation.appointments) {
      updatedConsultation.appointments = [];
    }

    updatedConsultation.appointments.push({
      time: selectedSlot,
      nre: newNRE,
      type: 'Consulta general',
      priority: 'normal'
    });

    // Ordenar las citas por hora
    updatedConsultation.appointments.sort((a, b) => a.time.localeCompare(b.time));
    updatedConsultation.pendingAppointments = updatedConsultation.appointments.length;

    setTodayConsultation(updatedConsultation);
    setShowAddAppointmentModal(false);
    setNewNRE('');
    setSelectedSlot(null);
  };
  
  // Renderizar citas y slots disponibles
  const renderAppointmentsAndSlots = (consultation) => {
    if (!consultation) return null;

    const availableSlots = getAvailableSlots(consultation);
    const allTimes = consultation.availableSlots || [];
    
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 6 : 10,
        marginTop: 10
      }}>
        {allTimes.map((time, index) => {
          const appointment = consultation.appointments?.find(apt => apt.time === time);
          const isAvailable = availableSlots.includes(time);

          return (
            <AppointmentSlot 
              key={index}
              time={time}
              appointment={appointment}
              isAvailable={isAvailable}
              onAssign={handleAddAppointment}
            />
          );
        })}
      </div>
    );
  };
  
  // Función para manejar el botón Atrás
  const handleBack = () => {
    // En la versión real, esto podría llevar a la pantalla de login
    console.log("Botón Atrás presionado en el Dashboard");
  };
  
  // Renderizar el contenido principal
  const renderContent = () => {
    // Si está en otra sección que no es home
    if (activeSection !== 'home') {
      return (
        <div
          style={{
            textAlign: 'center',
            marginTop: isMobile ? theme.spacing.lg : theme.spacing.xl,
            padding: isMobile ? theme.spacing.md : theme.spacing.lg,
            background: theme.colors.lightBg,
            borderRadius: theme.borderRadius.lg,
            minHeight: 200,
          }}
        >
          <h2 style={{ color: theme.colors.primary }}>Sección: {activeSection}</h2>
          <p style={{ marginBottom: theme.spacing.lg }}>Esta sección está en desarrollo</p>
          <Button
            variant="primary"
            onClick={() => setActiveSection('home')}
          >
            Volver al inicio
          </Button>
        </div>
      );
    }
    
    return (
      <>
        {/* Saludo personalizado */}
        <Card>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 12 : 16
          }}>
            <div style={{
              width: isMobile ? 40 : 50,
              height: isMobile ? 40 : 50,
              borderRadius: theme.borderRadius.round,
              backgroundColor: theme.colors.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: isMobile ? 16 : 18,
              fontWeight: theme.typography.fontWeight.bold
            }}>
              R
            </div>
            <div>
              <h2 style={{ 
                fontSize: isMobile ? 18 : 22, 
                margin: 0, 
                color: theme.colors.textDark 
              }}>
                ¡Hola, Raquel!
              </h2>
              <p style={{ 
                margin: '4px 0 0 0', 
                color: theme.colors.textMedium, 
                fontSize: isMobile ? 13 : 14 
              }}>
                {formattedDate}
              </p>
            </div>
            
            {/* Selector de disponibilidad */}
            <div
              onClick={toggleAvailability}
              style={{ cursor: 'pointer', marginLeft: 'auto' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 10px',
                background: theme.colors.lightBg,
                borderRadius: 16,
              }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: availabilityInfo.color,
                  marginRight: 6,
                }} />
                <span style={{ 
                  fontSize: isMobile ? 11 : 12, 
                  color: theme.colors.textMedium 
                }}>
                  {availabilityInfo.text}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Consulta del día o próxima consulta */}
        <Card
          style={{
            borderLeft: todayConsultation ? 
              `4px solid ${theme.colors.success}` : 
              nextConsultation ? 
                `4px solid ${theme.colors.warning}` : 'none',
          }}
        >
          {isLoadingConsultations ? (
            <div style={{ 
              padding: '20px 0', 
              textAlign: 'center',
              color: theme.colors.textMedium,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: theme.spacing.md
            }}>
              <Loader size="medium" color="primary" />
              <span>Cargando agenda...</span>
            </div>
          ) : todayConsultation ? (
            <>
              <Alert type="success">
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: isSmallMobile ? 'wrap' : 'nowrap',
                  gap: isSmallMobile ? 6 : 0
                }}>
                  <Badge type="success">HOY</Badge>
                  
                  {todayConsultation.pendingAppointments > 0 && (
                    <Badge type="warning" style={{ 
                      marginTop: isSmallMobile ? 4 : 0 
                    }}>
                      {todayConsultation.pendingAppointments} citas programadas
                    </Badge>
                  )}
                </div>
                
                <h3 style={{ 
                  fontSize: isMobile ? 15 : 16, 
                  margin: `${theme.spacing.sm} 0 ${theme.spacing.xs} 0`, 
                  color: theme.colors.textDark, 
                  fontWeight: theme.typography.fontWeight.semibold
                }}>
                  Consulta Joven {todayConsultation.center}
                </h3>
                
                <p style={{ 
                  fontSize: isMobile ? 13 : 14, 
                  margin: 0, 
                  color: theme.colors.textMedium 
                }}>
                  <span style={{ marginRight: 6 }}>⏰</span>
                  {todayConsultation.startTime} - {todayConsultation.endTime}
                  <span style={{ margin: '0 4px 0 12px' }}>📍</span>
                  {todayConsultation.location}
                </p>
              </Alert>
              
              {/* Citas y slots disponibles */}
              <h3 style={{ 
                fontSize: isMobile ? 15 : 16, 
                margin: `${theme.spacing.md} 0 ${theme.spacing.sm} 0`, 
                color: theme.colors.textDark 
              }}>
                Citas programadas y huecos disponibles – Hoy
              </h3>
              
              {renderAppointmentsAndSlots(todayConsultation)}
              
              <div style={{ 
                marginTop: theme.spacing.md, 
                textAlign: 'center' 
              }}>
                <Button
                  variant="primary"
                  onClick={() => onNavigate('consultation-form')}
                  icon="📋"
                >
                  Registro de Consulta
                </Button>
              </div>
            </>
          ) : nextConsultation ? (
            <>
              <Alert type="warning">
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                  flexWrap: isSmallMobile ? 'wrap' : 'nowrap',
                  gap: isSmallMobile ? 6 : 0
                }}>
                  <Badge type="warning">PRÓXIMA CONSULTA</Badge>
                  
                  {nextConsultation.pendingAppointments > 0 && (
                    <Badge type="success" style={{ 
                      marginTop: isSmallMobile ? 4 : 0
                    }}>
                      {nextConsultation.pendingAppointments} citas programadas
                    </Badge>
                  )}
                </div>
                
                <h3 style={{ 
                  fontSize: isMobile ? 15 : 16, 
                  margin: `${theme.spacing.sm} 0 ${theme.spacing.xs} 0`, 
                  color: theme.colors.textDark, 
                  fontWeight: theme.typography.fontWeight.semibold
                }}>
                  {nextConsultation.center}
                </h3>
                
                <p style={{ 
                  fontSize: isMobile ? 13 : 14, 
                  margin: 0, 
                  color: theme.colors.textMedium 
                }}>
                  <span style={{ marginRight: 6 }}>📅</span>
                  {['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][nextConsultation.dayOfWeek]}
                  <span style={{ margin: '0 4px 0 12px' }}>⏰</span>
                  {nextConsultation.startTime} - {nextConsultation.endTime}
                  <span style={{ margin: '0 4px 0 12px' }}>📍</span>
                  {nextConsultation.location}
                </p>
              </Alert>
              
              {/* Citas y slots disponibles */}
              <h3 style={{ 
                fontSize: isMobile ? 15 : 16, 
                margin: `${theme.spacing.md} 0 ${theme.spacing.sm} 0`, 
                color: theme.colors.textDark 
              }}>
                Citas programadas y huecos disponibles
              </h3>
              
              {renderAppointmentsAndSlots(nextConsultation)}
              
              <div style={{ 
                marginTop: theme.spacing.md, 
                textAlign: 'center' 
              }}>
                <Button
                  variant="primary"
                  onClick={() => onNavigate('consultation-form')}
                  icon="📋"
                >
                  Registro de Consulta
                </Button>
              </div>
            </>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '20px 0', 
              color: theme.colors.textMedium 
            }}>
              No hay consultas programadas próximamente
            </div>
          )}
        </Card>

        {/* Acciones rápidas */}
        <Card>
          <h2 style={{ 
            fontSize: isMobile ? 16 : 18, 
            margin: `0 0 ${theme.spacing.md} 0`, 
            color: theme.colors.textDark 
          }}>
            Acciones rápidas
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(auto-fit, minmax(${isSmallMobile ? '120px' : '130px'}, 1fr))`, 
            gap: isMobile ? 8 : 12
          }}>
            <ActionCard 
              icon="📊" 
              title="Estadísticas" 
              onClick={() => onNavigate('statistics')} 
            />
            <ActionCard 
              icon="⏰" 
              title="Gestionar disponibilidad" 
              onClick={() => onNavigate('availability')} 
            />
            <ActionCard 
              icon="🏫" 
              title="Mis centros" 
              onClick={() => onNavigate('centers')} 
            />
          </div>
        </Card>
      </>
    );
  };
  
  return (
    <Container style={{ 
      padding: isMobile ? (isSmallMobile ? theme.spacing.sm : theme.spacing.md) : theme.spacing.md,
      maxWidth: '800px'
    }}>
      <DemoBadge />
      {renderContent()}
      
      {/* Modal para añadir cita */}
      {showAddAppointmentModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <Card style={{
            width: '90%',
            maxWidth: 400,
            padding: isSmallMobile ? theme.spacing.md : theme.spacing.lg
          }}>
            <h3 style={{ 
              margin: `0 0 ${theme.spacing.md} 0`, 
              color: theme.colors.textDark, 
              fontSize: isSmallMobile ? 16 : 18 
            }}>
              Asignar Cita - {selectedSlot}
            </h3>
            
            <div style={{ marginBottom: theme.spacing.md }}>
              <label style={{ 
                display: 'block', 
                marginBottom: theme.spacing.sm, 
                fontSize: theme.typography.fontSize.sm, 
                color: theme.colors.textDark 
              }}>
                NRE del Estudiante
              </label>
              <input
                type="text"
                value={newNRE}
                onChange={(e) => setNewNRE(e.target.value)}
                placeholder="Ingrese el NRE"
                style={{
                  width: '100%',
                  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                  borderRadius: theme.borderRadius.md,
                  border: `1px solid ${theme.colors.lightBg}`,
                  fontSize: theme.typography.fontSize.sm
                }}
              />
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: theme.spacing.sm, 
              justifyContent: 'flex-end',
              flexDirection: isSmallMobile ? 'column' : 'row'
            }}>
              <Button
                variant="text"
                onClick={() => {
                  setShowAddAppointmentModal(false);
                  setNewNRE('');
                  setSelectedSlot(null);
                }}
                style={{
                  flex: isSmallMobile ? 'none' : 1
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={confirmAddAppointment}
                style={{
                  flex: isSmallMobile ? 'none' : 1
                }}
              >
                Confirmar
              </Button>
            </div>
          </Card>
        </div>
      )}
      
      {/* Barra de navegación */}
      <NavBar 
        active="dashboard" 
        onNavigate={onNavigate} 
        userType="professional" 
      />
    </Container>
  );
}

export default ProfessionalDashboard;