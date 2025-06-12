import React, { useState } from "react";
// Corregir la ruta al ThemeProvider
import { useTheme } from "./components/ThemeProvider";
// Corregir la ruta a CommonComponents
import { Button, Card } from "./components/common/CommonComponents";
import "./loginForms.css";

/**
 * Componente de registro para estudiantes
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error cuando el usuario empieza a escribir
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
    } else if (!/^\d{8}[A-Z]$/.test(formData.nre)) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister({
        ...formData,
        edad: calculateAge(formData.fechaNacimiento),
        email: `${formData.nre}@alu.murciaeduca.es`
      });
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
      >
        ← Volver
      </button>
      
      <Card>
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
        
        <form onSubmit={handleSubmit} className="registration-form">
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
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
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
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <Button
            type="submit"
            variant="secondary"
            fullWidth
            style={{ marginTop: theme.spacing.lg }}
          >
            Crear cuenta
          </Button>
        </form>
      </Card>
    </div>
  );
};

/**
 * Componentes de login unificados que utilizan el sistema de tema centralizado
 */
const LoginForms = ({ userType, onLogin, onBack, onSkipLogin }) => {
  const theme = useTheme();
  const isStudent = userType === 'student';
  
  // Colores personalizados basados en el tipo de usuario
  const accentColor = isStudent ? theme.colors.secondary : theme.colors.professional;
  
  return (
    <div className={`login-container ${isStudent ? 'student' : 'professional'}`}>
      <button 
        className="back-button" 
        onClick={onBack}
        style={{ color: accentColor }}
      >
        ← Volver
      </button>
      
      <Card>
        <div className="login-header">
          <h2 style={{ color: accentColor }}>
            {isStudent ? 'Acceso Estudiante' : 'Acceso Profesional Sanitario'}
          </h2>
        </div>
        
        <div className="login-form">
          <div className="form-group">
            <label className="form-label">
              {isStudent ? 'NRE (Número Regional del Estudiante)' : 'Correo electrónico'}
            </label>
            {isStudent ? (
              <div className="nre-input-group">
                <input
                  type="text"
                  className="form-control nre-input"
                  placeholder="12345678A"
                  maxLength={9}
                />
                <span className="nre-suffix">@alu.murciaeduca.es</span>
              </div>
            ) : (
              <input
                type="email"
                className="form-control"
                placeholder="nombre.apellido@carm.es"
              />
            )}
          </div>
          
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="••••••••" 
            />
            {isStudent && (
              <small className="form-help" style={{ color: theme.colors.textMedium }}>
                Usa la contraseña que creaste para HealthBuddy, no la de tu correo corporativo
              </small>
            )}
          </div>
          
          <Button
            variant={isStudent ? "secondary" : "professional"}
            onClick={onLogin}
            fullWidth
            style={{ marginTop: theme.spacing.md }}
          >
            Iniciar sesión
          </Button>
          
          <div className="skip-login" style={{ marginTop: theme.spacing.lg }}>
            <Button
              variant="outline"
              onClick={onSkipLogin || onLogin}
              fullWidth
            >
              Continuar sin iniciar sesión (modo demostración)
            </Button>
            
            <p className="skip-login-info" style={{ 
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.textMedium,
              textAlign: 'center',
              marginTop: theme.spacing.sm
            }}>
              Esta opción permite ver todas las funcionalidades sin necesidad de autenticarse.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

/**
 * Componente de login para estudiantes con opción de registro
 * @param {Object} props - Propiedades pasadas al componente
 */
export function StudentLogin(props) {
  const [showRegistration, setShowRegistration] = useState(false);
  const theme = useTheme();

  if (showRegistration) {
    return (
      <StudentRegistration 
        onBack={() => setShowRegistration(false)}
        onRegister={(data) => {
          console.log('Datos de registro:', data);
          // Aquí se procesarían los datos de registro
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
 * Componente de registro para profesionales sanitarios
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
  const [availableCentrosEducativos, setAvailableCentrosEducativos] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Si cambia el centro de salud, actualizar centros educativos disponibles
    if (field === 'centroSalud') {
      updateCentrosEducativos(value);
      setFormData(prev => ({ ...prev, centrosEducativos: [] })); // Reset selección
    }
    
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const updateCentrosEducativos = (centroSalud) => {
    // Datos del piloto para el Área III - Lorca
    const centrosPorSalud = {
      'Lorca Centro': [
        'IES Ramón Arcas Meca',
        'IES José Ibáñez Martín',
        'IES Francisco Ros Giner',
        'Colegio San Francisco de Asís'
      ]
    };
    
    console.log('Actualizando centros para:', centroSalud);
    const centros = centrosPorSalud[centroSalud] || [];
    console.log('Centros encontrados:', centros);
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
    } else if (!/^[^\s@]+@carm\.es$/.test(formData.email)) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister(formData);
    }
  };

  const areasDesalud = [
    'Área III - Lorca'
  ];

  const centrosSalud = {
    'Área III - Lorca': ['Lorca Centro']
  };

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
      >
        ← Volver
      </button>
      
      <Card>
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
        
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Nombre */}
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
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          {/* Apellidos */}
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
            />
            {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
          </div>

          {/* Área de Salud */}
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
            >
              <option value="">Selecciona tu área de salud</option>
              {areasDesalud.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
            {errors.areaSalud && <span className="error-message">{errors.areaSalud}</span>}
          </div>

          {/* Centro de Salud */}
          <div className="form-group">
            <label className="form-label">
              Centro de Salud <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.centroSalud ? 'error' : ''}`}
              value={formData.centroSalud}
              onChange={(e) => {
                const selectedCentro = e.target.value;
                handleInputChange('centroSalud', selectedCentro);
                console.log('Centro seleccionado:', selectedCentro);
              }}
              disabled={!formData.areaSalud}
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

          {/* Centros Educativos Asignados */}
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

          {/* Correo Electrónico */}
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
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <small className="form-help">
              Utiliza tu correo corporativo del Servicio Murciano de Salud
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
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
            <small className="form-help">
              Crea una contraseña segura específica para HealthBuddy
            </small>
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
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <Button
            type="submit"
            variant="professional"
            fullWidth
            style={{ marginTop: theme.spacing.lg }}
          >
            Crear cuenta profesional
          </Button>
        </form>
      </Card>
    </div>
  );
};

/**
 * Componente de login para profesionales con opción de registro
 * @param {Object} props - Propiedades pasadas al componente
 */
export function ProfessionalLogin(props) {
  const [showRegistration, setShowRegistration] = useState(false);
  const theme = useTheme();

  if (showRegistration) {
    return (
      <ProfessionalRegistration 
        onBack={() => setShowRegistration(false)}
        onRegister={(data) => {
          console.log('Datos de registro profesional:', data);
          // Aquí se procesarían los datos de registro
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