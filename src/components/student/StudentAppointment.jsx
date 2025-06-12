import React from 'react';
import './StudentInterface.css';

function StudentAppointment() {
  return (
    <div className="student-screen">
      <h1 className="screen-title">Citas Consulta Joven</h1>
      
      <div className="appointment-section">
        <div className="section-header">
          <h2>Próximas citas</h2>
        </div>
        
        <div className="appointment-list">
          <div className="appointment-item">
            <div className="appointment-date">
              <div className="date-day">24</div>
              <div className="date-month">Abr</div>
            </div>
            <div className="appointment-content">
              <h3>Consulta general</h3>
              <p className="appointment-time">10:30 - 11:00</p>
              <p className="appointment-with">Con: Lucía Martínez</p>
            </div>
            <div className="appointment-status confirmed">
              <span>Confirmada</span>
            </div>
          </div>
        </div>
        
        <div className="no-appointments-message">
          <p>No tienes más citas programadas</p>
        </div>
      </div>
      
      <div className="request-appointment-section">
        <h2>Solicitar nueva cita</h2>
        
        <div className="form-group">
          <label htmlFor="appointment-date">Fecha</label>
          <input type="date" id="appointment-date" />
        </div>
        
        <div className="form-group">
          <label htmlFor="appointment-time">Hora</label>
          <select id="appointment-time">
            <option value="">Selecciona una hora</option>
            <option value="10:00">10:00 - 10:30</option>
            <option value="10:30">10:30 - 11:00</option>
            <option value="11:00">11:00 - 11:30</option>
            <option value="11:30">11:30 - 12:00</option>
            <option value="12:00">12:00 - 12:30</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="appointment-reason">Motivo</label>
          <select id="appointment-reason">
            <option value="">Selecciona un motivo</option>
            <option value="general">Consulta general</option>
            <option value="followup">Seguimiento</option>
            <option value="medication">Medicación</option>
            <option value="mental">Salud mental</option>
            <option value="other">Otro</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="appointment-notes">Notas adicionales (opcional)</label>
          <textarea id="appointment-notes" rows="3" placeholder="Escribe aquí cualquier información adicional que quieras compartir..."></textarea>
        </div>
        
        <button className="submit-button">Solicitar cita</button>
      </div>
      
      <div className="appointment-info">
        <p>Las citas están sujetas a disponibilidad y deben ser confirmadas por el personal de enfermería.</p>
      </div>
      
      <div className="bottom-navigation">
        <div className="nav-item">
          <div className="nav-icon">🏠</div>
          <span className="nav-text">Inicio</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">💬</div>
          <span className="nav-text">Chat</span>
        </div>
        <div className="nav-item active">
          <div className="nav-icon">📅</div>
          <span className="nav-text">Citas</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">📚</div>
          <span className="nav-text">Recursos</span>
        </div>
      </div>
    </div>
  );
}

export default StudentAppointment;
