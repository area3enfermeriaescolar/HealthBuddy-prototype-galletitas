import React from 'react';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Inicio', icon: '🏠' },
  { id: 'chat',      label: 'Chat',   icon: '💬', badge: 2 },
  { id: 'appointments', label: 'Citas', icon: '📅' },
  { id: 'resources',  label: 'Recursos', icon: '📚' },
];

export default function NavBar({ active, onNavigate }) {
  return (
    <div className="nav-bar">
      {NAV_ITEMS.map(it => (
        <div key={it.id} onClick={() => onNavigate(it.id)} className={`nav-item${it.id===active?' active':''}`}>
          <span className="icon">{it.icon}</span>
          {it.badge && <span className="badge">{it.badge}</span>}
          <span className="label">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
