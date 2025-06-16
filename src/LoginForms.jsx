import React, { useState } from "react";
// Corregir la ruta al ThemeProvider
import { useTheme } from "./components/ThemeProvider";
// Corregir la ruta a CommonComponents
import { Button } from "./components/common/CommonComponents";
import "./loginForms.css";

// Importar servicios de Firebase
import { 
  registerStudent, 
  registerProfessional, 
  loginUser,
  generateEmailFromNRE,
  validateNRE,
  validateInstitutionalEmail
} from "./services/authService";

/**
 * Componente de registro para estudiantes - SOLO FIREBASE
 */
const StudentRegistration = ({ onBack, onRegister, theme }) => {
  const [formData, setFormData] = useState({
    alias: '',
    fechaNacimiento: '',
    curso: '',
    sexo: '',
    centroEducativo: '',
    nre: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.alias.trim()) newErrors.alias = 'El alias es obligatorio';
    
    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    } else {
      const edad = calculateAge(formData.fechaNacimiento);
      if (edad < 12 || edad > 18) {
        newErrors.fechaNacimiento = 'Debes tener entre 12 y 18 años para usar HealthBuddy';
      }
    }
    
    if (!formData.curso) newErrors.curso = 'Selecciona tu curso';
    if (!formData.sexo) newErrors.sexo = 'Selecciona una opción';
    if (!formData.centroEducativo) newErrors.centroEducativo = 'Selecciona tu centro educativo';
    
    if (!formData.nre.trim()) {
      newErrors.nre = 'El NRE es obligatorio';
    } else if (!validateNRE(formData.nre)) {
      newErrors.nre = 'El NRE debe tener 8 dígitos seguidos de una letra mayúscula';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      const email = generateEmailFromNRE(formData.nre);
      
      const result = await registerStudent(email, formData.password, {
        alias: formData.alias,
        age: calculateAge(formData.fechaNacimiento),
        course: formData.curso,
        gender: formData.sexo,
        centroEducativo: formData.centroEducativo,
        centerIds: [formData.centroEducativo]
      });

      if (result.success) {
        console.log('Registro exitoso:', result);
        onRegister({
          user: result.user,
          userType: result.userType,
          userData: formData
        });
      } else {
        console.error('Error en registro:', result.error);
        setErrors({ general: result.error });
      }
    } catch (error) {
      console.error('Error en handleSubmit:', error);
      setErrors({ general: 'Error al crear la cuenta. Inténtalo de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  const centrosEducativos = [
    'IES Ramón Arcas Meca',
    'IES José Ibáñez Martín',
    'IES Francisco Ros Giner',
    'Colegio San Francisco de Asís'
  ];

  return (
    <div className="registration-container student">
      <button 
        className="back-button" 
        onClick={onBack}
        style={{ color: theme.colors.secondary }}
        disabled={loading}
      >
        ← Volver
      </button>
      
      <div className="registration-form">
        <div className="registration-header">
          <h2 style={{ color: theme.colors.secondary }}>
            Registro de Estudiante
          </h2>
          <div className="privacy-notice" style={{
            backgroundColor: theme.colors.backgroundLight,
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius,
            border: `1px solid ${theme.colors.secondary}`,
            marginBottom: theme.spacing.lg
          }}>
            <h4 style={{ color: theme.colors.secondary, marginBottom: theme.spacing.sm }}>
              🔒 Tu privacidad es nuestra prioridad
            </h4>
            <ul style={{ 
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.textDark,
              margin: 0,
              paddingLeft: theme.spacing.lg
            }}>
              <li>Tu identidad está protegida: solo usamos tu alias</li>
              <li>El NRE nos permite verificar que eres estudiante y asignarte al profesional de tu centro</li>
              <li>Usa una contraseña DIFERENTE a la de tu correo corporativo</li>
              <li>Ningún dato personal será compartido sin tu consentimiento</li>
            </ul>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Mostrar errores generales */}
          {errors.general && (
            <div className="error-message" style={{ 
              marginBottom: theme.spacing.md,
              padding: theme.spacing.sm,
              backgroundColor: '#f8d7da',
              borderRadius: theme.borderRadius,
              border: '1px solid #f5c6cb'
            }}>
              {errors.general}
            </div>
          )}

          {/* Alias */}
          <div className="form-group">
            <label className="form-label">
              Alias <span className="required">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.alias ? 'error' : ''}`}
              placeholder="Nombre, apodo o como quieras que te llamemos"
              value={formData.alias}
              onChange={(e) => handleInputChange('alias', e.target.value)}
              maxLength={20}
              disabled={loading}
            />
            {errors.alias && <span className="error-message">{errors.alias}</span>}
            <small className="form-help">Solo tú y el profesional sanitario verán este nombre</small>
          </div>

          {/* Fecha de Nacimiento */}
          <div className="form-group">
            <label className="form-label">
              Fecha de Nacimiento <span className="required">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${errors.fechaNacimiento ? 'error' : ''}`}
              value={formData.fechaNacimiento}
              onChange={(e) => handleInputChange('fechaNacimiento', e.target.value)}
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 12)).toISOString().split('T')[0]}
              min={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
              disabled={loading}
            />
            {errors.fechaNacimiento && <span className="error-message">{errors.fechaNacimiento}</span>}
            {formData.fechaNacimiento && (
              <small className="form-help">
                Edad: {calculateAge(formData.fechaNacimiento)} años
              </small>
            )}
          </div>

          {/* Curso */}
          <div className="form-group">
            <label className="form-label">
              Curso <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.curso ? 'error' : ''}`}
              value={formData.curso}
              onChange={(e) => handleInputChange('curso', e.target.value)}
              disabled={loading}
            >
              <option value="">Selecciona tu curso</option>
              <option value="1ESO">1º ESO</option>
              <option value="2ESO">2º ESO</option>
              <option value="3ESO">3º ESO</option>
              <option value="4ESO">4º ESO</option>
              <option value="1BACH">1º Bachillerato</option>
              <option value="2BACH">2º Bachillerato</option>
              <option value="FP">Formación Profesional</option>
            </select>
            {errors.curso && <span className="error-message">{errors.curso}</span>}
          </div>

          {/* Sexo */}
          <div className="form-group">
            <label className="form-label">
              Sexo <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.sexo ? 'error' : ''}`}
              value={formData.sexo}
              onChange={(e) => handleInputChange('sexo', e.target.value)}
              disabled={loading}
            >
              <option value="">Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
              <option value="prefiero-no-decir">Prefiero no decirlo</option>
            </select>
            {errors.sexo && <span className="error-message">{errors.sexo}</span>}
          </div>

          {/* Centro Educativo */}
          <div className="form-group">
            <label className="form-label">
              Centro Educativo <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.centroEducativo ? 'error' : ''}`}
              value={formData.centroEducativo}
              onChange={(e) => handleInputChange('centroEducativo', e.target.value)}
              disabled={loading}
            >
              <option value="">Selecciona tu centro</option>
              {centrosEducativos.map(centro => (
                <option key={centro} value={centro}>{centro}</option>
              ))}
            </select>
            {errors.centroEducativo && <span className="error-message">{errors.centroEducativo}</span>}
            <small className="form-help">Esto nos ayuda a asignarte al profesional de tu centro</small>
          </div>

          {/* NRE */}
          <div className="form-group">
            <label className="form-label">
              NRE (Número Regional del Estudiante) <span className="required">*</span>
            </label>
            <div className="nre-input-group">
              <input
                type="text"
                className={`form-control nre-input ${errors.nre ? 'error' : ''}`}
                placeholder="12345678A"
                value={formData.nre}
                onChange={(e) => handleInputChange('nre', e.target.value.toUpperCase())}
                maxLength={9}
                disabled={loading}
              />
              <span className="nre-suffix">@alu.murciaeduca.es</span>
            </div>
            {errors.nre && <span className="error-message">{errors.nre}</span>}
            <small className="form-help">
              Tu NRE es tu identificador único como estudiante. Lo usamos para proteger tu identidad.
            </small>
          </div>

          {/* Contraseña */}
          <div className="form-group">
            <label className="form-label">
              Contraseña para HealthBuddy <span className="required">*</span>
            </label>
            <div className="password-input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${errors.password ? 'error' : ''}`}
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
            <div className="password-warning" style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffd60a',
              borderRadius: theme.borderRadius,
              padding: theme.spacing.sm,
              marginTop: theme.spacing.xs
            }}>
              <strong>⚠️ Importante:</strong> Usa una contraseña DIFERENTE a la de tu correo corporativo
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div className="form-group">
            <label className="form-label">
              Confirmar contraseña <span className="required">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Repite la contraseña"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              disabled={loading}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <Button
            type="submit"
            variant="secondary"
            fullWidth
            disabled={loading}
            style={{ marginTop: theme.spacing.lg }}
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>
        </form>
      </div>
    </div>
  );
};

/**
 * Componentes de login unificados - SOLO FIREBASE
 */
const LoginForms = ({ userType, onLogin, onBack }) => {
  const theme = useTheme();
  const isStudent = userType === 'student';
  
  const accentColor = isStudent ? theme.colors.secondary : theme.colors.professional;
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nre: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    
    if (isStudent) {
      if (!formData.nre.trim()) {
        newErrors.nre = 'El NRE es obligatorio';
      } else if (!validateNRE(formData.nre)) {
        newErrors.nre = 'El NRE debe tener 8 dígitos seguidos de una letra mayúscula';
      }
    } else {
      if (!formData.email.trim()) {
        newErrors.email = 'El correo electrónico es obligatorio';
      } else if (!validateInstitutionalEmail(formData.email, '@carm.es')) {
        newErrors.email = 'Debe ser un correo válido @carm.es';
      }
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateLogin()) return;

    setLoading(true);
    setErrors({});
    
    try {
      const email = isStudent 
        ? generateEmailFromNRE(formData.nre)
        : formData.email;
      
      console.log('Iniciando login:', { email, userType });
      
      const result = await loginUser(email, formData.password);
      
      if (result.success) {
        console.log('Login exitoso:', result);
        onLogin({
          user: result.user,
          userType: result.userType,
          userData: result.userData
        });
      } else {
        console.error('Error en login:', result.error);
        setErrors({ general: result.error });
      }
    } catch (error) {
      console.error('Error en handleLogin:', error);
      setErrors({ general: 'Error al iniciar sesión. Inténtalo de nuevo.' });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={`login-container ${isStudent ? 'student' : 'professional'}`}>
      <button 
        className="back-button" 
        onClick={onBack}
        style={{ color: accentColor }}
        disabled={loading}
      >
        ← Volver
      </button>
      
      <div className="login-form">
        <div className="login-header">
          <h2 style={{ color: accentColor }}>
            {isStudent ? 'Acceso Estudiante' : 'Acceso Profesional Sanitario'}
          </h2>
        </div>
        
        <form onSubmit={handleLogin}>
          {errors.general && (
            <div className="error-message" style={{ 
              marginBottom: theme.spacing.md,
              padding: theme.spacing.sm,
              backgroundColor: '#f8d7da',
              borderRadius: theme.borderRadius,
              border: '1px solid #f5c6cb'
            }}>
              {errors.general}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              {isStudent ? 'NRE (Número Regional del Estudiante)' : 'Correo electrónico'}
            </label>
            {isStudent ? (
              <div className="nre-input-group">
                <input
                  type="text"
                  className={`form-control nre-input ${errors.nre ? 'error' : ''}`}
                  placeholder="12345678A"
                  maxLength={9}
                  value={formData.nre}
                  onChange={(e) => handleInputChange('nre', e.target.value.toUpperCase())}
                  disabled={loading}
                />
                <span className="nre-suffix">@alu.murciaeduca.es</span>
              </div>
            ) : (
              <input
                type="email"
                className={`form-control ${errors.email ? 'error' : ''}`}
                placeholder="nombre.apellido@carm.es"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value.toLowerCase())}
                disabled={loading}
              />
            )}
            {errors.nre && <span className="error-message">{errors.nre}</span>}
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              className={`form-control ${errors.password ? 'error' : ''}`}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={loading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
            {isStudent && (
              <small className="form-help" style={{ color: theme.colors.textMedium }}>
                Usa la contraseña que creaste para HealthBuddy, no la de tu correo corporativo
              </small>
            )}
          </div>
          
          <Button
            type="submit"
            variant={isStudent ? "secondary" : "professional"}
            fullWidth
            disabled={loading}
            style={{ marginTop: theme.spacing.md }}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </form>
      </div>
    </div>
  );
};

/**
 * Componente de login para estudiantes con opción de registro - SOLO FIREBASE
 */
export function StudentLogin(props) {
  const [showRegistration, setShowRegistration] = useState(false);
  const theme = useTheme();

  if (showRegistration) {
    return (
      <StudentRegistration 
        onBack={() => setShowRegistration(false)}
        onRegister={(data) => {
          console.log('Registro completado:', data);
          props.onLogin && props.onLogin(data);
        }}
        theme={theme}
      />
    );
  }

  return (
    <div className="student-auth-container">
      <LoginForms userType="student" {...props} />
      
      <div className="registration-prompt" style={{
        textAlign: 'center',
        marginTop: theme.spacing.lg,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: theme.borderRadius
      }}>
        <p style={{ 
          color: theme.colors.textDark,
          marginBottom: theme.spacing.sm 
        }}>
          ¿Primera vez en HealthBuddy?
        </p>
        <Button
          variant="secondary"
          onClick={() => setShowRegistration(true)}
          style={{ marginBottom: theme.spacing.sm }}
        >
          Crear cuenta de estudiante
        </Button>
        <p style={{ 
          fontSize: theme.typography.fontSize.xs,
          color: theme.colors.textMedium,
          margin: 0
        }}>
          El registro es rápido, seguro y protege tu privacidad
        </p>
      </div>
    </div>
  );
}

/**
 * Componente de registro para profesionales sanitarios - SOLO FIREBASE
 */
const ProfessionalRegistration = ({ onBack, onRegister, theme }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    areaSalud: '',
    centroSalud: '',
    centrosEducativos: [],
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [availableCentrosEducativos, setAvailableCentrosEducativos] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'centroSalud') {
      updateCentrosEducativos(value);
      setFormData(prev => ({ ...prev, centrosEducativos: [] }));
    }
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const updateCentrosEducativos = (centroSalud) => {
    const centrosPorSalud = {
      'Lorca Centro': [
        'IES Ramón Arcas Meca',
        'IES José Ibáñez Martín',
        'IES Francisco Ros Giner',
        'Colegio San Francisco de Asís'
      ]
    };
    
    const centros = centrosPorSalud[centroSalud] || [];
    setAvailableCentrosEducativos(centros);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!formData.areaSalud) newErrors.areaSalud = 'Selecciona tu área de salud';
    if (!formData.centroSalud) newErrors.centroSalud = 'Selecciona tu centro de salud';
    if (formData.centrosEducativos.length === 0) {
      newErrors.centrosEducativos = 'Selecciona al menos un centro educativo';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!validateInstitutionalEmail(formData.email, '@carm.es')) {
      newErrors.email = 'Debe ser un correo válido @carm.es';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      const result = await registerProfessional(formData.email, formData.password, {
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        areaSalud: formData.areaSalud,
        centroSalud: formData.centroSalud,
        centrosEducativos: formData.centrosEducativos,
        centerIds: formData.centrosEducativos
      });

      if (result.success) {
        console.log('Registro exitoso:', result);
        onRegister({
          user: result.user,
          userType: result.userType,
          userData: formData
        });
      } else {
        console.error('Error en registro:', result.error);
        setErrors({ general: result.error });
      }
    } catch (error) {
      console.error('Error en handleSubmit:', error);
      setErrors({ general: 'Error al crear la cuenta. Inténtalo de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  const areasDesalud = ['Área III - Lorca'];
  const centrosSalud = { 'Área III - Lorca': ['Lorca Centro'] };

  const handleCentroEducativoChange = (centro, isChecked) => {
    setFormData(prev => ({
      ...prev,
      centrosEducativos: isChecked
        ? [...prev.centrosEducativos, centro]
        : prev.centrosEducativos.filter(c => c !== centro)
    }));
  };

  return (
    <div className="registration-container professional">
      <button 
        className="back-button" 
        onClick={onBack}
        style={{ color: theme.colors.professional }}
        disabled={loading}
      >
        ← Volver
      </button>
      
      <div className="registration-form">
        <div className="registration-header">
          <h2 style={{ color: theme.colors.professional }}>
            Registro de Profesional Sanitario
          </h2>
          <div className="privacy-notice" style={{
            backgroundColor: theme.colors.backgroundLight,
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius,
            border: `1px solid ${theme.colors.professional}`,
            marginBottom: theme.spacing.lg
          }}>
            <h4 style={{ color: theme.colors.professional, marginBottom: theme.spacing.sm }}>
              🏥 Registro para Profesionales del Programa PACES
            </h4>
            <ul style={{ 
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.textDark,
              margin: 0,
              paddingLeft: theme.spacing.lg
            }}>
              <li>Solo personal sanitario autorizado del Servicio Murciano de Salud</li>
              <li>Utiliza tu correo corporativo @carm.es como nombre de usuario</li>
              <li>Se te asignarán los centros educativos correspondientes a tu área</li>
              <li>Toda la información está protegida y es confidencial</li>
            </ul>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {errors.general && (
            <div className="error-message" style={{ 
              marginBottom: theme.spacing.md,
              padding: theme.spacing.sm,
              backgroundColor: '#f8d7da',
              borderRadius: theme.borderRadius,
              border: '1px solid #f5c6cb'
            }}>
              {errors.general}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              Nombre <span className="required">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? 'error' : ''}`}
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
              disabled={loading}
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Apellidos <span className="required">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.apellidos ? 'error' : ''}`}
              placeholder="Tus apellidos"
              value={formData.apellidos}
              onChange={(e) => handleInputChange('apellidos', e.target.value)}
              disabled={loading}
            />
            {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Área de Salud <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.areaSalud ? 'error' : ''}`}
              value={formData.areaSalud}
              onChange={(e) => {
                handleInputChange('areaSalud', e.target.value);
                setFormData(prev => ({ ...prev, centroSalud: '', centrosEducativos: [] }));
                setAvailableCentrosEducativos([]);
              }}
              disabled={loading}
            >
              <option value="">Selecciona tu área de salud</option>
              {areasDesalud.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
            {errors.areaSalud && <span className="error-message">{errors.areaSalud}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Centro de Salud <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.centroSalud ? 'error' : ''}`}
              value={formData.centroSalud}
              onChange={(e) => handleInputChange('centroSalud', e.target.value)}
              disabled={!formData.areaSalud || loading}
            >
              <option value="">
                {formData.areaSalud ? 'Selecciona tu centro de salud' : 'Primero selecciona el área de salud'}
              </option>
              {formData.areaSalud && centrosSalud[formData.areaSalud]?.map(centro => (
                <option key={centro} value={centro}>{centro}</option>
              ))}
            </select>
            {errors.centroSalud && <span className="error-message">{errors.centroSalud}</span>}
          </div>

          {formData.centroSalud && (
            <div className="form-group">
              <label className="form-label">
                Centros Educativos Asignados <span className="required">*</span>
              </label>
              {availableCentrosEducativos.length > 0 ? (
                <div className="checkbox-group">
                  {availableCentrosEducativos.map(centro => (
                    <label key={centro} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={formData.centrosEducativos.includes(centro)}
                        onChange={(e) => handleCentroEducativoChange(centro, e.target.checked)}
                        disabled={loading}
                      />
                      <span>{centro}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="loading-centers">
                  Cargando centros educativos...
                </div>
              )}
              {errors.centrosEducativos && <span className="error-message">{errors.centrosEducativos}</span>}
              <small className="form-help">
                Selecciona los centros educativos donde realizarás consultas del programa PACES
              </small>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              Correo Electrónico Corporativo <span className="required">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="nombre.apellido@carm.es"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value.toLowerCase())}
              disabled={loading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <small className="form-help">
              Utiliza tu correo corporativo del Servicio Murciano de Salud
            </small>
          </div>

          <div className="form-group">
            <label className="form-label">
              Contraseña para HealthBuddy <span className="required">*</span>
            </label>
            <div className="password-input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${errors.password ? 'error' : ''}`}
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
            <small className="form-help">
              Crea una contraseña segura específica para HealthBuddy
            </small>
          </div>

          <div className="form-group">
            <label className="form-label">
              Confirmar contraseña <span className="required">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Repite la contraseña"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              disabled={loading}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <Button
            type="submit"
            variant="professional"
            fullWidth
            disabled={loading}
            style={{ marginTop: theme.spacing.lg }}
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta profesional'}
          </Button>
        </form>
      </div>
    </div>
  );
};

/**
 * Componente de login para profesionales con opción de registro - SOLO FIREBASE
 */
export function ProfessionalLogin(props) {
  const [showRegistration, setShowRegistration] = useState(false);
  const theme = useTheme();

  if (showRegistration) {
    return (
      <ProfessionalRegistration 
        onBack={() => setShowRegistration(false)}
        onRegister={(data) => {
          console.log('Registro profesional completado:', data);
          props.onLogin && props.onLogin(data);
        }}
        theme={theme}
      />
    );
  }

  return (
    <div className="professional-auth-container">
      <LoginForms userType="professional" {...props} />
      
      <div className="registration-prompt" style={{
        textAlign: 'center',
        marginTop: theme.spacing.lg,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: theme.borderRadius,
        border: `1px solid ${theme.colors.professional}`
      }}>
        <p style={{ 
          color: theme.colors.textDark,
          marginBottom: theme.spacing.sm 
        }}>
          ¿Eres profesional sanitario del programa PACES?
        </p>
        <Button
          variant="professional"
          onClick={() => setShowRegistration(true)}
          style={{ marginBottom: theme.spacing.sm }}
        >
          Registrarse como profesional
        </Button>
        <p style={{ 
          fontSize: theme.typography.fontSize.xs,
          color: theme.colors.textMedium,
          margin: 0
        }}>
          Solo para personal autorizado del Servicio Murciano de Salud
        </p>
      </div>
    </div>
  );
}

export default { StudentLogin, ProfessionalLogin };