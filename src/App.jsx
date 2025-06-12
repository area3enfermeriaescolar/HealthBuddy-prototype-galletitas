import React, { useState, lazy, Suspense, useEffect } from 'react';
// Corregir ruta a ThemeProvider
import { ThemeProvider } from './components/ThemeProvider';
// Corregir ruta a CommonComponents
import { Container, Loader } from './components/common/CommonComponents';
import './loginForms.css';
import './globalStyles.css';
// Importaciones de Firebase
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { logoutUser } from './services/authService';

// Importamos el componente SplashScreen
import SplashScreen from './components/SplashScreen';

// Importaciones dinámicas para componentes de estudiante
const StudentHome = lazy(() => import('./components/student/StudentHome'));
const StudentChat = lazy(() => import('./components/student/StudentChat'));
const StudentAppointmentBooking = lazy(() => import('./components/student/StudentAppointmentBooking'));
const StudentNotifications = lazy(() => import('./components/student/StudentNotifications'));
const StudentResources = lazy(() => import('./components/student/StudentResources'));

// Importaciones dinámicas para componentes de profesional
const ProfessionalDashboard = lazy(() => import('./components/professional/ProfessionalDashboard'));
const ProfessionalAvailabilityManagement = lazy(() => import('./components/professional/ProfessionalAvailabilityManagement'));
const ProfessionalAppointments = lazy(() => import('./components/professional/ProfessionalAppointments'));
const ConsultationForm = lazy(() => import('./components/professional/ConsultationForm'));
const ProfessionalChat = lazy(() => import('./components/professional/ProfessionalChat'));
const MyCentersView = lazy(() => import('./components/professional/MyCentersView'));
const ProfessionalStatistics = lazy(() => import('./components/professional/ProfessionalStatistics'));
const ProfessionalInterconsultation = lazy(() => import('./components/professional/ProfessionalInterconsultation'));
const ProfessionalResources = lazy(() => import('./components/professional/ProfessionalResources'));

// Componentes de Login actualizados para usar el tema unificado
import { StudentLogin, ProfessionalLogin } from './LoginForms';

/**
 * Componente interno de la aplicación que utiliza el contexto de autenticación
 */
function AppContent() {
  const { user, loading: authLoading, userData } = useAuth();
  
  // Estado para controlar la visibilidad de la splash screen
  const [showSplash, setShowSplash] = useState(true);
  const [selectedAccess, setSelectedAccess] = useState(null);
  const [demoMode, setDemoMode] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeProfessionalScreen, setActiveProfessionalScreen] = useState('dashboard');

  // Efecto para manejar el estado de autenticación
  useEffect(() => {
    if (user && userData && !demoMode) {
      // Usuario autenticado: determinar tipo de acceso basado en userData
      const userType = userData.userType || 'student';
      setSelectedAccess(userType);
    } else if (!user && !demoMode) {
      // Usuario no autenticado: resetear estado
      setSelectedAccess(null);
      setActiveScreen('home');
      setActiveProfessionalScreen('dashboard');
    }
  }, [user, userData, demoMode]);

  // Función para cerrar la pantalla de splash
  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  // Funciones de navegación mejoradas
  const handleBack = () => {
    if (user && !demoMode) {
      // Si hay usuario autenticado, cerrar sesión
      handleLogout();
    } else if (demoMode || selectedAccess) {
      // Si está en modo demo o ha seleccionado acceso, volver al inicio
      setDemoMode(false);
      setSelectedAccess(null);
      setActiveScreen('home');
      setActiveProfessionalScreen('dashboard');
    }
  };

  const handleLogin = (userData) => {
    console.log('Usuario logueado:', userData);
    // El useEffect se encargará de actualizar selectedAccess cuando user cambie
    // No necesitamos hacer nada más aquí ya que Firebase maneja el estado
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setDemoMode(false);
      setSelectedAccess(null);
      setActiveScreen('home');
      setActiveProfessionalScreen('dashboard');
      console.log('Sesión cerrada exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // En caso de error, forzar el reset del estado local
      setDemoMode(false);
      setSelectedAccess(null);
      setActiveScreen('home');
      setActiveProfessionalScreen('dashboard');
    }
  };

  const handleDemoAccess = (userType) => {
    setSelectedAccess(userType);
    setDemoMode(true);
    setActiveScreen('home');
    setActiveProfessionalScreen('dashboard');
  };

  const handleAccessSelection = (userType) => {
    setSelectedAccess(userType);
    setDemoMode(false);
  };

  // Determinar si el usuario está "logueado" (autenticado o en modo demo)
  const isLoggedIn = (user && userData && !demoMode) || demoMode;

  // Renderizar pantallas de estudiante con Suspense para carga lazy
  const renderStudentScreen = () => {
    const commonProps = {
      onNavigate: setActiveScreen,
      user: demoMode ? { userType: 'student', alias: 'Demo Student' } : userData,
      demoMode: demoMode
    };

    return (
      <Suspense fallback={
        <Container style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          <Loader size="large" />
        </Container>
      }>
        {activeScreen === 'home' && <StudentHome {...commonProps} />}
        {activeScreen === 'chat' && <StudentChat {...commonProps} />}
        {activeScreen === 'appointments' && <StudentAppointmentBooking {...commonProps} />}
        {activeScreen === 'notifications' && <StudentNotifications {...commonProps} />}
        {activeScreen === 'resources' && <StudentResources {...commonProps} />}
      </Suspense>
    );
  };

  // Renderizar pantallas de profesional con Suspense para carga lazy
  const renderProfessionalScreen = () => {
    const commonProps = {
      onNavigate: setActiveProfessionalScreen,
      user: demoMode ? { userType: 'professional', nombre: 'Demo', apellidos: 'Professional' } : userData,
      demoMode: demoMode
    };

    return (
      <Suspense fallback={
        <Container style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          <Loader size="large" />
        </Container>
      }>
        {activeProfessionalScreen === 'dashboard' && <ProfessionalDashboard {...commonProps} />}
        {activeProfessionalScreen === 'availability' && <ProfessionalAvailabilityManagement {...commonProps} />}
        {activeProfessionalScreen === 'appointments' && <ProfessionalAppointments {...commonProps} />}
        {activeProfessionalScreen === 'consultation-form' && <ConsultationForm {...commonProps} />}
        {activeProfessionalScreen === 'centers' && <MyCentersView {...commonProps} />}
        {activeProfessionalScreen === 'chat' && <ProfessionalChat {...commonProps} />}
        {activeProfessionalScreen === 'statistics' && <ProfessionalStatistics {...commonProps} />}
        {activeProfessionalScreen === 'interconsultation' && <ProfessionalInterconsultation {...commonProps} />}
        {activeProfessionalScreen === 'resources' && <ProfessionalResources {...commonProps} />}
      </Suspense>
    );
  };

  // Mostrar loader mientras se inicializa la autenticación
  if (authLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <Loader size="large" />
        <p style={{ marginLeft: '1rem', color: '#666' }}>Cargando HealthBuddy...</p>
      </div>
    );
  }

  // Mostrar SplashScreen si showSplash es true
  if (showSplash) {
    return <SplashScreen onContinue={handleCloseSplash} />;
  }

  return (
    <div className="app-container">
      {/* Pantalla de selección inicial */}
      {selectedAccess === null ? (
        <div className="login-container">
          <img src="/logo.png" alt="HealthBuddy Logo" className="logo" />
          <h1 className="app-title">HealthBuddy</h1>
          <h2 className="app-subtitle">Aplicación de la Consulta Joven del SMS</h2>
          
          <div className="access-options">
            <button 
              className="access-button" 
              onClick={() => handleAccessSelection('student')}
            >
              <span className="access-icon">👨‍🎓</span> Acceso Estudiante
            </button>
            <button 
              className="access-button professional" 
              onClick={() => handleAccessSelection('professional')}
            >
              <span className="access-icon">👨‍⚕️</span> Acceso Profesional Sanitario
            </button>
          </div>
          
          <div className="demo-access">
            <h3>Modo Demostración</h3>
            <div className="demo-buttons">
              <button 
                className="demo-button student" 
                onClick={() => handleDemoAccess('student')}
              >
                <span className="demo-icon">🚀</span> Demo Estudiante
              </button>
              <button 
                className="demo-button professional" 
                onClick={() => handleDemoAccess('professional')}
              >
                <span className="demo-icon">🚀</span> Demo Profesional
              </button>
            </div>
          </div>
          
          <div className="footer">
            <p>Servicio de comunicación segura entre estudiantes y enfermería escolar</p>
            <div className="institutional-logos">
              <span>Servicio Murciano de Salud</span>
              <span>Región de Murcia</span>
            </div>
          </div>
        </div>
      ) 
      /* Pantalla de login/registro */
      : !isLoggedIn ? (
        <div className="login-container">
          {/* Badge de demo si corresponde */}
          {demoMode && <div className="demo-badge">DEMO</div>}
          
          {selectedAccess === 'student' ? (
            <StudentLogin 
              onLogin={handleLogin} 
              onBack={handleBack}
              onSkipLogin={() => handleDemoAccess('student')}
            />
          ) : (
            <ProfessionalLogin 
              onLogin={handleLogin} 
              onBack={handleBack}
              onSkipLogin={() => handleDemoAccess('professional')}
            />
          )}
        </div>
      ) 
      /* Pantallas principales de la aplicación */
      : (
        <div className="main-app">
          {/* Badge de demo si está activo */}
          {demoMode && <div className="demo-badge">DEMO</div>}
          
          {/* Header con información del usuario y logout */}
          <div className="app-header">
            <div className="user-info">
              {demoMode ? (
                <span className="user-name">
                  {selectedAccess === 'student' ? 'Demo Student' : 'Demo Professional'}
                </span>
              ) : userData ? (
                <span className="user-name">
                  {userData.alias || `${userData.nombre} ${userData.apellidos}` || userData.email}
                </span>
              ) : null}
            </div>
            
            <button 
              className="logout-button" 
              onClick={demoMode ? handleBack : handleLogout}
              title={demoMode ? "Salir del modo demo" : "Cerrar sesión"}
            >
              {demoMode ? "Salir Demo" : "Cerrar Sesión"}
            </button>
          </div>
          
          {/* Contenido principal */}
          <div className="app-content">
            {selectedAccess === 'student' ? renderStudentScreen() : renderProfessionalScreen()}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Componente principal de la aplicación con sistema de diseño unificado
 */
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;