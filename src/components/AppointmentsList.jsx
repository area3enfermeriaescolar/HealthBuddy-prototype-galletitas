import React, { useState } from 'react';
import ConsultationForm from './ConsultationForm';
import './AppointmentsList.css';

export default function AppointmentsList({ appointments, centers }) {
  const [filter, setFilter] = useState({ date: '', center: '' });
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = appointments.filter(a =>
    (!filter.date || a.date === filter.date) &&
    (!filter.center || a.center === filter.center)
  );

  if (showForm) {
    return <ConsultationForm onBack={() => setShowForm(false)} appointment={selected} />;
  }

  return (
    <div className="appointments-list">
      <h2>Próximas citas</h2>
      <div className="filters">
        <input type="date" value={filter.date} onChange={e => setFilter(f=>({...f, date:e.target.value}))} />
        <select value={filter.center} onChange={e => setFilter(f=>({...f, center:e.target.value}))}>
          <option value="">Todos</option>
          {centers.map((c,i)=><option key={i}>{c}</option>)}
        </select>
      </div>

      {filtered.map(a => (
        <div key={a.id} className="appointment-card">
          <div>
            <strong>{a.time}</strong> {new Date(a.date).toLocaleDateString('es-ES',{ weekday: 'long', day:'numeric', month:'long' })}
          </div>
          <div>NRE: {a.nre}</div>
          <div>Centro: {a.center}</div>
          <div>Motivo: {a.reason}</div>
          <div>
            <button onClick={() => { setSelected(a); setShowForm(true); }}>
              Registrar consulta
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
