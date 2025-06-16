import React, { useState, useEffect, lazy, Suspense } from 'react';
// Corregir ruta a ThemeProvider
import { ThemeProvider } from './components/ThemeProvider';
// Corregir ruta a CommonComponents
import { Container, Loader } from './components/common/CommonComponents';
import './loginForms.css';
import './globalStyles.css';

// Importamos el componente SplashScreen
import SplashScreen from './components/SplashScreen';

// Servicios de Firebase
import { onAuthStateChanged, getCurrentUser, getUserRole, logoutUser } from './services/authService';

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

// Componentes de Login actualizados para usar Firebase
import { StudentLogin, ProfessionalLogin } from './LoginForms';

/**
 * Componente principal de la aplicación con autenticación Firebase únicamente
 */
function App() {
  // Estado para controlar la visibilidad de la splash screen
  const [showSplash, setShowSplash] = useState(true);
  
  // Estados de autenticación con Firebase
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);
  
  // Estados de navegación
  const [selectedAccess, setSelectedAccess] = useState(null);
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeProfessionalScreen, setActiveProfessionalScreen] = useState('dashboard');

  // Función para cerrar la pantalla de splash
  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  // Efecto para escuchar cambios de autenticación en Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (firebaseUser) => {
      console.log('Estado de autenticación cambiado:', firebaseUser);
      
      if (firebaseUser) {
        try {
          // Obtener rol y datos del usuario
          const roleResult = await getUserRole(firebaseUser.uid);
          
          if (roleResult.success) {
            setUser(firebaseUser);
            setUserType(roleResult.role);
            setUserData(roleResult.data);
            setSelectedAccess(roleResult.role);
            console.log('Usuario autenticado:', {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              userType: roleResult.role,
              userData: roleResult.data
            });
          } else {
            console.error('Error al obtener rol del usuario:', roleResult.error);
            // Si hay error obteniendo el rol, cerrar sesión
            await handleLogout();
          }
        } catch (error) {
          console.error('Error al procesar usuario autenticado:', error);
          await handleLogout();
        }
      } else {
        // Usuario no autenticado
        setUser(null);
        setUserType(null);
        setUserData(null);
        setSelectedAccess(null);
      }
      
      setLoading(false);
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  // Funciones de navegación
  const handleBack = () => {
    if (user) {
      // Si el usuario está logueado, hacer logout
      handleLogout();
    } else {
      // Si no está logueado, volver a la pantalla principal
      setSelectedAccess(null);
    }
  };

  const handleLogin = (loginData) => {
    console.log('Login completado:', loginData);
    // El estado se actualiza automáticamente gracias al listener de onAuthStateChanged
  };

  const handleLogout = async () => {
    try {
      // Logout de Firebase
      await logoutUser();
      
      // Limpiar estados locales
      setUser(null);
      setUserType(null);
      setUserData(null);
      setSelectedAccess(null);
      setActiveScreen('home');
      setActiveProfessionalScreen('dashboard');
      
      console.log('Logout completado');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Forzar limpieza de estados aunque haya error
      setUser(null);
      setUserType(null);
      setUserData(null);
      setSelectedAccess(null);
    }
  };

  // Renderizar pantallas de estudiante con Suspense para carga lazy
  const renderStudentScreen = () => {
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
        {activeScreen === 'home' && (
          <StudentHome 
            onNavigate={setActiveScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeScreen === 'chat' && (
          <StudentChat 
            onNavigate={setActiveScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeScreen === 'appointments' && (
          <StudentAppointmentBooking 
            onNavigate={setActiveScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeScreen === 'notifications' && (
          <StudentNotifications 
            onNavigate={setActiveScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeScreen === 'resources' && (
          <StudentResources 
            onNavigate={setActiveScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
      </Suspense>
    );
  };

  // Renderizar pantallas de profesional con Suspense para carga lazy
  const renderProfessionalScreen = () => {
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
        {activeProfessionalScreen === 'dashboard' && (
          <ProfessionalDashboard 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'availability' && (
          <ProfessionalAvailabilityManagement 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'appointments' && (
          <ProfessionalAppointments 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'consultation-form' && (
          <ConsultationForm 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'centers' && (
          <MyCentersView 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'chat' && (
          <ProfessionalChat 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'statistics' && (
          <ProfessionalStatistics 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'interconsultation' && (
          <ProfessionalInterconsultation 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
        {activeProfessionalScreen === 'resources' && (
          <ProfessionalResources 
            onNavigate={setActiveProfessionalScreen}
            user={user}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
      </Suspense>
    );
  };

  // Mostrar loading mientras Firebase inicializa
  if (!authInitialized || loading) {
    return (
      <ThemeProvider>
        <Container style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          background: 'linear-gradient(135deg, #5ECCC3 0%, #1E5F8C 100%)'
        }}>
          <Loader size="large" />
        </Container>
      </ThemeProvider>
    );
  }

  // Mostrar SplashScreen si showSplash es true
  if (showSplash) {
    return <SplashScreen onContinue={handleCloseSplash} />;
  }

  return (
    <ThemeProvider>
      <div className="app-container">
        {!user ? (
          // Pantalla de selección de acceso o login
          selectedAccess === null ? (
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
              
              <div className="footer">
                <p>Servicio de comunicación segura entre estudiantes y enfermería escolar</p>
                <div className="institutional-logos">
                  <span>Servicio Murciano de Salud</span>
                  <span>Región de Murcia</span>
                </div>
              </div>
            </div>
          ) : (
            // Pantalla de login
            <div className="login-container">
              <button className="back-button" onClick={handleBack}>← Volver</button>
              {selectedAccess === 'student' ? (
                <StudentLogin 
                  onLogin={handleLogin} 
                  onBack={handleBack}
                />
              ) : (
                <ProfessionalLogin 
                  onLogin={handleLogin} 
                  onBack={handleBack}
                />
              )}
            </div>
          )
        ) : (
          // Usuario autenticado - mostrar aplicación
          <>
            {userType === 'student' ? renderStudentScreen() : renderProfessionalScreen()}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;