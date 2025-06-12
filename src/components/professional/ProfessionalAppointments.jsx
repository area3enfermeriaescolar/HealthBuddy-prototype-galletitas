import React, { useState, useEffect } from 'react';
import ProfessionalLayout from './ProfessionalLayout';
import { getProfessionalAppointments, updateAppointmentStatus } from '../../services/appointmentService';
import { useAuth } from '../../contexts/AuthContext';

// Función para formatear fecha de yyyy-mm-dd a dd/mm/yyyy
const formatDateForDisplay = (dateString) => {
  if (!dateString) return '';
  
  // Si es un timestamp de Firebase
  if (dateString.seconds) {
    const date = new Date(dateString.seconds * 1000);
    return date.toLocaleDateString('es-ES');
  }
  
  // Si es una fecha normal
  if (dateString instanceof Date) {
    return dateString.toLocaleDateString('es-ES');
  }
  
  // Si es string en formato yyyy-mm-dd
  if (typeof dateString === 'string' && dateString.includes('-')) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }
  
  return dateString;
};

// Función para obtener fecha en formato dd/mm/yyyy para mostrar en las secciones
const getDateSectionTitle = (dateString) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];
  
  // Convertir timestamp de Firebase a string de fecha si es necesario
  let compareDateString = dateString;
  if (dateString && dateString.seconds) {
    const date = new Date(dateString.seconds * 1000);
    compareDateString = date.toISOString().split('T')[0];
  } else if (dateString instanceof Date) {
    compareDateString = dateString.toISOString().split('T')[0];
  }
  
  if (compareDateString === today) {
    return `Hoy - ${formatDateForDisplay(dateString)}`;
  } else if (compareDateString === tomorrowString) {
    return `Mañana - ${formatDateForDisplay(dateString)}`;
  } else {
    return formatDateForDisplay(dateString);
  }
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

// Paleta de colores
const COLORS = {
  primary: '#00B7D8',
  primaryDark: '#0095B0',
  textDark: '#2C3E50',
  textMedium: '#4A6572',
  lightBg: '#F7FAFC',
  lightGrey: '#ECEFF1',
  accent: '#4CAF50',
  warning: '#FF9800',
  danger: '#E74C3C'
};

// Componente de Tarjeta de Cita (más responsive para móviles)
const AppointmentCard = ({ appointment, onStatusChange, isUpdating }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
      case 'completed':
        return COLORS.accent;
      case 'cancelled':
        return COLORS.danger;
      case 'pending':
        return COLORS.warning;
      default:
        return COLORS.textMedium;
    }
  };
  
  const getStatusLabel = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmada';
      case 'completed':
        return 'Completada';
      case 'cancelled':
        return 'Cancelada';
      case 'pending':
        return 'Pendiente';
      default:
        return 'Desconocido';
    }
  };
  
  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      opacity: isUpdating === appointment.id ? 0.6 : 1,
      transition: 'opacity 0.3s ease',
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: 12,
        flexWrap: 'wrap'
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 16, color: COLORS.textDark }}>
            {appointment.studentName || `NRE: ${appointment.studentId}`}
          </h3>
          <p style={{ margin: '4px 0 0 0', fontSize: 14, color: COLORS.textMedium }}>
            {appointment.center || appointment.location || 'Centro no especificado'}
          </p>
        </div>
        <div style={{
          background: `${getStatusColor(appointment.status)}10`,
          padding: '4px 10px',
          borderRadius: 16,
          fontSize: 12,
          color: getStatusColor(appointment.status),
          fontWeight: 500,
          marginTop: window.innerWidth < 480 ? 8 : 0 // Ajuste responsive
        }}>
          {getStatusLabel(appointment.status)}
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: 12, 
        marginBottom: 12,
        flexWrap: 'wrap' 
      }}>
        <div style={{
          background: COLORS.lightBg,
          padding: '4px 10px',
          borderRadius: 8,
          fontSize: 13,
          color: COLORS.textMedium,
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
          <span>📅</span> {formatDateForDisplay(appointment.date)}
        </div>
        <div style={{
          background: COLORS.lightBg,
          padding: '4px 10px',
          borderRadius: 8,
          fontSize: 13,
          color: COLORS.textMedium,
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
          <span>⏰</span> {appointment.time}
        </div>
        <div style={{
          background: COLORS.lightBg,
          padding: '4px 10px',
          borderRadius: 8,
          fontSize: 13,
          color: COLORS.textMedium,
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
          <span>{appointment.type === 'presencial' ? '🏥' : '💻'}</span> 
          {appointment.type || 'presencial'}
        </div>
      </div>
      
      {/* Mostrar motivo de la cita */}
      <div style={{ 
        fontSize: 14, 
        color: COLORS.textMedium,
        marginBottom: 12
      }}>
        <span style={{ fontWeight: 500 }}>Motivo:</span> {appointment.reason || 'No especificado'}
      </div>

      {/* Mostrar notas si existen */}
      {appointment.notes && (
        <div style={{ 
          fontSize: 13, 
          color: COLORS.textMedium,
          marginBottom: 12,
          fontStyle: 'italic',
          background: '#f9f9f9',
          padding: 8,
          borderRadius: 6,
        }}>
          <span style={{ fontWeight: 500 }}>Notas:</span> "{appointment.notes}"
        </div>
      )}
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: window.innerWidth < 480 ? 'column' : 'row',
        gap: window.innerWidth < 480 ? 10 : 0
      }}>
        <div style={{ 
          fontSize: 12, 
          color: COLORS.textMedium,
          marginBottom: window.innerWidth < 480 ? 8 : 0
        }}>
          {appointment.createdAt && (
            <span>
              Solicitada: {new Date(appointment.createdAt.seconds * 1000).toLocaleDateString('es-ES')}
            </span>
          )}
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: 8,
          width: window.innerWidth < 480 ? '100%' : 'auto'
        }}>
          {appointment.status === 'pending' && (
            <>
              <button 
                onClick={() => onStatusChange(appointment.id, 'confirmed')}
                disabled={isUpdating === appointment.id}
                style={{
                  background: COLORS.accent,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 13,
                  cursor: isUpdating === appointment.id ? 'not-allowed' : 'pointer',
                  flex: window.innerWidth < 480 ? 1 : 'none',
                  opacity: isUpdating === appointment.id ? 0.6 : 1,
                }}
              >
                {isUpdating === appointment.id ? '...' : 'Confirmar'}
              </button>
              <button 
                onClick={() => onStatusChange(appointment.id, 'cancelled')}
                disabled={isUpdating === appointment.id}
                style={{
                  background: COLORS.danger,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 13,
                  cursor: isUpdating === appointment.id ? 'not-allowed' : 'pointer',
                  flex: window.innerWidth < 480 ? 1 : 'none',
                  opacity: isUpdating === appointment.id ? 0.6 : 1,
                }}
              >
                {isUpdating === appointment.id ? '...' : 'Rechazar'}
              </button>
            </>
          )}
          
          {appointment.status === 'confirmed' && (
            <>
              <button 
                onClick={() => onStatusChange(appointment.id, 'completed')}
                disabled={isUpdating === appointment.id}
                style={{
                  background: COLORS.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 13,
                  cursor: isUpdating === appointment.id ? 'not-allowed' : 'pointer',
                  flex: window.innerWidth < 480 ? 1 : 'none',
                  opacity: isUpdating === appointment.id ? 0.6 : 1,
                }}
              >
                {isUpdating === appointment.id ? '...' : 'Completar'}
              </button>
              <button 
                onClick={() => onStatusChange(appointment.id, 'cancelled')}
                disabled={isUpdating === appointment.id}
                style={{
                  background: COLORS.danger,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 13,
                  cursor: isUpdating === appointment.id ? 'not-allowed' : 'pointer',
                  flex: window.innerWidth < 480 ? 1 : 'none',
                  opacity: isUpdating === appointment.id ? 0.6 : 1,
                }}
              >
                {isUpdating === appointment.id ? '...' : 'Cancelar'}
              </button>
            </>
          )}
          
          {(appointment.status === 'completed' || appointment.status === 'cancelled') && (
            <button 
              onClick={() => onStatusChange(appointment.id, 'pending')}
              disabled={isUpdating === appointment.id}
              style={{
                background: COLORS.warning,
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '6px 12px',
                fontSize: 13,
                cursor: isUpdating === appointment.id ? 'not-allowed' : 'pointer',
                width: window.innerWidth < 480 ? '100%' : 'auto',
                opacity: isUpdating === appointment.id ? 0.6 : 1,
              }}
            >
              {isUpdating === appointment.id ? '...' : 'Reactivar'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente de Filtros (más responsive para móviles)
const AppointmentFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'pending', label: 'Pendientes' },
    { id: 'confirmed', label: 'Confirmadas' },
    { id: 'completed', label: 'Completadas' },
    { id: 'cancelled', label: 'Canceladas' }
  ];
  
  // Usa media queries de CSS para ser más responsivo
  const isSmallScreen = window.innerWidth < 480;
  
  return (
    <div style={{ 
      display: 'flex', 
      gap: 8, 
      overflowX: 'auto',
      paddingBottom: 8,
      marginBottom: 16,
      flexWrap: isSmallScreen ? 'wrap' : 'nowrap'
    }}>
      {filters.map(filter => (
        <button 
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          style={{
            background: activeFilter === filter.id ? COLORS.primary : 'white',
            color: activeFilter === filter.id ? 'white' : COLORS.textMedium,
            border: `1px solid ${activeFilter === filter.id ? COLORS.primary : COLORS.lightGrey}`,
            borderRadius: 20,
            padding: '6px 16px',
            fontSize: 14,
            fontWeight: activeFilter === filter.id ? 500 : 'normal',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flex: isSmallScreen ? '1 0 auto' : 'none',
            minWidth: isSmallScreen ? '30%' : 'auto',
            textAlign: 'center',
            marginBottom: isSmallScreen ? 4 : 0
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

// Componente Principal de Citas con integración Firebase
const ProfessionalAppointments = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null);
  const [updatingAppointment, setUpdatingAppointment] = useState(null);
  
  // Efecto para detectar cambios en el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Cargar citas del profesional desde Firebase
  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      setError('Debe iniciar sesión para ver las citas');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Aquí usamos el ID del profesional actual
      // En un caso real, podrías tener el professionalId en el perfil del usuario
      const professionalId = currentUser.uid; // o currentUser.professionalId si lo tienes

      const fetchAppointments = async () => {
        const result = await getProfessionalAppointments(professionalId);
        if (result.success) {
          console.log('Citas recibidas:', result.data);
          setAppointments(result.data);
        } else {
          setError(result.message || 'Error al cargar las citas');
        }
        setLoading(false);
      };
      
      fetchAppointments();
      
      // Retornamos una función de limpieza vacía ya que no hay un listener que desuscribir
      return () => {};

    } catch (err) {
      console.error('Error al cargar citas del profesional:', err);
      setError('Error al cargar las citas');
      setLoading(false);
    }
  }, [currentUser]);
  
  // Manejar cambio de estado de cita con Firebase
  const handleStatusChange = async (appointmentId, newStatus) => {
    if (!appointmentId || !newStatus) {
      console.error('ID de cita o nuevo estado no válido');
      return;
    }

    // Confirmar acción para cambios críticos
    const criticalActions = ['cancelled', 'completed'];
    if (criticalActions.includes(newStatus)) {
      const actionText = newStatus === 'cancelled' ? 'cancelar' : 'completar';
      if (!window.confirm(`¿Está seguro de que desea ${actionText} esta cita?`)) {
        return;
      }
    }

    setUpdatingAppointment(appointmentId);
    setError(null);

    try {
      await updateAppointmentStatus(appointmentId, newStatus);
      
      // Mostrar mensaje de éxito
      console.log(`Cita ${appointmentId} actualizada a estado: ${newStatus}`);
      
      // La UI se actualizará automáticamente gracias al listener en tiempo real
    } catch (err) {
      console.error('Error al actualizar estado de cita:', err);
      setError(`Error al actualizar la cita: ${err.message}`);
    } finally {
      setUpdatingAppointment(null);
    }
  };
  
  // Filtrar citas según filtro activo y término de búsqueda
  const filteredAppointments = appointments.filter(appointment => {
    const matchesFilter = activeFilter === 'all' || appointment.status === activeFilter;
    
    if (!matchesFilter) return false;
    
    if (searchTerm === '') return true;
    
    const searchLower = searchTerm.toLowerCase();
    const studentName = (appointment.studentName || '').toLowerCase();
    const studentId = (appointment.studentId || '').toLowerCase();
    const center = (appointment.center || appointment.location || '').toLowerCase();
    const reason = (appointment.reason || '').toLowerCase();
    const notes = (appointment.notes || '').toLowerCase();
    
    return studentName.includes(searchLower) ||
           studentId.includes(searchLower) ||
           center.includes(searchLower) ||
           reason.includes(searchLower) ||
           notes.includes(searchLower);
  });
  
  // Agrupar citas por fecha
  const groupedAppointments = filteredAppointments.reduce((groups, appointment) => {
    let dateKey;
    
    // Manejar diferentes tipos de fecha
    if (appointment.date && appointment.date.seconds) {
      // Timestamp de Firebase
      const date = new Date(appointment.date.seconds * 1000);
      dateKey = date.toISOString().split('T')[0];
    } else if (appointment.date instanceof Date) {
      // Objeto Date
      dateKey = appointment.date.toISOString().split('T')[0];
    } else if (typeof appointment.date === 'string') {
      // String de fecha
      dateKey = appointment.date.includes('T') ? 
        appointment.date.split('T')[0] : 
        appointment.date;
    } else {
      // Fallback
      dateKey = 'fecha-desconocida';
    }
    
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(appointment);
    return groups;
  }, {});
  
  // Ordenar fechas
  const sortedDates = Object.keys(groupedAppointments).sort((a, b) => {
    if (a === 'fecha-desconocida') return 1;
    if (b === 'fecha-desconocida') return -1;
    return new Date(a) - new Date(b);
  });
  
  const handleBack = () => {
    onNavigate('dashboard');
  };
  
  // Determinar si la pantalla es pequeña
  const isSmallScreen = windowWidth < 480;

  // Mostrar error de autenticación
  if (!currentUser) {
    return (
      <ProfessionalLayout 
        title="Acceso Denegado" 
        onBack={handleBack}
        activeScreen="appointments"
        onNavigate={onNavigate}
      >
        <div style={{ 
          textAlign: 'center', 
          padding: '30px 0', 
          color: COLORS.error,
          background: 'white',
          borderRadius: 12,
          marginTop: 16
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
          <h3>Acceso no autorizado</h3>
          <p>Debe iniciar sesión como profesional para ver las citas.</p>
        </div>
      </ProfessionalLayout>
    );
  }
  
  return (
    <ProfessionalLayout 
      title="Gestión de Citas" 
      onBack={handleBack}
      activeScreen="appointments"
      onNavigate={onNavigate}
    >
      <DemoBadge />

      {/* Mostrar errores */}
      {error && (
        <div style={{
          background: '#ffebee',
          borderLeft: `4px solid ${COLORS.danger}`,
          color: COLORS.danger,
          padding: '1rem',
          borderRadius: 8,
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <span style={{ fontSize: '1.2rem' }}>⚠️</span>
          <div>
            <p style={{ margin: 0, fontWeight: 500 }}>Error</p>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem' }}>{error}</p>
          </div>
        </div>
      )}
      
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por estudiante, NRE, centro, motivo..."
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
      
      <AppointmentFilters 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      {/* Estadísticas rápidas */}
      {!loading && appointments.length > 0 && (
        <div style={{
          display: 'flex',
          gap: 12,
          marginBottom: 20,
          flexWrap: 'wrap'
        }}>
          {[
            { status: 'pending', label: 'Pendientes', color: COLORS.warning },
            { status: 'confirmed', label: 'Confirmadas', color: COLORS.primary },
            { status: 'completed', label: 'Completadas', color: COLORS.accent },
          ].map(stat => {
            const count = appointments.filter(apt => apt.status === stat.status).length;
            return (
              <div 
                key={stat.status}
                style={{
                  background: 'white',
                  borderRadius: 8,
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flex: 1,
                  minWidth: 'fit-content',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: stat.color
                }} />
                <span style={{ fontSize: 13, color: COLORS.textMedium }}>
                  {stat.label}: <strong>{count}</strong>
                </span>
              </div>
            );
          })}
        </div>
      )}
      
      {loading ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '30px 0', 
          color: COLORS.textMedium,
          background: 'white',
          borderRadius: 12,
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⏳</div>
          <p>Cargando citas...</p>
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '30px 0', 
          color: COLORS.textMedium,
          background: 'white',
          borderRadius: 12,
          marginTop: 16
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📅</div>
          <h3 style={{ margin: '0 0 8px 0', color: COLORS.textDark }}>
            {appointments.length === 0 ? 
              'No hay citas programadas' : 
              'No se encontraron citas'
            }
          </h3>
          <p style={{ margin: '0 0 16px 0' }}>
            {activeFilter !== 'all' && `con estado "${activeFilter}" `}
            {searchTerm && `que coincidan con "${searchTerm}"`}
          </p>
          {activeFilter !== 'all' && (
            <button 
              onClick={() => setActiveFilter('all')}
              style={{
                background: COLORS.primary,
                color: 'white',
                border: 'none',
                borderRadius: 20,
                padding: '8px 16px',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Ver todas las citas
            </button>
          )}
        </div>
      ) : (
        sortedDates.map(date => (
          <div key={date} style={{ marginBottom: 24 }}>
            <h2 style={{ 
              margin: '0 0 12px 0', 
              fontSize: 16, 
              color: COLORS.textDark,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <span style={{ 
                background: COLORS.primary, 
                color: 'white',
                width: 24,
                height: 24,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14
              }}>
                {groupedAppointments[date].length}
              </span>
              {date === 'fecha-desconocida' ? 
                'Fecha no especificada' : 
                getDateSectionTitle(date)
              }
            </h2>
            
            {groupedAppointments[date]
              .sort((a, b) => {
                // Ordenar por hora si está disponible
                if (a.time && b.time) {
                  return a.time.localeCompare(b.time);
                }
                return 0;
              })
              .map(appointment => (
                <AppointmentCard 
                  key={appointment.id}
                  appointment={appointment}
                  onStatusChange={handleStatusChange}
                  isUpdating={updatingAppointment}
                />
              ))
            }
          </div>
        ))
      )}
      
      {/* Botón para programar nueva cita (futuro) */}
      <div style={{ marginTop: 24 }}>
        <button 
          onClick={() => {
            // Aquí podrías navegar a una pantalla de creación de citas
            console.log('Función de crear nueva cita - por implementar');
          }}
          style={{
            width: '100%',
            padding: '12px',
            background: COLORS.primary,
            border: 'none',
            borderRadius: 8,
            color: 'white',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            opacity: 0.7,
          }}
          disabled
        >
          <span>➕</span> Crear nueva cita (Próximamente)
        </button>
      </div>

      {/* Información adicional */}
      <div style={{
        background: '#f9f9f9',
        borderRadius: 8,
        padding: '12px',
        marginTop: 16,
        fontSize: 13,
        color: COLORS.textMedium,
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>
          💡 Las citas se actualizan en tiempo real. Los estudiantes recibirán notificaciones automáticas de los cambios de estado.
        </p>
      </div>
    </ProfessionalLayout>
  );
};

export default ProfessionalAppointments;