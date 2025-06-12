import React, { useState, useEffect } from 'react';
import { NavBar, DemoBadge, Container } from '../common/CommonComponents';
import './ProfessionalResources.css'; // Importamos el CSS externo

const ProfessionalResources = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('clinical');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Detectar cambios en el ancho de la ventana para diseño responsive
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Banderas para diseño responsive
  const isMobile = windowWidth < 768;
  const isSmallMobile = windowWidth < 480;

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Categorías de recursos
  const categories = [
    { id: 'clinical', label: 'Recursos clínicos', icon: '📄' },
    { id: 'administrative', label: 'Administrativo', icon: '📋' },
    { id: 'educational', label: 'Materiales educativos', icon: '📚' },
    { id: 'legal', label: 'Marco legal', icon: '⚖️' },
  ];

  // Recursos profesionales de ejemplo
  const resources = {
    clinical: [
      { id: 1, title: 'Guía de evaluación de salud mental en adolescentes', type: 'PDF', size: '1.2 MB' },
      { id: 2, title: 'Protocolo de actuación para casos de conductas adictivas', type: 'PDF', size: '980 KB' },
      { id: 3, title: 'Infografías sobre alimentación y nutrición', type: 'ZIP', size: '5.8 MB' },
    ],
    administrative: [
      { id: 4, title: 'Plantilla de informe de derivación', type: 'DOCX', size: '420 KB' },
      { id: 5, title: 'Registro de actividades de enfermería escolar', type: 'XLS', size: '540 KB' },
      { id: 6, title: 'Formulario de consentimiento informado', type: 'PDF', size: '320 KB' },
    ],
    educational: [
      { id: 7, title: 'Presentación: Educación afectivo-sexual', type: 'PPTX', size: '4.2 MB' },
      { id: 8, title: 'Vídeos sobre higiene y salud', type: 'ZIP', size: '15.6 MB' },
      { id: 9, title: 'Material para talleres de prevención', type: 'ZIP', size: '8.9 MB' },
    ],
    legal: [
      { id: 10, title: 'Normativa de protección de datos en el ámbito sanitario', type: 'PDF', size: '1.5 MB' },
      { id: 11, title: 'Protocolo de confidencialidad en consulta joven', type: 'PDF', size: '780 KB' },
      { id: 12, title: 'Marco legal de la enfermería escolar', type: 'PDF', size: '2.3 MB' },
    ]
  };

  // Filtrar recursos según término de búsqueda
  const filteredResources = resources[activeCategory]?.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Función para obtener icono según tipo de archivo
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'PDF': return '📄';
      case 'DOCX': return '📝';
      case 'XLS': return '📊';
      case 'PPTX': return '📊';
      case 'ZIP': return '📦';
      default: return '📄';
    }
  };

  return (
    <Container style={{
      padding: isSmallMobile ? '0.5rem' : isMobile ? '0.75rem' : '1rem',
      maxWidth: '100%',
    }}>
      <DemoBadge />
      
      {/* Título y botón de retorno */}
      <div className="pr-header" style={{ marginBottom: isSmallMobile ? '0.75rem' : '1rem' }}>
        <button 
          className="pr-back-button" 
          onClick={() => onNavigate('dashboard')}
          style={{ fontSize: isSmallMobile ? '14px' : '16px' }}
        >
          ← Volver
        </button>
        <h2 className="pr-title" style={{ fontSize: isSmallMobile ? '18px' : '20px' }}>
          Recursos profesionales
        </h2>
      </div>
      
      {/* Buscador */}
      <div className="pr-search-container" style={{ marginBottom: isSmallMobile ? '0.75rem' : '1rem' }}>
        <input
          className="pr-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar recursos..."
          style={{ padding: isSmallMobile ? '8px 16px 8px 36px' : '10px 16px 10px 40px' }}
        />
        <span className="pr-search-icon">🔍</span>
        {searchTerm && (
          <button
            className="pr-clear-button"
            onClick={() => setSearchTerm('')}
          >
            ✕
          </button>
        )}
      </div>
      
      {/* Pestañas de categorías */}
      <div 
        className="pr-tabs-container" 
        style={{ marginBottom: isSmallMobile ? '0.75rem' : '1rem' }}
      >
        {categories.map(option => (
          <button
            key={option.id}
            className={`pr-tab-button ${activeCategory === option.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(option.id)}
            style={{ 
              padding: isSmallMobile ? '8px 12px' : '12px 16px',
              fontSize: isSmallMobile ? '12px' : '14px'
            }}
          >
            {isSmallMobile ? (
              <span style={{ fontSize: '16px' }}>{option.icon}</span>
            ) : (
              option.label
            )}
          </button>
        ))}
      </div>
      
      {/* Estado de carga */}
      {loading ? (
        <div className="pr-loading">
          <div className="pr-spinner"></div>
          <p>Cargando recursos...</p>
        </div>
      ) : (
        <>
          {/* Lista de recursos */}
          {filteredResources.length > 0 ? (
            <div 
              className="pr-resources-grid"
              style={{ 
                gridTemplateColumns: isSmallMobile 
                  ? '1fr' 
                  : isMobile 
                    ? 'repeat(2, 1fr)' 
                    : 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: isSmallMobile ? '8px' : isMobile ? '12px' : '16px' 
              }}
            >
              {filteredResources.map(resource => (
                <div 
                  key={resource.id} 
                  className="pr-resource-card"
                  style={{ padding: isSmallMobile ? '12px' : '16px' }}
                >
                  <h3 
                    className="pr-resource-title"
                    style={{ fontSize: isSmallMobile ? '14px' : '16px' }}
                  >
                    {resource.title}
                  </h3>
                  <p 
                    className="pr-resource-subtitle"
                    style={{ fontSize: isSmallMobile ? '12px' : '14px' }}
                  >
                    {`${resource.type} • ${resource.size}`}
                  </p>
                  <div 
                    className="pr-resource-footer"
                    style={{ 
                      flexDirection: isSmallMobile ? 'column' : 'row',
                      alignItems: isSmallMobile ? 'flex-start' : 'center',
                      gap: isSmallMobile ? '8px' : '0'
                    }}
                  >
                    <div 
                      className="pr-resource-type"
                      style={{ fontSize: isSmallMobile ? '12px' : '14px' }}
                    >
                      <span className="pr-file-icon">{getFileIcon(resource.type)}</span>
                      {resource.type}
                    </div>
                    <button 
                      className="pr-download-button"
                      style={{ 
                        width: isSmallMobile ? '100%' : 'auto',
                        padding: isSmallMobile ? '8px 0' : '6px 12px',
                        textAlign: 'center'
                      }}
                    >
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="pr-empty-state">
              <div className="pr-empty-icon">🔍</div>
              <p>No se encontraron recursos para "{searchTerm}"</p>
              <button 
                className="pr-primary-button"
                onClick={() => setSearchTerm('')}
              >
                Ver todos los recursos
              </button>
            </div>
          )}
          
          {/* Panel para compartir recursos */}
          <div 
            className="pr-upload-card"
            style={{ marginTop: isSmallMobile ? '16px' : '24px', padding: isSmallMobile ? '12px' : '16px' }}
          >
            <h3 
              className="pr-upload-title"
              style={{ fontSize: isSmallMobile ? '14px' : '16px' }}
            >
              ¿Quieres compartir recursos?
            </h3>
            <p 
              className="pr-upload-text"
              style={{ fontSize: isSmallMobile ? '12px' : '14px', marginBottom: isSmallMobile ? '12px' : '16px' }}
            >
              Puedes subir nuevos materiales para compartir con otros profesionales sanitarios.
            </p>
            <button className="pr-primary-button pr-full-width">
              ⬆️ Subir nuevo recurso
            </button>
          </div>
        </>
      )}
      
      {/* Barra de navegación */}
      <NavBar 
        active="resources" 
        onNavigate={onNavigate} 
        userType="professional" 
      />
    </Container>
  );
};

export default ProfessionalResources;