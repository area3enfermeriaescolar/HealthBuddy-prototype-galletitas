import React, { useState, useEffect } from 'react';
import './StudentInterface.css';

/******************** PALETA ************************/
const COLORS = {
  primary: '#00B7D8',
  primaryDark: '#0095AF',
  cardBg: '#FFFFFF',
  lightBg: '#F5FBFD',
  textDark: '#002D3A',
  textMedium: '#4A6572',
};

/******************* DEMO BADGE *********************/
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

/******************* NAVBAR *************************/
function NavBar({ active = 'resources', onNavigate }) {
  const items = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'appointments', label: 'Citas', icon: '📅' },
    { id: 'resources', label: 'Recursos', icon: '📚' },
  ];
  return (
    <div
      className="bottom-navigation"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0.6rem 0',
        zIndex: 20,
      }}
    >
      {items.map((it) => (
        <div
          key={it.id}
          className={`nav-item ${it.id === active ? 'active' : ''}`}
          style={{ textAlign: 'center', cursor: 'pointer' }}
          onClick={() => onNavigate && onNavigate(it.id)}
        >
          <div style={{ fontSize: '1.6rem' }}>{it.icon}</div>
          <span style={{ fontSize: 12, color: it.id === active ? COLORS.primary : COLORS.textMedium }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

/******************* DATA MOCK **********************/
const categories = [
  { id: 'mental', icon: '🧠', label: 'Salud mental', color: '#e3f2fd' },
  { id: 'nutrition', icon: '🥗', label: 'Nutrición', color: '#e8f5e9' },
  { id: 'exercise', icon: '💪', label: 'Actividad física', color: '#fff3e0' },
  { id: 'sexual', icon: '❤️', label: 'Sexualidad', color: '#f3e5f5' },
  { id: 'addictions', icon: '🚭', label: 'Adicciones', color: '#e0f7fa' },
  { id: 'wellbeing', icon: '🧘', label: 'Bienestar', color: '#fffde7' },
];

// Datos de recursos ampliados para todas las categorías
const resourcesData = {
  mental: [
    { id: 1, title: 'Manejo del estrés en exámenes', type: 'Guía PDF', icon: '📄', description: 'Técnicas efectivas para reducir la ansiedad antes y durante los exámenes.' },
    { id: 2, title: 'Meditaciones guiadas para dormir mejor', type: 'Audio', icon: '🎧', description: 'Colección de audios de 5-15 minutos para mejorar la calidad del sueño.' },
    { id: 3, title: 'Ansiedad: cómo reconocerla y manejarla', type: 'Artículo', icon: '📝', description: 'Información sobre síntomas de ansiedad y estrategias para su manejo diario.' },
    { id: 4, title: 'Mindfulness para adolescentes', type: 'Vídeo', icon: '🎬', description: 'Tutorial de 10 minutos con ejercicios básicos de atención plena.' },
  ],
  nutrition: [
    { id: 5, title: 'Plan semanal de desayunos saludables', type: 'Artículo', icon: '📝', description: 'Ideas variadas y nutritivas para empezar el día con energía.' },
    { id: 6, title: 'Cómo leer etiquetas de alimentos', type: 'Vídeo', icon: '🎬', description: 'Guía práctica para entender la información nutricional de los productos.' },
    { id: 7, title: 'Mitos y realidades sobre las dietas', type: 'Infografía', icon: '📊', description: 'Análisis de las dietas más populares y su base científica.' },
    { id: 8, title: 'Nutrición para deportistas jóvenes', type: 'Guía PDF', icon: '📄', description: 'Recomendaciones específicas para optimizar el rendimiento deportivo.' },
  ],
  exercise: [
    { id: 9, title: 'Rutina de 15 min sin material', type: 'Vídeo', icon: '🎬', description: 'Ejercicios sencillos que puedes hacer en cualquier lugar.' },
    { id: 10, title: 'Estiramientos para después de estudiar', type: 'Infografía', icon: '📊', description: 'Secuencia de estiramientos para aliviar la tensión después de largas horas sentado.' },
    { id: 11, title: 'Beneficios del ejercicio para el cerebro', type: 'Artículo', icon: '📝', description: 'Cómo la actividad física mejora la concentración y el aprendizaje.' },
    { id: 12, title: 'Plan de entrenamiento de 4 semanas', type: 'Guía PDF', icon: '📄', description: 'Programa progresivo para mejorar tu condición física general.' },
  ],
  sexual: [
    { id: 13, title: 'Métodos anticonceptivos: guía completa', type: 'Guía PDF', icon: '📄', description: 'Información detallada sobre todos los métodos disponibles, ventajas y desventajas.' },
    { id: 14, title: 'Prevención de ETS', type: 'Infografía', icon: '📊', description: 'Información esencial sobre enfermedades de transmisión sexual y cómo prevenirlas.' },
    { id: 15, title: 'Consentimiento y relaciones saludables', type: 'Vídeo', icon: '🎬', description: 'Explicación sobre la importancia del consentimiento en las relaciones.' },
    { id: 16, title: 'Preguntas frecuentes sobre sexualidad', type: 'Artículo', icon: '📝', description: 'Respuestas a las dudas más comunes entre adolescentes.' },
  ],
  addictions: [
    { id: 17, title: 'Efectos del tabaco en el organismo', type: 'Infografía', icon: '📊', description: 'Consecuencias del tabaquismo a corto y largo plazo.' },
    { id: 18, title: 'Alcohol y cerebro adolescente', type: 'Artículo', icon: '📝', description: 'Cómo afecta el alcohol al desarrollo cerebral en la adolescencia.' },
    { id: 19, title: 'Uso responsable de redes sociales', type: 'Guía PDF', icon: '📄', description: 'Consejos para evitar la adicción a las pantallas y redes sociales.' },
    { id: 20, title: 'Mitos sobre las drogas', type: 'Vídeo', icon: '🎬', description: 'Información basada en evidencia sobre sustancias y sus efectos reales.' },
  ],
  wellbeing: [
    { id: 21, title: 'Técnicas de respiración para la calma', type: 'Audio', icon: '🎧', description: 'Ejercicios guiados de respiración para momentos de estrés.' },
    { id: 22, title: 'Hábitos para un mejor descanso', type: 'Artículo', icon: '📝', description: 'Consejos prácticos para mejorar la calidad del sueño.' },
    { id: 23, title: 'Gestión del tiempo para estudiantes', type: 'Guía PDF', icon: '📄', description: 'Métodos efectivos para organizar el estudio y el tiempo libre.' },
    { id: 24, title: 'Yoga básico para principiantes', type: 'Vídeo', icon: '🎬', description: 'Secuencia de 20 minutos ideal para iniciarse en el yoga.' },
  ],
};

// Componente para mostrar un recurso individual
const ResourceCard = ({ resource, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(resource)}
      style={{
        background: COLORS.cardBg,
        borderRadius: 12,
        padding: '1rem',
        marginBottom: 12,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ 
          fontSize: 24, 
          background: COLORS.lightBg, 
          borderRadius: 8, 
          width: 40, 
          height: 40, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {resource.icon}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontWeight: 600, color: COLORS.textDark }}>{resource.title}</p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: 4
          }}>
            <span style={{ fontSize: 12, color: COLORS.textMedium }}>{resource.type}</span>
            <span style={{ 
              color: COLORS.primary, 
              fontSize: 14, 
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}>
              Ver <span style={{ fontSize: 18 }}>→</span>
            </span>
          </div>
        </div>
      </div>
      {resource.description && (
        <p style={{ 
          margin: '8px 0 0 0', 
          fontSize: 13, 
          color: COLORS.textMedium,
          lineHeight: 1.4
        }}>
          {resource.description}
        </p>
      )}
    </div>
  );
};

// Componente para mostrar detalles de un recurso
const ResourceDetail = ({ resource, onBack }) => {
  return (
    <div style={{ 
      background: 'white', 
      borderRadius: 12, 
      padding: '1.5rem', 
      marginBottom: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <button
        onClick={onBack}
        style={{ 
          background: 'none', 
          border: 'none', 
          color: COLORS.primary, 
          fontSize: 15, 
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: 0,
          cursor: 'pointer'
        }}
      >
        <span style={{ fontSize: 20 }}>←</span> Volver
      </button>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12, 
        marginBottom: 16 
      }}>
        <div style={{ 
          fontSize: 32, 
          background: COLORS.lightBg, 
          borderRadius: 12, 
          width: 60, 
          height: 60, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {resource.icon}
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, color: COLORS.textDark }}>{resource.title}</h2>
          <span style={{ 
            background: COLORS.primary, 
            color: 'white', 
            borderRadius: 16, 
            padding: '2px 10px', 
            fontSize: 12,
            display: 'inline-block',
            marginTop: 6
          }}>
            {resource.type}
          </span>
        </div>
      </div>
      
      <p style={{ 
        margin: '0 0 20px 0', 
        fontSize: 15, 
        color: COLORS.textMedium,
        lineHeight: 1.5
      }}>
        {resource.description}
      </p>
      
      {/* Contenido simulado según el tipo de recurso */}
      {resource.type === 'Guía PDF' && (
        <div style={{ 
          background: '#f5f5f5', 
          borderRadius: 8, 
          padding: '1rem', 
          textAlign: 'center' 
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>📄</div>
          <p style={{ margin: 0, fontWeight: 500 }}>Guía en formato PDF</p>
          <button style={{
            background: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 20,
            padding: '8px 16px',
            marginTop: 12,
            cursor: 'pointer',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            margin: '12px auto 0'
          }}>
            <span>⬇️</span> Descargar PDF
          </button>
        </div>
      )}
      
      {resource.type === 'Vídeo' && (
        <div style={{ 
          background: '#f5f5f5', 
          borderRadius: 8, 
          padding: '1rem', 
          textAlign: 'center',
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0,
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>🎬</div>
            <p style={{ margin: 0, fontWeight: 500 }}>Vídeo demostrativo</p>
            <button style={{
              background: COLORS.primary,
              color: 'white',
              border: 'none',
              borderRadius: 20,
              padding: '8px 16px',
              marginTop: 16,
              cursor: 'pointer',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <span>▶️</span> Reproducir vídeo
            </button>
          </div>
        </div>
      )}
      
      {resource.type === 'Audio' && (
        <div style={{ 
          background: '#f5f5f5', 
          borderRadius: 8, 
          padding: '1rem', 
          textAlign: 'center' 
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🎧</div>
          <p style={{ margin: 0, fontWeight: 500 }}>Audio guiado</p>
          <div style={{ 
            background: 'white', 
            borderRadius: 20, 
            padding: '8px 16px', 
            margin: '12px auto',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            maxWidth: 250
          }}>
            <button style={{
              background: COLORS.primary,
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 18
            }}>
              ▶️
            </button>
            <div style={{ 
              flex: 1, 
              height: 4, 
              background: '#eee', 
              borderRadius: 2 
            }}>
              <div style={{ 
                width: '30%', 
                height: '100%', 
                background: COLORS.primary, 
                borderRadius: 2 
              }}></div>
            </div>
            <span style={{ fontSize: 12, color: COLORS.textMedium }}>5:23</span>
          </div>
        </div>
      )}
      
      {(resource.type === 'Artículo' || resource.type === 'Infografía') && (
        <div style={{ 
          background: '#f5f5f5', 
          borderRadius: 8, 
          padding: '1rem', 
          textAlign: 'center' 
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>
            {resource.type === 'Artículo' ? '📝' : '📊'}
          </div>
          <p style={{ margin: 0, fontWeight: 500 }}>{resource.type}</p>
          <button style={{
            background: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 20,
            padding: '8px 16px',
            marginTop: 12,
            cursor: 'pointer',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            margin: '12px auto 0'
          }}>
            <span>👁️</span> Leer completo
          </button>
        </div>
      )}
      
      <div style={{ 
        marginTop: 24, 
        padding: '12px 16px', 
        background: 'rgba(0,183,216,0.1)', 
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
        <span style={{ fontSize: 20 }}>💬</span>
        <p style={{ margin: 0, fontSize: 14, color: COLORS.textDark }}>
          ¿Tienes dudas sobre este tema? Puedes consultar con tu enfermera escolar a través del chat.
        </p>
      </div>
    </div>
  );
};

/******************* COMPONENT **********************/
export default function StudentResources({ onNavigate }) {
  const [selected, setSelected] = useState(null); // id categoría
  const [search, setSearch] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [popularResources, setPopularResources] = useState([]);

  // Cargar recursos populares (simulado)
  useEffect(() => {
    // Simulamos una carga de datos
    const popular = [
      resourcesData.sexual[0], // Métodos anticonceptivos
      resourcesData.mental[0], // Manejo del estrés
      resourcesData.addictions[3], // Mitos sobre drogas
      resourcesData.wellbeing[2], // Gestión del tiempo
    ];
    setPopularResources(popular);
    
    // Simulamos recursos vistos recientemente
    const recent = [
      resourcesData.sexual[2], // Consentimiento
      resourcesData.nutrition[0], // Desayunos saludables
    ];
    setRecentlyViewed(recent);
  }, []);

  // Filtrar recursos por búsqueda
  const getFilteredResources = () => {
    if (!search.trim()) return [];
    
    const searchLower = search.toLowerCase();
    const results = [];
    
    // Buscar en todas las categorías
    Object.values(resourcesData).forEach(categoryResources => {
      categoryResources.forEach(resource => {
        if (
          resource.title.toLowerCase().includes(searchLower) ||
          resource.description.toLowerCase().includes(searchLower) ||
          resource.type.toLowerCase().includes(searchLower)
        ) {
          results.push(resource);
        }
      });
    });
    
    return results;
  };

  // Manejar selección de recurso
  const handleSelectResource = (resource) => {
    setSelectedResource(resource);
    
    // Añadir a vistos recientemente si no está ya
    if (!recentlyViewed.some(r => r.id === resource.id)) {
      setRecentlyViewed(prev => [resource, ...prev].slice(0, 5));
    }
  };

  // Renderizar contenido principal
  const renderContent = () => {
    // Si hay un recurso seleccionado, mostrar sus detalles
    if (selectedResource) {
      return (
        <ResourceDetail 
          resource={selectedResource} 
          onBack={() => setSelectedResource(null)} 
        />
      );
    }
    
    // Si hay búsqueda, mostrar resultados
    if (search.trim()) {
      const results = getFilteredResources();
      
      return (
        <>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 16
          }}>
            <h2 style={{ margin: 0, fontSize: 18 }}>Resultados</h2>
            <span style={{ 
              background: COLORS.lightBg, 
              padding: '4px 10px', 
              borderRadius: 16, 
              fontSize: 14,
              color: COLORS.textMedium
            }}>
              {results.length} encontrados
            </span>
          </div>
          
          {results.length > 0 ? (
            results.map(resource => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                onSelect={handleSelectResource} 
              />
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
              <p>No se encontraron resultados para "{search}"</p>
              <button 
                onClick={() => setSearch('')}
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
                Mostrar todos
              </button>
            </div>
          )}
        </>
      );
    }
    
    // Si hay categoría seleccionada, mostrar sus recursos
    if (selected) {
      const categoryResources = resourcesData[selected] || [];
      const category = categories.find(c => c.id === selected);
      
      return (
        <>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 12, 
            marginBottom: 16 
          }}>
            <button
              onClick={() => setSelected(null)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: COLORS.primary, 
                fontSize: 16, 
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: 20 }}>←</span>
            </button>
            <h2 style={{ 
              margin: 0, 
              fontSize: 18, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <span style={{ fontSize: 24 }}>{category?.icon}</span>
              {category?.label}
            </h2>
          </div>
          
          {categoryResources.map(resource => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              onSelect={handleSelectResource} 
            />
          ))}
        </>
      );
    }
    
    // Vista principal: categorías, populares y recientes
    return (
      <>
        {/* Categorías */}
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Categorías</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 12,
          marginBottom: 24
        }}>
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelected(category.id)}
              style={{
                background: category.color,
                borderRadius: 12,
                padding: '1rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                ':hover': {
                  transform: 'scale(1.03)',
                }
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>{category.icon}</div>
              <span style={{ fontWeight: 500, color: COLORS.textDark }}>{category.label}</span>
            </div>
          ))}
        </div>
        
        {/* Recursos populares */}
        {popularResources.length > 0 && (
          <>
            <h2 style={{ fontSize: 18, marginBottom: 12 }}>Populares</h2>
            {popularResources.map(resource => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                onSelect={handleSelectResource} 
              />
            ))}
          </>
        )}
        
        {/* Vistos recientemente */}
        {recentlyViewed.length > 0 && (
          <>
            <h2 style={{ fontSize: 18, marginBottom: 12, marginTop: 24 }}>Vistos recientemente</h2>
            {recentlyViewed.map(resource => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                onSelect={handleSelectResource} 
              />
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <div style={{ padding: '1rem', paddingBottom: 80 }}>
      <DemoBadge />
      
      <h1 style={{ marginBottom: 16 }}>Recursos</h1>
      
      {/* Buscador */}
      <div style={{ position: 'relative', marginBottom: 24 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar recursos..."
          style={{
            width: '100%',
            padding: '0.7rem 1rem 0.7rem 2.5rem',
            border: `2px solid ${COLORS.primary}`,
            borderRadius: 20,
            fontSize: 15,
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
        {search && (
          <button 
            onClick={() => setSearch('')}
            style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: COLORS.textMedium,
              cursor: 'pointer',
              fontSize: 18
            }}
          >
            ✕
          </button>
        )}
      </div>
      
      {/* Contenido principal */}
      {renderContent()}
      
      {/* Navegación inferior */}
      <NavBar active="resources" onNavigate={onNavigate} />
    </div>
  );
}
