import React, { useEffect, useState } from 'react';
import './splashscreen.css';

const SplashScreen = ({ onContinue }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    // Activar la animación después de un breve retraso
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      {/* Eliminamos la etiqueta DEMO de aquí */}
      
      <div className="splash-content" style={{
        opacity: animation ? 1 : 0,
        transform: animation ? 'translateY(0)' : 'translateY(20px)'
      }}>
        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/logo.png" 
            alt="HealthBuddy Logo" 
            className="logo-image"
          />
        </div>

        {/* App Title */}
        <h1 className="app-title">
          HealthBuddy
        </h1>

        {/* App Description */}
        <p className="app-description">
          Programa de Consulta Joven del Servicio Murciano de Salud
        </p>

        {/* Continue Button */}
        <button 
          onClick={onContinue}
          className="continue-button"
        >
          Continuar
        </button>
      </div>

      {/* Institutional Logo/Text at bottom */}
      <div className="institutional-footer" style={{
        opacity: animation ? 0.7 : 0
      }}>
        <div className="institutional-logos">
          <span className="institutional-text">Servicio Murciano de Salud</span>
          <span className="institutional-text">Región de Murcia</span>
        </div>
        <p className="copyright-text">
          © 2025 - Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;