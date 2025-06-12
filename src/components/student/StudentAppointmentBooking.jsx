import React, { useState, useEffect, useLayoutEffect } from 'react';

// Paleta de colores consistente con el resto de la aplicación
const COLORS = {
  primary: '#00B7D8',     // Color principal turquesa HealthBuddy
  primaryDark: '#0095AF', // Versión oscura para hover
  cardBg: '#FFFFFF',      // Fondo de tarjeta
  lightBg: '#F5FBFD',     // Fondo claro
  textDark: '#002D3A',    // Texto oscuro
  textMedium: '#4A6572',  // Texto medio
  error: '#d32f2f',       // Color de error/alerta
  success: '#388e3c',     // Color de éxito
  warning: '#f57c00',     // Color de advertencia
};

// Demo badge inline con los nuevos colores
const DemoBadge = () => (
  <div style={{
    position: 'fixed',
    top: 10,
    right: 10,
    background: COLORS.primary,
    color: 'white',
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

// Componente para la navegación inferior
function NavBar({ active, onNavigate }) {
  const items = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'appointments', label: 'Citas', icon: '📅' },
    { id: 'resources', label: 'Recursos', icon: '📚' },
  ];
  
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.6rem 0',
      zIndex: 100,
    }}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onNavigate(item.id)}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ 
            fontSize: '1.6rem',
            color: item.id === active ? COLORS.primary : COLORS.textMedium,
          }}>
            {item.icon}
          </div>
          <span style={{ 
            fontSize: 12,
            color: item.id === active ? COLORS.primary : COLORS.textMedium,
            fontWeight: item.id === active ? 600 : 400,
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Componente principal mejorado
function StudentAppointmentBooking({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointmentReason, setAppointmentReason] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [notes, setNotes] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  
  // Handle window resize
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  // Datos de ejemplo para citas próximas
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { 
      id: 1, 
      date: '24 Abr', 
      time: '10:30 - 10:45', 
      with: 'Lucía Martínez', 
      role: 'Enfermera Escolar',
      reason: 'Consulta general',
      status: 'confirmed', 
      location: 'Sala 12, junto a Orientación'
    }
  ]);

  // Genera fechas para los próximos días disponibles
  const getDates = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + (weekOffset * 7));
    
    // Suponemos que las consultas son los martes y jueves
    const availableDaysOffset = [
      // Para semana actual, busca el próximo martes y jueves
      startOfWeek.getDay() <= 2 ? 2 - startOfWeek.getDay() : 9 - startOfWeek.getDay(), // Martes
      startOfWeek.getDay() <= 4 ? 4 - startOfWeek.getDay() : 11 - startOfWeek.getDay(), // Jueves
    ];
    
    return availableDaysOffset.map(offset => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + offset);
      return date;
    });
  };
  
  const availableDates = getDates();
  
  // Formatea las fechas para mostrar
  const formatDate = (date) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('es-ES', options);
  };
  
  // Slots de tiempo disponibles
  const timeSlots = [
    '10:00 - 10:15',
    '10:15 - 10:30',
    '10:30 - 10:45',
    '10:45 - 11:00'
  ];
  
  // Maneja la selección de un slot
  const handleSelectSlot = (date, time) => {
    setSelectedSlot({ date, time });
  };
  
  // Maneja la solicitud de cita
  const handleBookAppointment = () => {
    if (!selectedSlot || !appointmentReason) return;
    setShowConfirmation(true);
  };
  
  // Confirma la cita
  const confirmAppointment = () => {
    // Aquí normalmente enviaríamos datos al backend
    console.log('Cita confirmada:', {
      ...selectedSlot,
      reason: appointmentReason,
      notes
    });
    
    // Simulamos actualización de datos
    const newAppointment = {
      id: Math.floor(Math.random() * 1000),
      date: new Date(selectedSlot.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
      time: selectedSlot.time,
      with: 'Lucía Martínez',
      role: 'Enfermera Escolar',
      reason: appointmentReason,
      status: 'pending',
      location: 'Sala 12, junto a Orientación'
    };
    
    setUpcomingAppointments([...upcomingAppointments, newAppointment]);
    setShowConfirmation(false);
    setShowSuccess(true);
    
    // Reiniciar estados
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedSlot(null);
      setAppointmentReason('');
      setNotes('');
      setActiveTab('upcoming');
    }, 3000);
  };
  
  // Opciones para el motivo de la cita
  const reasonOptions = [
    { value: 'general', label: 'Consulta general' },
    { value: 'followup', label: 'Seguimiento' },
    { value: 'sexual-health', label: 'Salud sexual y reproductiva' },
    { value: 'mental-health', label: 'Salud mental y emocional' },
    { value: 'nutrition', label: 'Nutrición y alimentación' },
    { value: 'other', label: 'Otro (especificar en notas)' },
  ];
  
  // Pestañas disponibles
  const tabs = [
    { id: 'upcoming', label: 'Mis citas' },
    { id: 'book', label: 'Solicitar cita' }
  ];
  
  // Función para cancelar una cita
  const handleCancelAppointment = (id) => {
    if (window.confirm('¿Estás seguro/a de que deseas cancelar esta cita?')) {
      setUpcomingAppointments(upcomingAppointments.filter(app => app.id !== id));
    }
  };
  
  return (
    <div style={{ 
      padding: isMobile ? '0.75rem' : '1rem', 
      paddingBottom: 80, 
      backgroundColor: COLORS.lightBg,
      minHeight: '100vh',
      maxWidth: '100%',
      overflowX: 'hidden',
    }}>
      <DemoBadge />
      
      {/* Cabecera */}
      <div style={{ 
        marginBottom: isMobile ? '1rem' : '1.5rem',
        textAlign: 'center', 
      }}>
        <h1 style={{ 
          fontSize: isMobile ? '1.3rem' : '1.5rem', 
          color: COLORS.textDark,
          margin: 0,
          fontWeight: 600,
        }}>
          Citas Consulta Joven
        </h1>
        <p style={{ 
          margin: '0.5rem 0 0 0', 
          color: COLORS.textMedium,
          fontSize: isMobile ? '0.85rem' : '0.9rem', 
        }}>
          Gestiona tus consultas con el personal sanitario
        </p>
      </div>
      
      {/* Pestañas */}
      <div style={{ 
        display: 'flex', 
        background: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '0.8rem',
              background: activeTab === tab.id ? COLORS.primary : 'transparent',
              color: activeTab === tab.id ? 'white' : COLORS.textMedium,
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Mensaje de éxito */}
      {showSuccess && (
        <div style={{
          background: '#e8f5e9',
          borderLeft: `4px solid ${COLORS.success}`,
          color: COLORS.success,
          padding: '1rem',
          borderRadius: 8,
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <span style={{ fontSize: '1.2rem' }}>✓</span>
          <p style={{ margin: 0 }}>¡Cita solicitada con éxito! Recibirás una notificación cuando sea confirmada.</p>
        </div>
      )}
      
      {/* Panel de Próximas Citas */}
      {activeTab === 'upcoming' && (
        <div style={{ marginBottom: '1.5rem' }}>
          {upcomingAppointments.length > 0 ? (
            <div>
              {upcomingAppointments.map((apt, index) => (
                <div 
                  key={apt.id} 
                  style={{
                    background: 'white',
                    borderRadius: 12,
                    padding: '1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    flexDirection: isMobile ? 'column' : 'row',
                  }}>
                    {/* Fecha */}
                    <div style={{
                      background: COLORS.lightBg,
                      borderRadius: 12,
                      padding: '0.8rem 0.4rem',
                      textAlign: 'center',
                      minWidth: 60,
                      width: isMobile ? '100%' : 'auto',
                      display: isMobile ? 'flex' : 'block',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: isMobile ? '0.5rem' : 0,
                    }}>
                      <div style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: 600, 
                        color: COLORS.primary 
                      }}>
                        {apt.date.split(' ')[0]}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: COLORS.textMedium }}>
                        {apt.date.split(' ')[1]}
                      </div>
                    </div>
                    
                    {/* Detalles */}
                    <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem',
                        flexDirection: isMobile ? 'column' : 'row',
                      }}>
                        <div style={{ marginBottom: isMobile ? '0.5rem' : 0 }}>
                          <h3 style={{ 
                            margin: 0, 
                            color: COLORS.textDark, 
                            fontSize: '1rem', 
                            fontWeight: 600 
                          }}>
                            {apt.reason}
                          </h3>
                          <p style={{ 
                            margin: '0.2rem 0 0 0', 
                            color: COLORS.primary, 
                            fontWeight: 500,
                            fontSize: '0.9rem'
                          }}>
                            {apt.time}
                          </p>
                        </div>
                        <div style={{
                          background: apt.status === 'confirmed' ? '#e8f5e9' : '#fff8e1',
                          color: apt.status === 'confirmed' ? COLORS.success : COLORS.warning,
                          padding: '0.3rem 0.8rem',
                          borderRadius: 20,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          alignSelf: isMobile ? 'flex-start' : 'center',
                        }}>
                          {apt.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                        </div>
                      </div>
                      
                      {/* Profesional y ubicación */}
                      <div style={{ fontSize: '0.9rem', color: COLORS.textMedium }}>
                        <p style={{ 
                          margin: '0.5rem 0 0.2rem 0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}>
                          <span style={{ fontSize: '0.9rem' }}>👩‍⚕️</span>
                          <span>{apt.with} - {apt.role}</span>
                        </p>
                        <p style={{ 
                          margin: '0.2rem 0 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}>
                          <span style={{ fontSize: '0.9rem' }}>📍</span>
                          <span>{apt.location}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botones de acción */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    marginTop: '1rem',
                    gap: '0.8rem',
                  }}>
                    <button 
                      onClick={() => handleCancelAppointment(apt.id)}
                      style={{
                        background: 'rgba(211, 47, 47, 0.1)',
                        color: COLORS.error,
                        border: 'none',
                        borderRadius: 8,
                        padding: '0.6rem 1rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={() => onNavigate('chat')}
                      style={{
                        background: COLORS.primary,
                        color: 'white',
                        border: 'none',
                        borderRadius: 8,
                        padding: '0.6rem 1rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              ))}
              
              <button
                onClick={() => setActiveTab('book')}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: `2px dashed ${COLORS.primary}`,
                  color: COLORS.primary,
                  padding: '0.8rem',
                  borderRadius: 12,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginTop: '1rem',
                }}
              >
                + Solicitar nueva cita
              </button>
            </div>
          ) : (
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: COLORS.primary }}>📅</div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: COLORS.textDark }}>
                No tienes citas programadas
              </h3>
              <p style={{ margin: '0 0 1.5rem 0', color: COLORS.textMedium }}>
                Solicita tu primera cita con el personal sanitario escolar
              </p>
              <button
                onClick={() => setActiveTab('book')}
                style={{
                  background: COLORS.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: 50,
                  padding: '0.8rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Solicitar cita
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Panel de Solicitud de Cita */}
      {activeTab === 'book' && !showConfirmation && (
        <div style={{ marginBottom: '1.5rem' }}>
          {/* Información sobre la consulta joven */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            borderLeft: `4px solid ${COLORS.primary}`,
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              gap: 12,
            }}>
              <div style={{
                fontSize: '1.5rem',
                color: COLORS.primary,
              }}>
                ℹ️
              </div>
              <div>
                <h3 style={{ 
                  margin: '0 0 0.5rem 0', 
                  color: COLORS.primary,
                  fontSize: '1rem',
                  fontWeight: 600,
                }}>
                  Consulta Joven
                </h3>
                <p style={{ 
                  margin: '0 0 0.3rem 0', 
                  fontSize: '0.9rem',
                  color: COLORS.textMedium,
                }}>
                  <strong>Personal:</strong> Lucía Martínez (Enfermera Escolar)
                </p>
                <p style={{ 
                  margin: '0 0 0.3rem 0', 
                  fontSize: '0.9rem',
                  color: COLORS.textMedium,
                }}>
                  <strong>Horario:</strong> Martes y Jueves, 10:00 - 11:00
                </p>
                <p style={{ 
                  margin: '0', 
                  fontSize: '0.9rem',
                  color: COLORS.textMedium,
                }}>
                  <strong>Ubicación:</strong> Sala 12, junto a Orientación
                </p>
              </div>
            </div>
          </div>
          
          {/* Selección de fecha */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          }}>
            <h3 style={{ 
              margin: '0 0 1rem 0', 
              color: COLORS.textDark,
              fontSize: '1rem',
              fontWeight: 600,
            }}>
              Selecciona fecha y hora
            </h3>
            
            {/* Navegación de semanas */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}>
              <button 
                onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                disabled={weekOffset === 0}
                style={{
                  background: weekOffset === 0 ? '#f5f5f5' : COLORS.lightBg,
                  color: weekOffset === 0 ? '#aaa' : COLORS.textMedium,
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.6rem',
                  fontSize: isMobile ? '0.75rem' : '0.85rem',
                  fontWeight: 500,
                  cursor: weekOffset === 0 ? 'not-allowed' : 'pointer',
                  flex: 1,
                  marginRight: '0.5rem',
                }}
              >
                {isMobile ? '← Anterior' : '← Semana anterior'}
              </button>
              <button 
                onClick={() => setWeekOffset(weekOffset + 1)}
                style={{
                  background: COLORS.lightBg,
                  color: COLORS.textMedium,
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.6rem',
                  fontSize: isMobile ? '0.75rem' : '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  flex: 1,
                  marginLeft: '0.5rem',
                }}
              >
                {isMobile ? 'Siguiente →' : 'Semana siguiente →'}
              </button>
            </div>
            
            {/* Días disponibles */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {availableDates.map((date, dateIndex) => (
                <div key={dateIndex} style={{ marginBottom: '1rem' }}>
                  <h4 style={{ 
                    margin: '0 0 0.8rem 0', 
                    color: COLORS.textDark,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <span style={{ color: COLORS.primary }}>📅</span>
                    {formatDate(date)}
                  </h4>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
                    gap: '0.8rem',
                  }}>
                    {timeSlots.map((time, timeIndex) => {
                      const isSelected = selectedSlot && 
                        selectedSlot.date.getTime() === date.getTime() && 
                        selectedSlot.time === time;
                      
                      // Simulamos que algunos slots están ocupados
                      const isUnavailable = (dateIndex === 0 && timeIndex === 2) || 
                                         (dateIndex === 1 && timeIndex === 0);
                      
                      return (
                        <div 
                          key={`${dateIndex}-${timeIndex}`}
                          onClick={() => !isUnavailable && handleSelectSlot(date, time)}
                          style={{
                            background: isUnavailable ? '#f5f5f5' : 
                                      isSelected ? COLORS.primary : COLORS.lightBg,
                            color: isUnavailable ? '#aaa' : 
                                  isSelected ? 'white' : COLORS.textDark,
                            padding: '0.8rem',
                            borderRadius: 8,
                            textAlign: 'center',
                            cursor: isUnavailable ? 'not-allowed' : 'pointer',
                            position: 'relative',
                            fontWeight: isSelected ? 500 : 'normal',
                            fontSize: '0.9rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span>{time}</span>
                          {isUnavailable && (
                            <span style={{ 
                              fontSize: '0.75rem',
                              color: '#aaa', 
                            }}>
                              Ocupado
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Selección de motivo si hay slot seleccionado */}
          {selectedSlot && (
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ 
                margin: '0 0 1rem 0', 
                color: COLORS.textDark,
                fontSize: '1rem',
                fontWeight: 600,
              }}>
                Información de la cita
              </h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: COLORS.textDark,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}>
                  Motivo de la consulta <span style={{ color: COLORS.error }}>*</span>
                </label>
                <select 
                  value={appointmentReason}
                  onChange={(e) => setAppointmentReason(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: 8,
                    border: `1px solid ${COLORS.lightBg}`,
                    backgroundColor: 'white',
                    fontSize: '0.9rem',
                    color: COLORS.textDark,
                  }}
                >
                  <option value="">Seleccionar motivo</option>
                  {reasonOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: COLORS.textDark,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}>
                  Notas adicionales (opcional)
                </label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="¿Hay algo más que quieras comentar?"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: 8,
                    border: `1px solid ${COLORS.lightBg}`,
                    backgroundColor: 'white',
                    fontSize: '0.9rem',
                    color: COLORS.textDark,
                    minHeight: 80,
                    resize: 'vertical',
                  }}
                />
              </div>
              
              <div style={{ 
                background: '#f9f9f9', 
                borderRadius: 8, 
                padding: '1rem',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                color: COLORS.textMedium,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
              }}>
                <span style={{ fontSize: '1.2rem' }}>🔒</span>
                <p style={{ margin: 0 }}>
                  Esta información es confidencial y solo será vista por el personal sanitario.
                </p>
              </div>
              
              <button
                onClick={handleBookAppointment}
                disabled={!appointmentReason}
                style={{
                  width: '100%',
                  background: appointmentReason ? COLORS.primary : '#f5f5f5',
                  color: appointmentReason ? 'white' : '#aaa',
                  border: 'none',
                  borderRadius: 50,
                  padding: '0.8rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: appointmentReason ? 'pointer' : 'not-allowed',
                }}
              >
                Solicitar cita
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Pantalla de confirmación */}
      {showConfirmation && (
        <div style={{
          background: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ 
            margin: '0 0 1.5rem 0', 
            color: COLORS.textDark,
            fontSize: '1.2rem',
            fontWeight: 600,
            textAlign: 'center',
          }}>
            Confirmar solicitud de cita
          </h3>
          
          <div style={{
            background: COLORS.lightBg,
            borderRadius: 12,
            padding: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: '1rem',
            }}>
              <div style={{
                fontSize: '1.5rem',
                color: COLORS.primary,
              }}>
                📅
              </div>
              <div>
                <h4 style={{ 
                  margin: 0, 
                  color: COLORS.textDark,
                  fontSize: '1rem',
                  fontWeight: 600,
                }}>
                  Detalles de la cita
                </h4>
                <p style={{ 
                  margin: '0.2rem 0 0 0', 
                  color: COLORS.textMedium,
                  fontSize: '0.9rem',
                }}>
                  Revisa los datos antes de confirmar
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '0.8rem',
                background: 'white',
                borderRadius: 8,
                flexDirection: isMobile ? 'column' : 'row',
              }}>
                <span style={{ 
                  fontWeight: 500, 
                  color: COLORS.textDark,
                  marginBottom: isMobile ? '0.3rem' : 0
                }}>Fecha:</span>
                <span style={{ color: COLORS.textMedium }}>{formatDate(selectedSlot.date)}</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '0.8rem',
                background: 'white',
                borderRadius: 8,
                flexDirection: isMobile ? 'column' : 'row',
              }}>
                <span style={{ 
                  fontWeight: 500, 
                  color: COLORS.textDark,
                  marginBottom: isMobile ? '0.3rem' : 0
                }}>Hora:</span>
                <span style={{ color: COLORS.textMedium }}>{selectedSlot.time}</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '0.8rem',
                background: 'white',
                borderRadius: 8,
                flexDirection: isMobile ? 'column' : 'row',
              }}>
                <span style={{ 
                  fontWeight: 500, 
                  color: COLORS.textDark,
                  marginBottom: isMobile ? '0.3rem' : 0
                }}>Profesional:</span>
                <span style={{ color: COLORS.textMedium }}>Lucía Martínez</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '0.8rem',
                background: 'white',
                borderRadius: 8,
                flexDirection: isMobile ? 'column' : 'row',
              }}>
                <span style={{ 
                  fontWeight: 500, 
                  color: COLORS.textDark,
                  marginBottom: isMobile ? '0.3rem' : 0
                }}>Motivo:</span>
                <span style={{ color: COLORS.textMedium }}>
                  {reasonOptions.find(opt => opt.value === appointmentReason)?.label || appointmentReason}
                </span>
              </div>
              
              {notes && (
                <div style={{ 
                  padding: '0.8rem',
                  background: 'white',
                  borderRadius: 8,
                }}>
                  <span style={{ fontWeight: 500, color: COLORS.textDark, display: 'block', marginBottom: '0.5rem' }}>
                    Notas adicionales:
                  </span>
                  <p style={{ 
                    margin: 0, 
                    color: COLORS.textMedium,
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                  }}>
                    "{notes}"
                  </p>
                </div>
              )}
            </div>
            
            <div style={{ 
              background: '#fff8e1', 
              borderRadius: 8, 
              padding: '1rem',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              color: COLORS.warning,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              borderLeft: `4px solid ${COLORS.warning}`,
            }}>
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <p style={{ margin: 0 }}>
                Esta solicitud está sujeta a confirmación por parte del personal sanitario.
                Recibirás una notificación cuando sea aprobada.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              flexDirection: isMobile ? 'column' : 'row',
            }}>
              <button
                onClick={() => setShowConfirmation(false)}
                style={{
                  flex: 1,
                  background: '#f5f5f5',
                  color: COLORS.textMedium,
                  border: 'none',
                  borderRadius: 50,
                  padding: '0.8rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  order: isMobile ? 2 : 1,
                }}
              >
                Cancelar
              </button>
              <button
                onClick={confirmAppointment}
                style={{
                  flex: 1,
                  background: COLORS.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: 50,
                  padding: '0.8rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  order: isMobile ? 1 : 2,
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* NavBar en la parte inferior */}
      <NavBar active="appointments" onNavigate={onNavigate} />
    </div>
  );
}

export default StudentAppointmentBooking;