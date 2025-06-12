import React, { useState } from 'react';
import ProfessionalLayout from './ProfessionalLayout';
import './ProfessionalInterface.css';
import './AvailabilityManagement.css';

// Demo badge inline
const DemoBadge = () => (
  <div className="demo-badge">DEMO</div>
);

export default function ProfessionalAvailabilityManagement({ onNavigate }) {
  const [notificationCenter, setNotificationCenter] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Datos de ejemplo
  const centers = [
    { id:1, name: "IES Mar Menor", day: "Martes", time: "10:00 - 11:00", location: "Sala 12" },
    { id:2, name: "IES Mediterráneo", day: "Jueves", time: "11:30 - 12:30", location: "Enfermería" },
    { id:3, name: "IES Dos Mares", day: "Viernes", time: "09:00 - 10:00", location: "Sala reuniones" }
  ];

  // Al hacer clic en Notificar
  const handleNotifyClick = (center) => {
    const msg = `Estimados estudiantes: el día ${center.day}, de ${center.time}, la enfermera no podrá asistir presencialmente al ${center.name}, pero estará disponible vía chat para cualquier consulta.`;
    setNotificationCenter(center);
    setNotificationMessage(msg);
    setShowModal(true);
  };

  const sendNotification = () => {
    console.log('Notificación enviada:', notificationMessage);
    alert('Notificación enviada a los adolescentes.');
    setShowModal(false);
  };

  return (
    <ProfessionalLayout title="Gestión de Disponibilidad" onNavigate={onNavigate} activeScreen="appointments">
      <DemoBadge />

      {/* Solo vista de disponibilidad */}
      <div className="centers-list">
        {centers.map(c => (
          <div key={c.id} className="center-card">
            <h3>{c.name}</h3>
            <p><strong>Día:</strong> {c.day}</p>
            <p><strong>Horario:</strong> {c.time}</p>
            <p><strong>Lugar:</strong> {c.location}</p>
            <div className="center-actions">
              <button className="modify-button">Modificar</button>
              <button className="notify-button" onClick={() => handleNotifyClick(c)}>Notificar</button>
            </div>
          </div>
        ))}
        <div className="availability-actions">
          <button className="add-center-button">Añadir centro</button>
        </div>
      </div>

      {/* Modal de notificación */}
      {showModal && (
        <div className="consultation-form-overlay">
          <div className="consultation-form">
            <textarea
              rows={4}
              value={notificationMessage}
              onChange={e => setNotificationMessage(e.target.value)}
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: 5, border: '1px solid #ddd' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button className="cancel-button" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="save-button" onClick={sendNotification}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </ProfessionalLayout>
  );
}

