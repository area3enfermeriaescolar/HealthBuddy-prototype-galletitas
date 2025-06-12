import React, { useState, lazy, Suspense } from 'react';
// Corregir ruta a ThemeProvider
import { ThemeProvider } from './components/ThemeProvider';
// Corregir ruta a CommonComponents
import { Container, Loader } from './components/common/CommonComponents';
import './loginForms.css';
import './globalStyles.css';

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
 * Componente principal de la aplicación con sistema de diseño unificado
 */
function App() {
  // Estado para controlar la visibilidad de la splash screen
  const [showSplash, setShowSplash] = useState(true);
  const [selectedAccess, setSelectedAccess] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeProfessionalScreen, setActiveProfessionalScreen] = useState('dashboard');

  // Función para cerrar la pantalla de splash
  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  // Funciones de navegación
  const handleBack = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      setSelectedAccess(null);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleDemoAccess = (userType) => {
    setSelectedAccess(userType);
    setLoggedIn(true);
  };

  // Renderizar pantallas de estudiante con Suspense para carga lazy
  const renderStudentScreen = () => {
    return (
      <Suspense fallback={<Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Loader size="large" /></Container>}>
        {activeScreen === 'home' && <StudentHome onNavigate={setActiveScreen} />}
        {activeScreen === 'chat' && <StudentChat onNavigate={setActiveScreen} />}
        {activeScreen === 'appointments' && <StudentAppointmentBooking onNavigate={setActiveScreen} />}
        {activeScreen === 'notifications' && <StudentNotifications onNavigate={setActiveScreen} />}
        {activeScreen === 'resources' && <StudentResources onNavigate={setActiveScreen} />}
      </Suspense>
    );
  };

  // Renderizar pantallas de profesional con Suspense para carga lazy
  const renderProfessionalScreen = () => {
    return (
      <Suspense fallback={<Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Loader size="large" /></Container>}>
        {activeProfessionalScreen === 'dashboard' && <ProfessionalDashboard onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'availability' && <ProfessionalAvailabilityManagement onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'appointments' && <ProfessionalAppointments onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'consultation-form' && <ConsultationForm onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'centers' && <MyCentersView onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'chat' && <ProfessionalChat onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'statistics' && <ProfessionalStatistics onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'interconsultation' && <ProfessionalInterconsultation onNavigate={setActiveProfessionalScreen} />}
        {activeProfessionalScreen === 'resources' && <ProfessionalResources onNavigate={setActiveProfessionalScreen} />}
      </Suspense>
    );
  };

  // Mostrar SplashScreen si showSplash es true
  if (showSplash) {
    return <SplashScreen onContinue={handleCloseSplash} />;
  }

  return (
    <ThemeProvider>
      <div className="app-container">
        {selectedAccess === null ? (
          <div className="login-container">
      
          
            <img src="/logo.png" alt="HealthBuddy Logo" className="logo" />
            <h1 className="app-title">HealthBuddy</h1>
            <h2 className="app-subtitle">Aplicación de la Consulta Joven del SMS</h2>
            <div className="access-options">
              <button className="access-button" onClick={() => setSelectedAccess('student')}>
                <span className="access-icon">👨‍🎓</span> Acceso Estudiante
              </button>
              <button className="access-button professional" onClick={() => setSelectedAccess('professional')}>
                <span className="access-icon">👨‍⚕️</span> Acceso Profesional Sanitario
              </button>
            </div>
            <div className="demo-access">
              <h3>Modo Demostración</h3>
              <div className="demo-buttons">
                <button className="demo-button student" onClick={() => handleDemoAccess('student')}>
                  <span className="demo-icon">🚀</span> Demo Estudiante
                </button>
                <button className="demo-button professional" onClick={() => handleDemoAccess('professional')}>
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
        ) : !loggedIn ? (
          <div className="login-container">
            {/* DemoBadge utilizando las clases CSS unificadas */}
            <div className="demo-badge">DEMO</div>
            
            <button className="back-button" onClick={handleBack}>← Volver</button>
            {selectedAccess === 'student' ? (
              <StudentLogin onLogin={handleLogin} />
            ) : (
              <ProfessionalLogin onLogin={handleLogin} />
            )}
          </div>
        ) : (
          <>
            {selectedAccess === 'student' ? renderStudentScreen() : renderProfessionalScreen()}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;