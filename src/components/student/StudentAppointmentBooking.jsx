import React, { useState, useEffect, useLayoutEffect } from 'react';
import { createAppointment, getStudentAppointments, updateAppointmentStatus } from '../../services/appointmentService';
import { useAuth } from '../../contexts/AuthContext';

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

// Componente principal mejorado con integración Firebase
function StudentAppointmentBooking({ onNavigate }) {
  const { currentUser } = useAuth();
  
  const [activeTab, setActiveTab] = useState('upcoming');
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointmentReason, setAppointmentReason] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [notes, setNotes] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  // Estados para Firebase
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  
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
  
  // Cargar citas del estudiante desde Firebase
  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const unsubscribe = getStudentAppointments(currentUser.uid, (appointments) => {
        // Formatear las citas para mostrar en la UI
        const formattedAppointments = appointments.map(apt => ({
          id: apt.id,
          date: new Date(apt.date.seconds * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
          time: apt.time,
          with: apt.professionalName || 'Lucía Martínez', // Fallback si no está disponible
          role: apt.professionalRole || 'Enfermera Escolar',
          reason: apt.reason,
          status: apt.status,
          location: apt.location || 'Sala 12, junto a Orientación',
          notes: apt.notes,
          originalDate: apt.date // Mantener fecha original para operaciones
        }));
        
        setUpcomingAppointments(formattedAppointments);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.error('Error al cargar citas:', err);
      setError('Error al cargar las citas');
      setLoading(false);
    }
  }, [currentUser]);

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
  
  // Maneja la solicitud de cita con Firebase
  const handleBookAppointment = () => {
    if (!selectedSlot || !appointmentReason || !currentUser) return;
    setShowConfirmation(true);
  };
  
  // Confirma la cita y la guarda en Firebase
  const confirmAppointment = async () => {
    if (!currentUser || !selectedSlot) return;

    setSubmitting(true);
    setError(null);

    try {
      const appointmentData = {
        studentId: currentUser.uid,
        studentName: currentUser.displayName || currentUser.email,
        professionalId: 'lucia-martinez-id', // ID del profesional - esto debería venir de una selección
        professionalName: 'Lucía Martínez',
        professionalRole: 'Enfermera Escolar',
        date: selectedSlot.date,
        time: selectedSlot.time,
        reason: appointmentReason,
        notes: notes,
        status: 'pending',
        location: 'Sala 12, junto a Orientación',
        createdAt: new Date(),
      };

      await createAppointment(appointmentData);
      
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

    } catch (err) {
      console.error('Error al crear la cita:', err);
      setError('Error al solicitar la cita. Por favor, inténtalo de nuevo.');
    } finally {
      setSubmitting(false);
    }
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
  
  // Función para cancelar una cita con Firebase
  const handleCancelAppointment = async (appointmentId) => {
    if (!window.confirm('¿Estás seguro/a de que deseas cancelar esta cita?')) {
      return;
    }

    try {
      await updateAppointmentStatus(appointmentId, 'cancelled');
      // La UI se actualizará automáticamente gracias al listener en tiempo real
    } catch (err) {
      console.error('Error al cancelar la cita:', err);
      setError('Error al cancelar la cita');
    }
  };

  // Mostrar error si no está autenticado
  if (!currentUser) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        backgroundColor: COLORS.lightBg,
        minHeight: '100vh',
      }}>
        <h2 style={{ color: COLORS.error }}>Acceso no autorizado</h2>
        <p style={{ color: COLORS.textMedium }}>
          Debes iniciar sesión para acceder a tus citas.
        </p>
      </div>
    );
  }
  
  return (
    <div style={{ 
      padding: isMobile ? '0.75rem' : '1rem', 
      paddingBottom: 80, 
      backgroundColor: COLORS.lightBg,
      minHeight: '100vh',
      maxWidth: '100%',
      overflowX: 'hidden',
    }}>
      
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

      {/* Mostrar errores */}
      {error && (
        <div style={{
          background: '#ffebee',
          borderLeft: `4px solid ${COLORS.error}`,
          color: COLORS.error,
          padding: '1rem',
          borderRadius: 8,
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <span style={{ fontSize: '1.2rem' }}>⚠️</span>
          <p style={{ margin: 0 }}>{error}</p>
        </div>
      )}
      
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
          {loading ? (
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
              <p style={{ color: COLORS.textMedium }}>Cargando tus citas...</p>
            </div>
          ) : upcomingAppointments.length > 0 ? (
            <div>
              {upcomingAppointments.map((apt) => (
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
                            {reasonOptions.find(opt => opt.value === apt.reason)?.label || apt.reason}
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
                          background: apt.status === 'confirmed' ? '#e8f5e9' : 
                                     apt.status === 'cancelled' ? '#ffebee' :
                                     '#fffde7',
                          color: apt.status === 'confirmed' ? COLORS.success : 
                                 apt.status === 'cancelled' ? COLORS.error :
                                 COLORS.warning,
                          padding: '0.3rem 0.6rem',
                          borderRadius: 8,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}>
                          {apt.status === 'pending' ? 'Pendiente' : 
                           apt.status === 'confirmed' ? 'Confirmada' : 
                           'Cancelada'}
                        </div>
                      </div>
                      <p style={{ 
                        margin: '0 0 0.5rem 0', 
                        color: COLORS.textMedium, 
                        fontSize: '0.9rem' 
                      }}>
                        Con {apt.with} ({apt.role})
                      </p>
                      <p style={{ 
                        margin: '0 0 0.5rem 0', 
                        color: COLORS.textMedium, 
                        fontSize: '0.9rem' 
                      }}>
                        Ubicación: {apt.location}
                      </p>
                      {apt.notes && (
                        <p style={{ 
                          margin: '0 0 0.5rem 0', 
                          color: COLORS.textMedium, 
                          fontSize: '0.9rem', 
                          fontStyle: 'italic' 
                        }}>
                          Notas: {apt.notes}
                        </p>
                      )}
                      {apt.status === 'pending' && (
                        <button
                          onClick={() => handleCancelAppointment(apt.id)}
                          style={{
                            background: 'transparent',
                            border: `1px solid ${COLORS.error}`,
                            color: COLORS.error,
                            padding: '0.5rem 1rem',
                            borderRadius: 8,
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginTop: '0.5rem',
                          }}
                        >
                          Cancelar Cita
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🗓️</div>
              <p style={{ color: COLORS.textMedium }}>No tienes citas programadas.</p>
            </div>
          )}
        </div>
      )}

      {/* Panel de Solicitar Cita */}
      {activeTab === 'book' && (
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: '1.5rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          }}>
            <h3 style={{ 
              color: COLORS.textDark, 
              fontSize: '1.1rem', 
              marginBottom: '1rem' 
            }}>
              Selecciona una fecha y hora
            </h3>
            
            {/* Navegación de semana */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}>
              <button 
                onClick={() => setWeekOffset(prev => prev - 1)}
                style={{
                  background: COLORS.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: 30,
                  height: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                }}
              >←</button>
              <span style={{ 
                color: COLORS.textDark, 
                fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                {formatDate(availableDates[0])} - {formatDate(availableDates[availableDates.length - 1])}
              </span>
              <button 
                onClick={() => setWeekOffset(prev => prev + 1)}
                style={{
                  background: COLORS.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: 30,
                  height: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                }}
              >→</button>
            </div>

            {/* Días disponibles */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              {availableDates.map((date) => (
                <div key={date.toISOString()} style={{
                  background: COLORS.lightBg,
                  borderRadius: 8,
                  padding: '0.75rem',
                  textAlign: 'center',
                  border: selectedSlot?.date?.toISOString() === date.toISOString() ? `2px solid ${COLORS.primary}` : '1px solid #eee',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  <h4 style={{ 
                    margin: '0 0 0.5rem 0', 
                    color: COLORS.textDark, 
                    fontSize: '0.9rem' 
                  }}>
                    {formatDate(date)}
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.5rem',
                  }}>
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleSelectSlot(date, slot)}
                        style={{
                          background: selectedSlot?.date?.toISOString() === date.toISOString() && selectedSlot?.time === slot ? COLORS.primary : 'white',
                          color: selectedSlot?.date?.toISOString() === date.toISOString() && selectedSlot?.time === slot ? 'white' : COLORS.textMedium,
                          border: `1px solid ${COLORS.primary}`,
                          borderRadius: 6,
                          padding: '0.4rem 0.6rem',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario de motivo y notas */}
            {selectedSlot && (
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ 
                  color: COLORS.textDark, 
                  fontSize: '1.1rem', 
                  marginBottom: '1rem' 
                }}>
                  Detalles de la cita
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: COLORS.textDark, 
                    fontWeight: 500 
                  }}>Motivo de la cita:</label>
                  <select
                    value={appointmentReason}
                    onChange={(e) => setAppointmentReason(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.6rem',
                      borderRadius: 8,
                      border: '1px solid #ccc',
                      fontSize: '0.9rem',
                    }}
                  >
                    <option value="">Selecciona un motivo</option>
                    {reasonOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: COLORS.textDark, 
                    fontWeight: 500 
                  }}>Notas adicionales (opcional):</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="¿Hay algo más que debamos saber?"
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '0.6rem',
                      borderRadius: 8,
                      border: '1px solid #ccc',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>
                <button
                  onClick={handleBookAppointment}
                  disabled={!appointmentReason || submitting}
                  style={{
                    background: COLORS.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    padding: '0.8rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: '100%',
                    opacity: submitting ? 0.7 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {submitting ? 'Solicitando...' : 'Solicitar Cita'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirmación de Cita */}
      {showConfirmation && selectedSlot && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxWidth: isMobile ? '90%' : '400px',
          }}>
            <h3 style={{ color: COLORS.textDark, marginBottom: '1rem' }}>Confirmar Cita</h3>
            <p style={{ color: COLORS.textMedium, marginBottom: '0.5rem' }}>
              Fecha: <strong>{formatDate(selectedSlot.date)}</strong>
            </p>
            <p style={{ color: COLORS.textMedium, marginBottom: '0.5rem' }}>
              Hora: <strong>{selectedSlot.time}</strong>
            </p>
            <p style={{ color: COLORS.textMedium, marginBottom: '1.5rem' }}>
              Motivo: <strong>{reasonOptions.find(opt => opt.value === appointmentReason)?.label || appointmentReason}</strong>
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
              <button
                onClick={() => setShowConfirmation(false)}
                style={{
                  background: 'transparent',
                  border: `1px solid ${COLORS.textMedium}`,
                  color: COLORS.textMedium,
                  padding: '0.6rem 1.2rem',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                Cancelar
              </button>
              <button
                onClick={confirmAppointment}
                disabled={submitting}
                style={{
                  background: COLORS.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flex: 1,
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? 'Confirmando...' : 'Confirmar'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <NavBar active="appointments" onNavigate={onNavigate} />
    </div>
  );
}

export default StudentAppointmentBooking;


