import React from 'react';

export default function Alert({ type, children }) {
  const ICON = { warning: '⚠️', danger: '🚨', info: 'ℹ️' }[type] || 'ℹ️';
  return (
    <div className={`alert ${type}`}>
      <span className="icon">{ICON}</span>
      <div className="content">{children}</div>
    </div>
  );
}
