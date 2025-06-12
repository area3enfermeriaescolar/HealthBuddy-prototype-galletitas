import React from 'react';
import './AvailabilityCalendar.css';

export default function AvailabilityCalendar({ centers, onModify, onNotify }) {
  return (
    <div className="availability-calendar">
      <h2>Centros educativos asignados</h2>
      <div className="centers-grid">
        {centers.map(c => (
          <div key={c.id} className="center-card">
            <h3>{c.name}</h3>
            <p><strong>Día:</strong> {c.day}</p>
            <p><strong>Horario:</strong> {c.time}</p>
            <p><strong>Ubicación:</strong> {c.location}</p>
            <button onClick={() => onModify(c.id)}>Modificar</button>
            <button onClick={() => onNotify(c.id)}>Notificar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
