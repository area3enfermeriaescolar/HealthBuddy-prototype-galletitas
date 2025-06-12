import React from 'react';

export default function ActionCard({ icon, title, onClick, highlight }) {
  return (
    <div className={`action-card${highlight?' highlight':''}`} onClick={onClick}>
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
    </div>
  );
}
