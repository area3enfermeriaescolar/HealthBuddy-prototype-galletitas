import React, { useState, useEffect } from 'react';
import ProfessionalLayout from './ProfessionalLayout';

// Función para formatear fecha de yyyy-mm-dd a dd/mm/yyyy
const formatDateForDisplay = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

// Función para obtener fecha en formato dd/mm/yyyy para mostrar en las secciones
const getDateSectionTitle = (dateString) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];
  
  if (dateString === today) {
    return `Hoy - ${formatDateForDisplay(dateString)}`;
  } else if (dateString === tomorrowString) {
    return `Mañana - ${formatDateForDisplay(dateString)}`;
  } else {
    return formatDateForDisplay(dateString);
  }
};

// Funciones simuladas para la demo
const getProfessionalAppointments = () => {
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

const updateAppointmentStatus = (appointmentId, status) => {
  // En una implementación real, aquí se actualizaría el estado en el backend
  console.log(`Actualizando cita ${appointmentId} a estado: ${status}`);
  
  return {
    success: true,
    message: 'Estado de la cita actualizado correctamente'
  };
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
const AppointmentCard = ({ appointment, onStatusChange }) => {
  const getStatusColor = (status) => {
    switch (status) {
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
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: 12,
        flexWrap: 'wrap'
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 16, color: COLORS.textDark }}>{appointment.studentName}</h3>
          <p style={{ margin: '4px 0 0 0', fontSize: 14, color: COLORS.textMedium }}>{appointment.center}</p>
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
          <span>{appointment.type === 'presencial' ? '🏥' : '💻'}</span> {appointment.type}
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: window.innerWidth < 480 ? 'column' : 'row',
        gap: window.innerWidth < 480 ? 10 : 0
      }}>
        <div style={{ 
          fontSize: 14, 
          color: COLORS.textMedium,
          marginBottom: window.innerWidth < 480 ? 8 : 0
        }}>
          <span style={{ fontWeight: 500 }}>Motivo:</span> {appointment.reason}
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: 8,
          width: window.innerWidth < 480 ? '100%' : 'auto'
        }}>
          {appointment.status === 'pending' && (
            <>
              <button 
                onClick={() => onStatusChange(appointment.id, 'completed')}
                style={{
                  background: COLORS.accent,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 13,
                  cursor: 'pointer',
                  flex: window.innerWidth < 480 ? 1 : 'none'
                }}
              >
                Completar
              </button>
              <button 
                onClick={() => onStatusChange(appointment.id, 'cancelled')}
                style={{
                  background: COLORS.danger,
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 13,
                  cursor: 'pointer',
                  flex: window.innerWidth < 480 ? 1 : 'none'
                }}
              >
                Cancelar
              </button>
            </>
          )}
          {appointment.status !== 'pending' && (
            <button 
              onClick={() => onStatusChange(appointment.id, 'pending')}
              style={{
                background: COLORS.primary,
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '6px 12px',
                fontSize: 13,
                cursor: 'pointer',
                width: window.innerWidth < 480 ? '100%' : 'auto'
              }}
            >
              Reactivar
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
            minWidth: isSmallScreen ? '45%' : 'auto',
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

// Componente Principal de Citas
const ProfessionalAppointments = ({ onNavigate }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
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
  
  // Cargar citas al montar el componente
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const result = getProfessionalAppointments();
        if (result.success) {
          setAppointments(result.data);
        }
      } catch (error) {
        console.error('Error al cargar citas:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAppointments();
  }, []);
  
  // Manejar cambio de estado de cita
  const handleStatusChange = (appointmentId, newStatus) => {
    try {
      const result = updateAppointmentStatus(appointmentId, newStatus);
      
      if (result.success) {
        // Actualizar estado local
        setAppointments(appointments.map(appointment => 
          appointment.id === appointmentId 
            ? { ...appointment, status: newStatus } 
            : appointment
        ));
      }
    } catch (error) {
      console.error('Error al actualizar estado de cita:', error);
    }
  };
  
  // Filtrar citas según filtro activo y término de búsqueda
  const filteredAppointments = appointments.filter(appointment => {
    const matchesFilter = activeFilter === 'all' || appointment.status === activeFilter;
    const matchesSearch = searchTerm === '' || 
      appointment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.center.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });
  
  // Agrupar citas por fecha
  const groupedAppointments = filteredAppointments.reduce((groups, appointment) => {
    if (!groups[appointment.date]) {
      groups[appointment.date] = [];
    }
    groups[appointment.date].push(appointment);
    return groups;
  }, {});
  
  // Ordenar fechas
  const sortedDates = Object.keys(groupedAppointments).sort();
  
  const handleBack = () => {
    onNavigate('dashboard');
  };
  
  // Determinar si la pantalla es pequeña
  const isSmallScreen = windowWidth < 480;
  
  return (
    <ProfessionalLayout 
      title="Gestión de Citas" 
      onBack={handleBack}
      activeScreen="appointments"
      onNavigate={onNavigate}
    >
      <DemoBadge />
      
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por NRE, centro, motivo..."
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
      
      {loading ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '30px 0', 
          color: COLORS.textMedium 
        }}>
          Cargando citas...
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
          <p>No se encontraron citas {activeFilter !== 'all' && `con estado "${activeFilter}"`}</p>
          {searchTerm && <p>con el término de búsqueda "{searchTerm}"</p>}
          {activeFilter !== 'all' && (
            <button 
              onClick={() => setActiveFilter('all')}
              style={{
                background: COLORS.primary,
                color: 'white',
                border: 'none',
                borderRadius: 20,
                padding: '8px 16px',
                marginTop: 16,
                cursor: 'pointer'
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
              {getDateSectionTitle(date)}
            </h2>
            
            {groupedAppointments[date].map(appointment => (
              <AppointmentCard 
                key={appointment.id}
                appointment={appointment}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        ))
      )}
      
      <div style={{ marginTop: 24 }}>
        <button 
          onClick={() => {/* Aquí iría la lógica para crear nueva cita */}}
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
            gap: 8
          }}
        >
          <span>➕</span> Programar nueva cita
        </button>
      </div>
    </ProfessionalLayout>
  );
};

export default ProfessionalAppointments;