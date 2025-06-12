import React, { useState } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { Button, Card } from "../../components/common/CommonComponents";
import "../../loginForms.css";
import { registerProfessional } from "../../services/authService";

/**
 * Componente de registro para profesionales sanitarios
 */
const ProfessionalRegistration = ({ onBack, onRegister, theme }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    especialidad: "",
    centroSanitario: "",
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios";
    
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!formData.email.endsWith("@carm.es")) {
      newErrors.email = "Debe usar un correo institucional (@carm.es)";
    }
    
    if (!formData.especialidad) newErrors.especialidad = "Seleccione su especialidad";
    if (!formData.centroSanitario) newErrors.centroSanitario = "Seleccione su centro sanitario";
    
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
        const userData = {
          name: `${formData.nombre} ${formData.apellidos}`,
          role: "nurse",
          centerIds: [formData.centroSanitario],
          specialty: formData.especialidad
        };
        
        await registerProfessional(formData.email, formData.password, userData);
        onRegister(); // Llama a la función onRegister pasada por props
      } catch (error) {
        console.error("Error al registrar profesional:", error);
        setErrors((prev) => ({ ...prev, general: error.message }));
      }
    }
  };

  const especialidades = [
    "Enfermería",
    "Medicina Familiar",
    "Pediatría",
    "Psicología",
    "Trabajo Social",
    "Otro"
  ];

  const centrosSanitarios = [
    "Centro de Salud Lorca Centro",
    "Centro de Salud San Diego",
    "Centro de Salud Sutullena",
    "Hospital Rafael Méndez",
    "Otro"
  ];

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
          <h2 style={{ color: theme.colors.professional }}>Registro de Profesional Sanitario</h2>
          <div
            className="privacy-notice"
            style={{
              backgroundColor: theme.colors.backgroundLight,
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius,
              border: `1px solid ${theme.colors.professional}`,
              marginBottom: theme.spacing.lg,
            }}
          >
            <h4
              style={{
                color: theme.colors.professional,
                marginBottom: theme.spacing.sm,
              }}
            >
              🔒 Información importante
            </h4>
            <ul
              style={{
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textMedium,
                margin: 0,
                paddingLeft: theme.spacing.lg,
              }}
            >
              <li>Debe utilizar su correo institucional (@carm.es)</li>
              <li>Sus datos serán verificados por el administrador del sistema</li>
              <li>Recibirá una notificación cuando su cuenta sea activada</li>
              <li>La información proporcionada será tratada con confidencialidad</li>
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
              className={`form-control ${errors.nombre ? "error" : ""}`}
              placeholder="Su nombre"
              value={formData.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
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
              className={`form-control ${errors.apellidos ? "error" : ""}`}
              placeholder="Sus apellidos"
              value={formData.apellidos}
              onChange={(e) => handleInputChange("apellidos", e.target.value)}
            />
            {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">
              Correo electrónico <span className="required">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "error" : ""}`}
              placeholder="nombre.apellido@carm.es"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <small className="form-help">
              Debe usar su correo institucional (@carm.es)
            </small>
          </div>

          {/* Especialidad */}
          <div className="form-group">
            <label className="form-label">
              Especialidad <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.especialidad ? "error" : ""}`}
              value={formData.especialidad}
              onChange={(e) => handleInputChange("especialidad", e.target.value)}
            >
              <option value="">Seleccione su especialidad</option>
              {especialidades.map((especialidad) => (
                <option key={especialidad} value={especialidad}>
                  {especialidad}
                </option>
              ))}
            </select>
            {errors.especialidad && <span className="error-message">{errors.especialidad}</span>}
          </div>

          {/* Centro Sanitario */}
          <div className="form-group">
            <label className="form-label">
              Centro Sanitario <span className="required">*</span>
            </label>
            <select
              className={`form-control ${errors.centroSanitario ? "error" : ""}`}
              value={formData.centroSanitario}
              onChange={(e) => handleInputChange("centroSanitario", e.target.value)}
            >
              <option value="">Seleccione su centro</option>
              {centrosSanitarios.map((centro) => (
                <option key={centro} value={centro}>
                  {centro}
                </option>
              ))}
            </select>
            {errors.centroSanitario && <span className="error-message">{errors.centroSanitario}</span>}
          </div>

          {/* Contraseña */}
          <div className="form-group">
            <label className="form-label">
              Contraseña <span className="required">*</span>
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
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Confirmar Contraseña */}
          <div className="form-group">
            <label className="form-label">
              Confirmar contraseña <span className="required">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "error" : ""}`}
              placeholder="Repita la contraseña"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <Button
            type="submit"
            variant="professional"
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

export default ProfessionalRegistration;
