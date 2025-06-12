import React, { useState } from 'react';
import './StudentInterface.css';
import './NotificationSystem.css';

// Componente inline para la etiqueta de demo
const DemoBadge = () => {
  return (
    <div className="demo-badge">DEMO</div>
  );
};

function StudentNotifications() {
  const [selectedNotification, setSelectedNotification] = useState(null);
  
  const notifications = [
    {
      id: 1,
      type: 'reminder',
      title: 'Consulta Joven mañana',
      message: 'Recuerda que mañana martes 15 de abril la enfermera escolar estará disponible de 10:00 a 11:00 en la Sala 12, junto a Orientación.',
      date: '14/04/2025',
      time: '15:30',
      read: false,
      actions: ['solicitar_cita']
    },
    {
      id: 2,
      type: 'change',
      title: 'Cambio de horario - Consulta Joven',
      message: 'La consulta del jueves 17 de abril cambia su horario habitual. Nueva hora: 11:30 a 12:30. Motivo: Reunión de coordinación sanitaria.',
      date: '13/04/2025',
      time: '09:15',
      read: true,
      actions: ['solicitar_cita']
    },
    {
      id: 3,
      type: 'cancellation',
      title: 'Cancelación - Consulta Joven',
      message: 'La consulta presencial del lunes 21 de abril ha sido cancelada. Motivo: Formación obligatoria del personal sanitario. Alternativa: Atención disponible vía chat.',
      date: '12/04/2025',
      time: '14:20',
      read: true,
      actions: ['abrir_chat']
    },
    {
      id: 4,
      type: 'remote',
      title: 'Atención remota - Consulta Joven',
      message: 'La consulta del miércoles 16 de abril será exclusivamente vía chat. Horario: 10:00 a 12:00. Motivo: Obras en la sala habitual.',
      date: '11/04/2025',
      time: '16:45',
      read: true,
      actions: ['abrir_chat']
    }
  ];
  
  const handleBack = () => {
    setSelectedNotification(null);
  };
  
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'reminder':
        return '🔔';
      case 'change':
        return '🕒';
      case 'cancellation':
        return '❌';
      case 'remote':
        return '💻';
      default:
        return '📩';
    }
  };
  
  const getActionButton = (action) => {
    switch(action) {
      case 'solicitar_cita':
        return (
          <button className="notification-action-button appointment">
            Solicitar cita
          </button>
        );
      case 'abrir_chat':
        return (
          <button className="notification-action-button chat">
            Abrir chat
          </button>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="student-screen">
      <DemoBadge />
      
      {!selectedNotification ? (
        <>
          <h1 className="screen-title">Notificaciones</h1>
          
          <div className="notifications-list">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => setSelectedNotification(notification)}
              >
                <div className={`notification-icon ${notification.type}`}>
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h3>{notification.title}</h3>
                    <span className="notification-time">{notification.date}</span>
                  </div>
                  <p className="notification-preview">
                    {notification.message.length > 80 
                      ? `${notification.message.substring(0, 80)}...` 
                      : notification.message}
                  </p>
                </div>
                {!notification.read && (
                  <div className="notification-badge"></div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="notification-detail">
          <button className="back-button" onClick={handleBack}>
            ← Volver a notificaciones
          </button>
          
          <div className={`notification-detail-icon ${selectedNotification.type}`}>
            {getNotificationIcon(selectedNotification.type)}
          </div>
          
          <h2 className="notification-detail-title">
            {selectedNotification.title}
          </h2>
          
          <div className="notification-detail-meta">
            <span className="notification-detail-date">{selectedNotification.date}</span>
            <span className="notification-detail-time">{selectedNotification.time}</span>
          </div>
          
          <p className="notification-detail-message">
            {selectedNotification.message}
          </p>
          
          <div className="notification-actions">
            {selectedNotification.actions.map((action, index) => (
              <div key={index}>
                {getActionButton(action)}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bottom-navigation">
        <div className="nav-item">
          <div className="nav-icon">🏠</div>
          <span className="nav-text">Inicio</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">💬</div>
          <span className="nav-text">Chat</span>
        </div>
        <div className="nav-item">
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

export default StudentNotifications;