// ThemeProvider.jsx
import React, { createContext, useContext } from 'react';

// Tema unificado para toda la aplicación HealthBuddy
export const THEME = {
  // Colores principales
  colors: {
    primary: '#00B7D8',        // Color principal turquesa HealthBuddy
    primaryDark: '#0095AF',    // Versión oscura para hover
    secondary: '#5ECCC3',      // Color secundario (para componentes estudiante)
    secondaryDark: '#4DBBB2',  // Versión oscura para hover
    professional: '#1E5F8C',   // Color para componentes profesionales
    professionalDark: '#174B70', // Versión oscura para hover
    
    // Fondos
    cardBg: '#FFFFFF',         // Fondo de tarjeta
    lightBg: '#F5FBFD',        // Fondo claro para contenedores
    pageBg: '#F5F5F5',         // Fondo de página
    
    // Texto
    textDark: '#002D3A',       // Texto principal
    textMedium: '#4A6572',     // Texto secundario
    textLight: '#6E8CA0',      // Texto terciario
    
    // Estados
    success: '#388E3C',        // Éxito
    warning: '#F57C00',        // Advertencia
    error: '#D32F2F',          // Error
    info: '#1976D2',           // Información
  },
  
  // Espaciado
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
  },
  
  // Bordes
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    round: '50%',
  },
  
  // Tipografía
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    
    // Tamaños
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.25rem',   // 20px
      xl: '1.5rem',    // 24px
    },
    
    // Pesos
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  // Sombras
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.05)',
    md: '0 4px 8px rgba(0,0,0,0.08)',
    lg: '0 8px 16px rgba(0,0,0,0.1)',
  },
  
  // Transiciones
  transitions: {
    default: 'all 0.2s ease',
    fast: 'all 0.1s ease',
    slow: 'all 0.3s ease',
  },
  
  // Tamaños para media queries
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
};

// Crear el contexto del tema
const ThemeContext = createContext(THEME);

// Hook personalizado para acceder al tema
export const useTheme = () => useContext(ThemeContext);

// Componente proveedor del tema
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={THEME}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;