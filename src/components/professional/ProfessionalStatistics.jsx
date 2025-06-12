import React, { useState, useEffect } from 'react';

// Paleta de colores
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
const DemoBadge = () => (
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

// Componente de Gráfico de Barras
const BarChart = ({ data, title, color = COLORS.primary }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div style={{ marginBottom: 24 }}>
      {title && <h3 style={{ fontSize: 16, marginBottom: 16, color: COLORS.textDark }}>{title}</h3>}
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: window.innerWidth < 480 ? 13 : 14, color: COLORS.textMedium }}>{item.label}</span>
            <span style={{ fontSize: window.innerWidth < 480 ? 13 : 14, fontWeight: 600, color: COLORS.textDark }}>{item.value}</span>
          </div>
          <div style={{ 
            width: '100%', 
            height: 8, 
            background: COLORS.lightBg, 
            borderRadius: 4, 
            overflow: 'hidden' 
          }}>
            <div style={{ 
              width: `${(item.value / maxValue) * 100}%`,
              height: '100%',
              background: color,
              borderRadius: 4,
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente de Gráfico Circular adaptativo
const PieChart = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 480;
  const chartSize = isMobile ? 120 : 150;
  const colors = [COLORS.primary, COLORS.accentGreen, COLORS.purple, COLORS.accentOrange, COLORS.accentRed];
  
  // Simplificación para móviles: usar barras en lugar de gráfico circular
  if (isMobile) {
    return (
      <div>
        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ 
                  width: 10, 
                  height: 10, 
                  borderRadius: 2, 
                  background: colors[index % colors.length] 
                }} />
                <span style={{ fontSize: 13, color: COLORS.textMedium }}>{item.label}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.textDark }}>{item.value}</span>
            </div>
            <div style={{ 
              width: '100%', 
              height: 6, 
              background: COLORS.lightBg, 
              borderRadius: 3, 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                width: `${(item.value / total) * 100}%`,
                height: '100%',
                background: colors[index % colors.length],
                borderRadius: 3
              }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // Versión desktop con gráfico circular
  let currentAngle = 0;
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ 
        width: chartSize, 
        height: chartSize, 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const angle = (percentage / 100) * 360;
          const color = colors[index % colors.length];
          
          const startAngle = currentAngle;
          currentAngle += angle;
          
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `conic-gradient(${color} ${startAngle}deg ${currentAngle}deg, transparent ${currentAngle}deg 360deg)`,
                transform: 'rotate(0deg)'
              }}
            />
          );
        })}
        <div style={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.textDark }}>{total}</span>
        </div>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ 
              width: 12, 
              height: 12, 
              borderRadius: 4, 
              background: colors[index % colors.length] 
            }} />
            <span style={{ fontSize: 14, color: COLORS.textMedium }}>{item.label}</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.textDark }}>({item.value})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal de Estadísticas
const ProfessionalStatistics = ({ onNavigate }) => {
  const [selectedCenter, setSelectedCenter] = useState('all');
  const [timeRange, setTimeRange] = useState('month');
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  // Detectar cambios en el ancho de la ventana
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Simulación de carga de datos
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  
  const isMobile = windowWidth < 480;
  const isTablet = windowWidth < 768;
  
  // Datos de ejemplo
  const centers = [
    { id: 'all', name: 'Todos los centros' },
    { id: 'ies-mediterraneo', name: 'IES Mediterráneo' },
    { id: 'ies-san-juan', name: 'IES San Juan Bosco' },
    { id: 'ies-mar-menor', name: 'IES Mar Menor' }
  ];
  
  const topicsData = [
    { label: 'Salud mental', value: 45 },
    { label: 'Sexualidad', value: 38 },
    { label: 'Nutrición', value: 32 },
    { label: 'Adicciones', value: 28 },
    { label: 'Relaciones', value: 24 },
    { label: 'Ejercicio físico', value: 21 }
  ];
  
  const ageData = [
    { label: '12-14 años', value: 42 },
    { label: '15-16 años', value: 65 },
    { label: '17-18 años', value: 48 },
    { label: '18+ años', value: 23 }
  ];
  
  const genderData = [
    { label: 'Femenino', value: 112 },
    { label: 'Masculino', value: 66 }
  ];
  
  const consultationTypeData = [
    { label: 'Presencial', value: 134 },
    { label: 'Virtual (Chat)', value: 44 }
  ];
  
  const resourceAccessData = [
    { label: 'Recursos de salud mental', value: 156 },
    { label: 'Guías de sexualidad', value: 142 },
    { label: 'Material nutricional', value: 98 },
    { label: 'Prevención adicciones', value: 76 },
    { label: 'Ejercicios y actividad física', value: 54 }
  ];
  
  const consultationTrends = [
    { label: 'Ene', value: 25 },
    { label: 'Feb', value: 32 },
    { label: 'Mar', value: 45 },
    { label: 'Abr', value: 38 },
    { label: 'May', value: 52 },
    { label: 'Jun', value: 48 }
  ];
  
  if (loading) {
    return (
      <div style={{ 
        padding: isMobile ? '0.75rem' : '1rem', 
        paddingBottom: 100, 
        maxWidth: 800, 
        margin: '0 auto' 
      }}>
        <DemoBadge />
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 16,
          position: 'relative'
        }}>
          <button
            onClick={() => onNavigate('dashboard')}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: COLORS.primary, 
              fontSize: 16, 
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              cursor: 'pointer',
              padding: 0,
              position: 'absolute',
              left: 0
            }}
          >
            <span style={{ fontSize: 20 }}>←</span> {!isMobile && 'Atrás'}
          </button>
          <h1 style={{ 
            flex: 1, 
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: isMobile ? 16 : 18
          }}>Estadísticas</h1>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          padding: '30px 0', 
          color: COLORS.textMedium 
        }}>
          Cargando estadísticas...
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ 
      padding: isMobile ? '0.75rem' : '1rem', 
      paddingBottom: 100, 
      maxWidth: 800, 
      margin: '0 auto' 
    }}>
      <DemoBadge />
      
      {/* Cabecera */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: 16,
        position: 'relative'
      }}>
        <button
          onClick={() => onNavigate('dashboard')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: COLORS.primary, 
            fontSize: 16, 
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
            padding: 0,
            position: 'absolute',
            left: 0
          }}
        >
          <span style={{ fontSize: 20 }}>←</span> {!isMobile && 'Atrás'}
        </button>
        <h1 style={{ 
          flex: 1, 
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: isMobile ? 16 : 18
        }}>Estadísticas</h1>
      </div>
      
      {/* Filtros */}
      <div style={{ 
        display: 'flex', 
        gap: isMobile ? 8 : 16, 
        marginBottom: isMobile ? 16 : 24,
        flexDirection: isMobile ? 'column' : 'row',
        flexWrap: 'wrap'
      }}>
        <select
          value={selectedCenter}
          onChange={(e) => setSelectedCenter(e.target.value)}
          style={{
            flex: 1,
            minWidth: 150,
            padding: isMobile ? '8px 10px' : '10px 12px',
            borderRadius: 8,
            border: `1px solid ${COLORS.lightGrey}`,
            fontSize: isMobile ? 13 : 14,
            background: 'white'
          }}
        >
          {centers.map(center => (
            <option key={center.id} value={center.id}>{center.name}</option>
          ))}
        </select>
        
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          style={{
            flex: 1,
            minWidth: 120,
            padding: isMobile ? '8px 10px' : '10px 12px',
            borderRadius: 8,
            border: `1px solid ${COLORS.lightGrey}`,
            fontSize: isMobile ? 13 : 14,
            background: 'white'
          }}
        >
          <option value="week">Última semana</option>
          <option value="month">Último mes</option>
          <option value="quarter">Último trimestre</option>
          <option value="year">Último año</option>
        </select>
      </div>
      
      {/* Tarjetas de resumen */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100px' : '150px'}, 1fr))`, 
        gap: isMobile ? 8 : 16,
        marginBottom: isMobile ? 16 : 24
      }}>
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: isMobile ? 24 : 32, fontWeight: 'bold', color: COLORS.primary }}>178</div>
          <div style={{ fontSize: isMobile ? 12 : 14, color: COLORS.textMedium }}>Total consultas</div>
        </div>
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: isMobile ? 24 : 32, fontWeight: 'bold', color: COLORS.accentGreen }}>526</div>
          <div style={{ fontSize: isMobile ? 12 : 14, color: COLORS.textMedium }}>Recursos accedidos</div>
        </div>
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: isMobile ? 24 : 32, fontWeight: 'bold', color: COLORS.purple }}>15.3</div>
          <div style={{ fontSize: isMobile ? 12 : 14, color: COLORS.textMedium }}>Edad promedio</div>
        </div>
      </div>
      
      {/* Gráficos principales */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '280px' : '300px'}, 1fr))`, 
        gap: isMobile ? 16 : 24 
      }}>
        {/* Temas más consultados */}
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <BarChart data={topicsData} title="Temas más consultados" />
        </div>
        
        {/* Distribución por edad */}
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <BarChart data={ageData} title="Distribución por edad" color={COLORS.purple} />
        </div>
      </div>
      
      {/* Gráficos secundarios */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '280px' : '300px'}, 1fr))`, 
        gap: isMobile ? 16 : 24,
        marginTop: isMobile ? 16 : 24
      }}>
        {/* Distribución por género */}
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: isMobile ? 15 : 16, marginBottom: 16, color: COLORS.textDark }}>Distribución por género</h3>
          <PieChart data={genderData} />
        </div>
        
        {/* Tipo de consulta */}
        <div style={{ 
          background: 'white', 
          borderRadius: 12, 
          padding: isMobile ? 12 : 16, 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: isMobile ? 15 : 16, marginBottom: 16, color: COLORS.textDark }}>Tipo de consulta</h3>
          <PieChart data={consultationTypeData} />
        </div>
      </div>
      
      {/* Tendencias */}
      <div style={{ 
        background: 'white', 
        borderRadius: 12, 
        padding: isMobile ? 12 : 16, 
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        marginTop: isMobile ? 16 : 24
      }}>
        <BarChart data={consultationTrends} title="Tendencia de consultas" color={COLORS.accentGreen} />
      </div>
      
      {/* Recursos más accedidos */}
      <div style={{ 
        background: 'white', 
        borderRadius: 12, 
        padding: isMobile ? 12 : 16, 
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        marginTop: isMobile ? 16 : 24
      }}>
        <BarChart data={resourceAccessData} title="Recursos más accedidos" color={COLORS.accentOrange} />
      </div>
      
      {/* Botón de exportar */}
      <div style={{ 
        marginTop: isMobile ? 16 : 24, 
        textAlign: 'center' 
      }}>
        <button
          style={{
            background: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 20,
            padding: isMobile ? '8px 16px' : '10px 20px',
            fontSize: isMobile ? 13 : 14,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            width: isMobile ? '100%' : 'auto',
            justifyContent: 'center'
          }}
        >
          <span>📥</span> Exportar informe
        </button>
      </div>
      
      {/* Navegación inferior */}
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: isMobile ? '0.5rem 0' : '0.6rem 0',
        zIndex: 40,
      }}>
        {[
          { id: 'dashboard', label: 'Inicio', icon: '🏠' },
          { id: 'chat', label: 'Chat', icon: '💬' },
          { id: 'appointments', label: 'Citas', icon: '📅' },
          { id: 'resources', label: 'Recursos', icon: '📚' }
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{ 
              textAlign: 'center', 
              cursor: 'pointer', 
              padding: '4px 8px', 
              position: 'relative' 
            }}
          >
            <div style={{ 
              fontSize: isMobile ? '1.4rem' : '1.6rem',
              color: COLORS.textMedium
            }}>
              {item.icon}
            </div>
            <span style={{
              fontSize: isMobile ? 11 : 12,
              color: COLORS.textMedium,
              fontWeight: 400,
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalStatistics;