import React from 'react';
import './ProfessionalInterface.css';

// Componente de Layout para la navegación profesional
const ProfessionalLayout = ({ children, title, onBack, activeScreen, onNavigate }) => {
  // Configuración de los botones de navegación
  const navItems = [
    { id: 'dashboard', label: 'Inicio', icon: '🏠' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'appointments', label: 'Citas', icon: '📅' },
    { id: 'resources', label: 'Recursos', icon: '📚' }
  ];

  // Asegurarse de que haya una función de retroceso predeterminada si no se proporciona
  const handleBack = onBack || (() => onNavigate && onNavigate('dashboard'));

  return (
    <div className="professional-screen">
      {/* Cabecera con título y botón de retorno */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: 16,
        position: 'relative',
        padding: '0 1rem'
      }}>
        {/* Botón de retroceso siempre visible */}
        <button
          onClick={handleBack}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#00B7D8', 
            fontSize: 16, 
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
            padding: 0,
            position: 'absolute',
            left: '1rem'
          }}
        >
          <span style={{ fontSize: 20 }}>←</span> Atrás
        </button>
        
        <div style={{ 
          flex: 1, 
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18
        }}>
          {title}
        </div>
      </div>
      
      {/* Contenido principal */}
      <div style={{ 
        paddingBottom: 70, // Espacio para la barra de navegación
        minHeight: 'calc(100vh - 140px)' // Altura mínima
      }}>
        {children}
      </div>
      
      {/* Barra de navegación inferior */}
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
        zIndex: 40,
      }}>
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate && onNavigate(item.id)}
            style={{ 
              textAlign: 'center', 
              cursor: 'pointer', 
              padding: '4px 8px', 
              position: 'relative' 
            }}
          >
            <div style={{ 
              fontSize: '1.6rem',
              color: item.id === activeScreen ? '#00B7D8' : '#4A6572'
            }}>
              {item.icon}
            </div>
            <span style={{
              fontSize: 12,
              color: item.id === activeScreen ? '#00B7D8' : '#4A6572',
              fontWeight: item.id === activeScreen ? 600 : 400,
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalLayout;