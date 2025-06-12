import React, { useState } from 'react';

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

// Componente DemoBadge
function DemoBadge() {
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
}

// Componente NavBar
function NavBar({ active, onNavigate, userType }) {
  const navItems = {
    professional: [
      { id: 'dashboard', icon: '🏠', label: 'Inicio' },
      { id: 'chat', icon: '💬', label: 'Chat' },
      { id: 'appointments', icon: '📅', label: 'Citas' },
      { id: 'statistics', icon: '📊', label: 'Datos' },
      { id: 'profile', icon: '👤', label: 'Perfil' }
    ]
  };

  const items = navItems[userType] || navItems.professional;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'white',
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      height: 60,
      zIndex: 100
    }}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onNavigate(item.id)}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: active === item.id ? COLORS.primary : COLORS.textMedium,
            transition: 'color 0.2s ease'
          }}
        >
          <span style={{ fontSize: '1.2rem', marginBottom: 2 }}>{item.icon}</span>
          <span style={{ fontSize: '0.7rem', fontWeight: active === item.id ? 600 : 400 }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Componente Header
const Header = ({ title, onBack }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
    <button
      onClick={onBack}
      style={{
        background: 'transparent',
        border: 'none',
        fontSize: 24,
        padding: '4px 8px',
        marginRight: 8,
        cursor: 'pointer',
        color: COLORS.textMedium,
      }}
    >
      ←
    </button>
    <h1 style={{ margin: 0, fontSize: 20, color: COLORS.textDark }}>{title}</h1>
  </div>
);

// Componente SchoolCard
const SchoolCard = ({ school, onSelect }) => (
  <div
    onClick={() => onSelect(school)}
    style={{
      background: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      transition: 'transform 0.15s ease'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3 style={{ margin: 0, marginBottom: 4, fontSize: 16, color: COLORS.textDark }}>
          {school.name}
        </h3>
        <p style={{ margin: 0, fontSize: 14, color: COLORS.textMedium }}>{school.address}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            background: COLORS.primary,
            color: 'white',
            borderRadius: 20,
            padding: '4px 12px',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {school.students.length}
        </div>
        <span style={{ fontSize: 12, color: COLORS.textMedium, marginTop: 2 }}>estudiantes</span>
      </div>
    </div>
    <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
      <div
        style={{
          background: COLORS.lightGrey,
          padding: '4px 8px',
          borderRadius: 4,
          fontSize: 12,
          color: COLORS.textMedium,
        }}
      >
        <span style={{ marginRight: 4 }}>📅</span>
        {school.nextVisit}
      </div>
      {school.hasAlert && (
        <div
          style={{
            background: 'rgba(255, 152, 0, 0.1)',
            padding: '4px 8px',
            borderRadius: 4,
            fontSize: 12,
            color: COLORS.warning,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: 4 }}>⚠️</span>Consultas pendientes
        </div>
      )}
    </div>
  </div>
);

// Componente StudentCard
const StudentCard = ({ student, onSelect }) => (
  <div
    onClick={() => onSelect(student)}
    style={{
      background: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div>
      <h3 style={{ margin: 0, fontSize: 16, color: COLORS.textDark }}>NRE: {student.nre}</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
        <span style={{ fontSize: 14, color: COLORS.textMedium }}>{student.age} años</span>
        <span style={{ fontSize: 14, color: COLORS.textMedium }}>{student.gender}</span>
        <span style={{ fontSize: 14, color: COLORS.textMedium }}>{student.grade}</span>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {student.lastVisit ? (
        <span style={{ fontSize: 12, color: COLORS.textMedium }}>Última: {student.lastVisit}</span>
      ) : (
        <span style={{ background: 'rgba(76,175,80,0.1)', padding: '4px 8px', borderRadius: 16, fontSize: 12, color: COLORS.accent }}>
          Sin consultas
        </span>
      )}
      <span style={{ fontSize: 20, color: COLORS.textMedium }}>→</span>
    </div>
  </div>
);

// Componente ScheduleEditor
const ScheduleEditor = ({ school, onSave, onCancel }) => {
  const [day, setDay] = useState(school.consultationDay || '');
  const [startTime, setStartTime] = useState(school.consultationStartTime || '');
  const [endTime, setEndTime] = useState(school.consultationEndTime || '');
  const [location, setLocation] = useState(school.consultationLocation || '');

  const days = [
    { value: 'monday', label: 'Lunes' },
    { value: 'tuesday', label: 'Martes' },
    { value: 'wednesday', label: 'Miércoles' },
    { value: 'thursday', label: 'Jueves' },
    { value: 'friday', label: 'Viernes' }
  ];

  const handleSave = () => {
    onSave({
      ...school,
      consultationDay: day,
      consultationStartTime: startTime,
      consultationEndTime: endTime,
      consultationLocation: location,
      nextVisit: days.find(d => d.value === day)?.label + ' ' + startTime
    });
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 16px 0', color: COLORS.primary }}>Modificar horario de consulta</h3>
      
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
          Día de la semana
        </label>
        <select 
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: 8,
            border: `1px solid ${COLORS.lightGrey}`,
            fontSize: 14
          }}
        >
          <option value="">Seleccionar día</option>
          {days.map(d => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
            Hora inicio
          </label>
          <input 
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: 8,
              border: `1px solid ${COLORS.lightGrey}`,
              fontSize: 14
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
            Hora fin
          </label>
          <input 
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
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
      
      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
          Ubicación
        </label>
        <input 
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ej: Sala de enfermería, Aula 12..."
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: 8,
            border: `1px solid ${COLORS.lightGrey}`,
            fontSize: 14
          }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <button 
          onClick={onCancel}
          style={{
            background: '#f5f5f5',
            border: 'none',
            borderRadius: 8,
            padding: '8px 16px',
            fontSize: 14,
            cursor: 'pointer'
          }}
        >
          Cancelar
        </button>
        <button 
          onClick={handleSave}
          style={{
            background: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 8,
            padding: '8px 16px',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

// Componente StudentHistory
const StudentHistory = ({ student, onBack }) => (
  <div>
    <Header title={`Historial - NRE: ${student.nre}`} onBack={onBack} />
    
    <div style={{ 
      background: 'white', 
      borderRadius: 12, 
      padding: 16,
      marginBottom: 16
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 16,
        padding: '12px 16px',
        background: COLORS.lightBg,
        borderRadius: 8
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 16 }}>Datos del estudiante</h3>
          <p style={{ margin: '4px 0 0 0', fontSize: 14, color: COLORS.textMedium }}>
            {student.age} años · {student.gender} · {student.grade}
          </p>
        </div>
        <button style={{
          background: COLORS.primary,
          color: 'white',
          border: 'none',
          borderRadius: 20,
          padding: '6px 12px',
          fontSize: 13,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          cursor: 'pointer'
        }}>
          <span>💬</span> Chat
        </button>
      </div>
      
      {student.history.length ? (
        <>
          <h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>Historial de consultas</h3>
          {student.history.map((entry, idx) => (
            <div 
              key={idx} 
              style={{ 
                borderLeft: `3px solid ${COLORS.primary}`, 
                paddingLeft: 12, 
                marginBottom: 16,
                background: idx % 2 === 0 ? COLORS.lightBg : 'white',
                padding: '12px',
                borderRadius: '0 8px 8px 0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ margin: 0, fontSize: 15, color: COLORS.textDark }}>{entry.type}</h4>
                <span style={{ fontSize: 14, color: COLORS.textMedium }}>{entry.date}</span>
              </div>
              <p style={{ margin: '4px 0 0 0', fontSize: 14, color: COLORS.textMedium }}>{entry.description}</p>
              {entry.tags && (
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  {entry.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        background: COLORS.lightGrey, 
                        padding: '2px 8px', 
                        borderRadius: 12, 
                        fontSize: 12, 
                        color: COLORS.textMedium 
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '30px 0', color: COLORS.textMedium }}>
          <p>No hay consultas registradas</p>
          <div style={{ fontSize: 40, margin: '16px 0' }}>📋</div>
          <p>Este estudiante aún no ha realizado consultas</p>
          <button style={{
            background: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 20,
            padding: '8px 16px',
            fontSize: 14,
            marginTop: 16,
            cursor: 'pointer'
          }}>
            Registrar nueva consulta
          </button>
        </div>
      )}
    </div>
  </div>
);

// Componente Principal
export default function MyCentersView({ onNavigate }) {
  const [view, setView] = useState('centers');
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingSchedule, setEditingSchedule] = useState(false);
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: 'IES Ibáñez Martín',
      address: 'Av. Juan Carlos I, Lorca',
      nextVisit: 'Miércoles 10:00',
      hasAlert: true,
      consultationDay: 'wednesday',
      consultationStartTime: '10:00',
      consultationEndTime: '11:00',
      consultationLocation: 'Sala de enfermería',
      students: [
        {
          id: 101,
          nre: '30012345',
          age: 15,
          gender: 'Femenino',
          grade: '3º ESO',
          lastVisit: '12/04/2025',
          history: [
            {
              type: 'Consulta general',
              date: '12/04/2025',
              description: 'La estudiante acudió por dolor de cabeza recurrente.',
              tags: ['Dolor', 'Cefalea']
            }
          ]
        },
        {
          id: 102,
          nre: '30023456',
          age: 16,
          gender: 'Masculino',
          grade: '4º ESO',
          lastVisit: null,
          history: []
        }
      ]
    }
  ]);

  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStudents = selectedSchool ? selectedSchool.students.filter(student => 
    student.nre.includes(searchTerm)
  ) : [];

  const handleSelectSchool = (school) => {
    setSelectedSchool(school);
    setView('students');
    setSearchTerm('');
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setView('history');
  };

  const handleSaveSchedule = (updatedSchool) => {
    const updatedSchools = schools.map(school => 
      school.id === updatedSchool.id ? updatedSchool : school
    );
    setSchools(updatedSchools);
    setSelectedSchool(updatedSchool);
    setEditingSchedule(false);
  };

  const renderCentersView = () => (
    <div>
      <Header title="Mis Centros" onBack={() => onNavigate('dashboard')} />
      
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar centro..."
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
      </div>
      
      {filteredSchools.map(school => (
        <SchoolCard key={school.id} school={school} onSelect={handleSelectSchool} />
      ))}
    </div>
  );

  const renderStudentsView = () => (
    <div>
      <Header title={selectedSchool.name} onBack={() => setView('centers')} />
      
      {editingSchedule ? (
        <ScheduleEditor 
          school={selectedSchool} 
          onSave={handleSaveSchedule} 
          onCancel={() => setEditingSchedule(false)} 
        />
      ) : (
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: 16,
          marginBottom: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16 }}>Consulta Joven</h3>
            <p style={{ margin: '4px 0 0 0', fontSize: 14, color: COLORS.textMedium }}>
              {selectedSchool.nextVisit} · {selectedSchool.consultationLocation}
            </p>
          </div>
          <button 
            onClick={() => setEditingSchedule(true)}
            style={{
              background: 'none',
              border: `1px solid ${COLORS.primary}`,
              color: COLORS.primary,
              borderRadius: 20,
              padding: '6px 12px',
              fontSize: 13,
              cursor: 'pointer'
            }}
          >
            Modificar horario
          </button>
        </div>
      )}
      
      <h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>Estudiantes</h3>
      
      {filteredStudents.map(student => (
        <StudentCard key={student.id} student={student} onSelect={handleSelectStudent} />
      ))}
    </div>
  );

  return (
    <div style={{ 
      padding: '1rem', 
      paddingBottom: 80,
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <DemoBadge />
      
      {view === 'centers' && renderCentersView()}
      {view === 'students' && renderStudentsView()}
      {view === 'history' && <StudentHistory student={selectedStudent} onBack={() => setView('students')} />}
      
      <NavBar 
        active="centers" 
        onNavigate={onNavigate} 
        userType="professional" 
      />
    </div>
  );
}