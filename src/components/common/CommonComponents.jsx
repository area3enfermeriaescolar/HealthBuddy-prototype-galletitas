// CommonComponents.jsx
import React from 'react';
import { useTheme } from '../ThemeProvider';

/**
 * DemoBadge - Etiqueta unificada para mostrar que la aplicación está en modo demo
 */
export const DemoBadge = () => {
  const theme = useTheme();
  
  return (
    <div style={{
      position: 'fixed',
      top: 10,
      right: 10,
      background: theme.colors.primary,
      color: 'white',
      padding: '4px 12px',
      borderRadius: 20,
      fontSize: theme.typography.fontSize.xs,
      fontWeight: theme.typography.fontWeight.semibold,
      letterSpacing: 0.5,
      zIndex: 1000,
    }}>
      DEMO
    </div>
  );
};

/**
 * NavBar - Barra de navegación inferior unificada para todas las vistas
 * @param {string} active - ID del ítem activo
 * @param {function} onNavigate - Función para manejar la navegación
 * @param {string} userType - Tipo de usuario ('student' o 'professional')
 */
export const NavBar = ({ active, onNavigate, userType = 'student' }) => {
  const theme = useTheme();
  
  // Elementos de navegación según el tipo de usuario
  const navItems = userType === 'student' ? [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'appointments', label: 'Citas', icon: '📅' },
    { id: 'resources', label: 'Recursos', icon: '📚' },
  ] : [
    { id: 'dashboard', label: 'Inicio', icon: '🏠' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'appointments', label: 'Citas', icon: '📅' },
    { id: 'resources', label: 'Recursos', icon: '📚' }
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
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => onNavigate && onNavigate(item.id)}
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
            color: item.id === active ? theme.colors.primary : theme.colors.textMedium,
          }}>
            {item.icon}
          </div>
          <span style={{
            fontSize: theme.typography.fontSize.xs,
            color: item.id === active ? theme.colors.primary : theme.colors.textMedium,
            fontWeight: item.id === active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.regular,
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

/**
 * Card - Componente de tarjeta reutilizable con estilos consistentes
 */
export const Card = ({ children, style, border, highlight }) => {
  const theme = useTheme();
  
  return (
    <div
      style={{
        backgroundColor: theme.colors.cardBg,
        borderRadius: theme.borderRadius.lg,
        boxShadow: theme.shadows.sm,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.lg,
        ...(border && { border: `3px solid ${highlight || theme.colors.primary}` }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Button - Botón reutilizable con estilos consistentes
 */
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  style,
  disabled = false,
  icon = null,
}) => {
  const theme = useTheme();
  
  // Variantes de estilo
  const variants = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: theme.colors.primaryDark,
      },
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: theme.colors.secondaryDark,
      },
    },
    professional: {
      backgroundColor: theme.colors.professional, 
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: theme.colors.professionalDark,
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`,
      '&:hover': {
        backgroundColor: 'rgba(0,183,216,0.05)',
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: 'none',
      '&:hover': {
        backgroundColor: 'rgba(0,183,216,0.05)',
      },
    },
  };
  
  // Tamaños
  const sizes = {
    small: {
      padding: '0.5rem 1rem',
      fontSize: theme.typography.fontSize.sm,
    },
    medium: {
      padding: '0.8rem 1.5rem',
      fontSize: theme.typography.fontSize.md,
    },
    large: {
      padding: '1rem 2rem',
      fontSize: theme.typography.fontSize.lg,
    },
  };
  
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.medium;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        borderRadius: 50,
        fontWeight: theme.typography.fontWeight.semibold,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: theme.transitions.default,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.6 : 1,
        ...variantStyle,
        ...sizeStyle,
        ...style,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

/**
 * Badge - Etiqueta para mostrar estados
 */
export const Badge = ({ children, type = 'default', size = 'medium' }) => {
  const theme = useTheme();
  
  const types = {
    default: { bg: theme.colors.lightBg, color: theme.colors.textMedium },
    success: { bg: '#E8F5E9', color: theme.colors.success },
    warning: { bg: '#FFF8E1', color: theme.colors.warning },
    error: { bg: '#FFEBEE', color: theme.colors.error },
    info: { bg: '#E3F2FD', color: theme.colors.info },
    primary: { bg: 'rgba(0,183,216,0.1)', color: theme.colors.primary },
  };
  
  const sizes = {
    small: { padding: '2px 8px', fontSize: theme.typography.fontSize.xs },
    medium: { padding: '4px 12px', fontSize: theme.typography.fontSize.sm },
    large: { padding: '6px 16px', fontSize: theme.typography.fontSize.md },
  };
  
  const typeStyle = types[type] || types.default;
  const sizeStyle = sizes[size] || sizes.medium;
  
  return (
    <span style={{
      borderRadius: 20,
      fontWeight: theme.typography.fontWeight.semibold,
      display: 'inline-block',
      ...typeStyle,
      ...sizeStyle,
    }}>
      {children}
    </span>
  );
};

/**
 * Alert - Componente para mensajes importantes
 */
export const Alert = ({ children, type = 'info', icon = true }) => {
  const theme = useTheme();
  
  const types = {
    info: { bg: '#E3F2FD', color: theme.colors.info, icon: 'ℹ️' },
    success: { bg: '#E8F5E9', color: theme.colors.success, icon: '✅' },
    warning: { bg: '#FFF8E1', color: theme.colors.warning, icon: '⚠️' },
    error: { bg: '#FFEBEE', color: theme.colors.error, icon: '❌' },
  };
  
  const typeStyle = types[type] || types.info;
  
  return (
    <div style={{
      backgroundColor: typeStyle.bg,
      color: typeStyle.color,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
      display: 'flex',
      alignItems: 'flex-start',
      gap: theme.spacing.sm,
      borderLeft: `4px solid ${typeStyle.color}`,
    }}>
      {icon && <span style={{ fontSize: '1.2rem' }}>{typeStyle.icon}</span>}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

/**
 * BackButton - Botón de retroceso unificado
 */
export const BackButton = ({ onClick, label = 'Volver', showIcon = true }) => {
  const theme = useTheme();
  
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        color: theme.colors.primary,
        fontSize: theme.typography.fontSize.md,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {showIcon && <span style={{ fontSize: '1.25rem' }}>←</span>}
      {label}
    </button>
  );
};

/**
 * Heading - Encabezado con estilo unificado para títulos de pantalla
 */
export const Heading = ({ children, level = 1, centered = false, style }) => {
  const theme = useTheme();
  
  const fontSize = {
    1: theme.typography.fontSize.xl,
    2: theme.typography.fontSize.lg,
    3: theme.typography.fontSize.md,
    4: theme.typography.fontSize.sm,
  }[level] || theme.typography.fontSize.xl;
  
  return (
    <div style={{
      marginBottom: theme.spacing.lg,
      textAlign: centered ? 'center' : 'left',
      ...style,
    }}>
      <h1 style={{ 
        fontSize,
        color: theme.colors.textDark,
        margin: 0,
        fontWeight: theme.typography.fontWeight.semibold,
      }}>
        {children}
      </h1>
    </div>
  );
};

/**
 * Input - Campo de entrada unificado
 */
export const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
  error,
  fullWidth = true,
  required = false,
}) => {
  const theme = useTheme();
  
  return (
    <div style={{ marginBottom: theme.spacing.md, width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: theme.spacing.xs,
          fontSize: theme.typography.fontSize.sm,
          fontWeight: theme.typography.fontWeight.medium,
          color: theme.colors.textDark,
        }}>
          {label} {required && <span style={{ color: theme.colors.error }}>*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius.md,
          border: `1px solid ${error ? theme.colors.error : theme.colors.lightBg}`,
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.textDark,
          outline: 'none',
          transition: theme.transitions.default,
          '&:focus': {
            borderColor: theme.colors.primary,
            boxShadow: `0 0 0 2px rgba(0,183,216,0.2)`,
          },
        }}
      />
      {error && (
        <p style={{ 
          color: theme.colors.error, 
          margin: `${theme.spacing.xs} 0 0 0`, 
          fontSize: theme.typography.fontSize.xs,
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Select - Selector unificado
 */
export const Select = ({
  value,
  onChange,
  options,
  placeholder = 'Seleccionar',
  label,
  error,
  fullWidth = true,
  required = false,
}) => {
  const theme = useTheme();
  
  return (
    <div style={{ marginBottom: theme.spacing.md, width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: theme.spacing.xs,
          fontSize: theme.typography.fontSize.sm,
          fontWeight: theme.typography.fontWeight.medium,
          color: theme.colors.textDark,
        }}>
          {label} {required && <span style={{ color: theme.colors.error }}>*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius.md,
          border: `1px solid ${error ? theme.colors.error : theme.colors.lightBg}`,
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.textDark,
          appearance: 'none',
          backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
          backgroundColor: 'white',
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p style={{ 
          color: theme.colors.error, 
          margin: `${theme.spacing.xs} 0 0 0`, 
          fontSize: theme.typography.fontSize.xs,
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Loader - Componente de carga unificado
 */
export const Loader = ({ size = 'medium', color = 'primary', fullscreen = false }) => {
  const theme = useTheme();
  
  const colors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    professional: theme.colors.professional,
    dark: theme.colors.textDark,
    light: 'white',
  };
  
  const sizes = {
    small: 20,
    medium: 30,
    large: 40,
  };
  
  const loaderSize = sizes[size] || sizes.medium;
  const loaderColor = colors[color] || colors.primary;
  
  const loaderStyle = {
    border: `3px solid rgba(0, 0, 0, 0.1)`,
    borderTop: `3px solid ${loaderColor}`,
    borderRadius: '50%',
    width: `${loaderSize}px`,
    height: `${loaderSize}px`,
    animation: 'spin 1s linear infinite',
  };
  
  // Añadir keyframes para la animación
  if (typeof document !== 'undefined' && !document.getElementById('loader-keyframes')) {
    const style = document.createElement('style');
    style.id = 'loader-keyframes';
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
  
  if (fullscreen) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1000,
      }}>
        <div style={loaderStyle}></div>
      </div>
    );
  }
  
  return <div style={loaderStyle}></div>;
};

/**
 * Container - Contenedor de página con espaciado unificado
 */
export const Container = ({ children, style }) => {
  const theme = useTheme();
  
  return (
    <div style={{
      padding: theme.spacing.md,
      paddingBottom: 80, // Espacio para la barra de navegación
      maxWidth: '600px',
      margin: '0 auto',
      ...style,
    }}>
      {children}
    </div>
  );
};

export default {
  DemoBadge,
  NavBar,
  Card,
  Button,
  Badge,
  Alert,
  BackButton,
  Heading,
  Input,
  Select,
  Loader,
  Container
};