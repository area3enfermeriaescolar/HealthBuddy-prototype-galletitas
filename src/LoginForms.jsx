import React, { useState } from "react";
// Corregir la ruta al ThemeProvider
import { useTheme } from "./components/ThemeProvider";
// Corregir la ruta a CommonComponents
import { Button, Card } from "./components/common/CommonComponents";
import "./loginForms.css";
import { registerStudent, loginUser } from "./services/authService"; // Modificado: registerUser -> registerStudent
import { useAuth } from "./contexts/AuthContext";

/**
 * Componente de registro para estudiantes
 */
export const StudentRegistration = ({ onBack, onRegister, theme }) => {
  const [formData, setFormData] = useState({
    alias: "",
    fechaNacimiento: "",
    curso: "",
    sexo: "",
    centroEducativo: "",
    nre: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
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

    if (!formData.alias.trim()) newErrors.alias = "El alias es obligatorio";

    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = "La fecha de nacimiento es obligatoria";
    } else {
      const edad = calculateAge(formData.fechaNacimiento);
      if (edad < 12 || edad > 18) {
        newErrors.fechaNacimiento = "Debes tener entre 12 y 18 años para usar HealthBuddy";
      }
    }

    if (!formData.curso) newErrors.curso = "Selecciona tu curso";
    if (!formData.sexo) newErrors.sexo = "Selecciona una opción";
    if (!formData.centroEducativo) newErrors.centroEducativo = "Selecciona tu centro educativo";
    if (!formData.nre.trim()) {
      newErrors.nre = "El NRE es obligatorio";
    } else if (!/^\d{8}[A-Z]$/.test(formData.nre)) {
      newErrors.nre = "El NRE debe tener 8 dígitos seguidos de una letra mayúscula";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const studentEmail = `${formData.nre}@alu.murciaeduca.es`;
        const userData = {
          nre: formData.nre,
          alias: formData.alias,
          centerId: formData.centroEducativo,
          course: formData.curso,
          birthDate: new Date(formData.fechaNacimiento), // Convertir a objeto Date
          gender: formData.sexo,
          role: "student",
        };
        await registerStudent(studentEmail, formData.password, userData); // Modificado: registerUser -> registerStudent
        onRegister(); // Llama a la función onRegister pasada por props
      } catch (error) {
        console.error("Error al registrar estudiante:", error);
        setErrors((prev) => ({ ...prev, general: error.message }));
      }
    }
  };

  const centrosEducativos = [
    "IES Ramón Arcas Meca",
    "IES José Ibáñez Martín",
    "IES Francisco Ros Giner",
    "Colegio San Francisco de Asís",
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
          <h2 style={{ color: theme.colors.secondary }}>Registro de Estudiante</h2>
          <div
            className="privacy-notice"
            style={{
              backgroundColor: theme.colors.backgroundLight,
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius,
              border: `1px solid ${theme.colors.secondary}`,
              marginBottom: theme.spacing.lg,
            }}
          >
            <h4
              style={{
                color: theme.colors.secondary,
                marginBottom: theme.spacing.sm,
              }}
            >
              🔒 Tu privacidad es nuestra prioridad
            </h4>
            <ul
              style={{
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textMedium,
                margin: 0,
                paddingLeft: theme.spacing.lg,
              }}
            >
              <li>Tu identidad está protegida: solo usamos tu alias</li>
              <li>
                El NRE nos permite verificar que eres estudiante y asignarte al
                profesional de tu centro
              </li>
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
              className={`form-control ${errors.alias ? "error" : ""}`}
              placeholder="Nombre, apodo o como quieras que te llamemos"
              value={formData.alias}
              onChange={(e) => handleInputChange("alias", e.target.value)}
              maxLength={20}
            />
            {errors.alias && <span className="error-message">{errors.alias}</span>}
            <small className="form-help">
              Solo tú y el profesional sanitario verán este nombre
            </small>
          </div>

          {/* Fecha de Nacimiento */}
          <div className="form-group">
            <label className="form-label">
              Fecha de Nacimiento <span className="required">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${errors.fechaNacimiento ? "error" : ""}`}
              value={formData.fechaNacimiento}
              onChange={(e) => handleInputChange("fechaNacimiento", e.target.value)}
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 12)).toISOString().split("T")[0]}
              min={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split("T")[0]}
            />
            {errors.fechaNacimiento && (
              <span className="error-message">{errors.fechaNacimiento}</span>
            )}
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
              className={`form-control ${errors.curso ? "error" : ""}`}
              value={formData.curso}
              onChange={(e) => handleInputChange("curso", e.target.value)}
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
              className={`form-control ${errors.sexo ? "error" : ""}`}
              value={formData.sexo}
              onChange={(e) => handleInputChange("sexo", e.target.value)}
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
              className={`form-control ${errors.centroEducativo ? "error" : ""}`}
              value={formData.centroEducativo}
              onChange={(e) => handleInputChange("centroEducativo", e.target.value)}
            >
              <option value="">Selecciona tu centro</option>
              {centrosEducativos.map((centro) => (
                <option key={centro} value={centro}>
                  {centro}
                </option>
              ))}
            </select>
            {errors.centroEducativo && (
              <span className="error-message">{errors.centroEducativo}</span>
            )}
            <small className="form-help">
              Esto nos ayuda a asignarte al profesional de tu centro
            </small>
          </div>

          {/* NRE */}
          <div className="form-group">
            <label className="form-label">
              NRE (Número Regional del Estudiante) <span className="required">*</span>
            </label>
            <div className="nre-input-group">
              <input
                type="text"
                className={`form-control nre-input ${errors.nre ? "error" : ""}`}
                placeholder="12345678A"
                value={formData.nre}
                onChange={(e) => handleInputChange("nre", e.target.value.toUpperCase())}
                maxLength={9}
              />
              <span className="nre-suffix">@alu.murciaeduca.es</span>
            </div>
            {errors.nre && <span className="error-message">{errors.nre}</span>}
            <small className="form-help">
              Tu NRE es tu identificador único como estudiante. Lo usamos para
              proteger tu identidad.
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
                className={`form-control ${errors.password ? "error" : ""}`}
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
            <div
              className="password-warning"
              style={{
                backgroundColor: "#fff3cd",
                border: "1px solid #ffd60a",
                borderRadius: theme.borderRadius,
                padding: theme.spacing.sm,
                marginTop: theme.spacing.xs,
              }}
            >
              <strong>⚠️ Importante:</strong> Usa una contraseña DIFERENTE a la de tu
              correo corporativo
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div className="form-group">
            <label className="form-label">
              Confirmar contraseña <span className="required">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "error" : ""}`}
              placeholder="Repite la contraseña"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <Button
            type="submit"
            variant="secondary"
            fullWidth
            style={{ marginTop: theme.spacing.lg }}
          >
            Crear cuenta
          </Button>
          {errors.general && <p className="error-message">{errors.general}</p>}
        </form>
      </Card>
    </div>
  );
};

/**
 * Componentes de login unificados que utilizan el sistema de tema centralizado
 */
export const StudentLogin = ({ onLogin, onBack, onSkipLogin }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const studentEmail = `${email.replace("NRE", "")}@alu.murciaeduca.es`;
      await loginUser(studentEmail, password);
      onLogin();
    } catch (err) {
      setError(err.message);
      console.error("Error al iniciar sesión:", err);
    }
  };

  return (
    <div className="login-container student">
      <button
        className="back-button"
        onClick={onBack}
        style={{ color: theme.colors.secondary }}
      >
        ← Volver
      </button>

      <Card>
        <div className="login-header">
          <h2 style={{ color: theme.colors.secondary }}>Acceso Estudiante</h2>
        </div>

        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">
              NRE (Número Regional del Estudiante)
            </label>
            <div className="nre-input-group">
              <input
                type="text"
                className="form-control nre-input"
                placeholder="12345678A"
                maxLength={9}
                value={email.replace("@alu.murciaeduca.es", "").replace("NRE", "")}
                onChange={(e) => setEmail(`NRE${e.target.value}`)}
              />
              <span className="nre-suffix">@alu.murciaeduca.es</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variant="secondary" fullWidth>
            Iniciar Sesión
          </Button>
          {error && <p className="error-message">{error}</p>}
          <p className="toggle-link" onClick={onSkipLogin}>
            Acceder como Demo Estudiante
          </p>
        </form>
      </Card>
    </div>
  );
};

export const ProfessionalLogin = ({ onLogin, onBack, onSkipLogin }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await loginUser(email, password);
      onLogin();
    } catch (err) {
      setError(err.message);
      console.error("Error al iniciar sesión:", err);
    }
  };

  return (
    <div className="login-container professional">
      <button
        className="back-button"
        onClick={onBack}
        style={{ color: theme.colors.professional }}
      >
        ← Volver
      </button>

      <Card>
        <div className="login-header">
          <h2 style={{ color: theme.colors.professional }}>Acceso Profesional Sanitario</h2>
        </div>

        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="nombre.apellido@carm.es"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variant="professional" fullWidth>
            Iniciar Sesión
          </Button>
          {error && <p className="error-message">{error}</p>}
          <p className="toggle-link" onClick={onSkipLogin}>
            Acceder como Demo Profesional
          </p>
        </form>
      </Card>
    </div>
  );
};

const LoginForms = ({ selectedAccess, onLogin, onBack, onSkipLogin }) => {
  const theme = useTheme();

  return (
    <div className="login-forms-wrapper">
      {selectedAccess === "student" ? (
        <StudentLogin onLogin={onLogin} onBack={onBack} onSkipLogin={onSkipLogin} />
      ) : selectedAccess === "professional" ? (
        <ProfessionalLogin onLogin={onLogin} onBack={onBack} onSkipLogin={onSkipLogin} />
      ) : (
        <StudentRegistration onRegister={onLogin} onBack={onBack} theme={theme} />
      )}
    </div>
  );
};

export default LoginForms;


