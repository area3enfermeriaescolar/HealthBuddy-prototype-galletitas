import React, { useState, useRef, useEffect } from 'react';
import { NavBar, DemoBadge } from '../common/CommonComponents';
import './StudentInterface.css';

/**
 * StudentChat - Versión optimizada para móviles
 */
function StudentChat({ onNavigate }) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Datos de ejemplo - solo enfermera escolar
  const chats = [
    {
      id: 1,
      name: 'Lucía Martínez',
      role: 'Enfermera Escolar',
      avatar: '👩‍⚕️',
      unread: 2,
      lastActive: 'Hace 10 min',
      messages: [
        { from: 'nurse', text: 'Hola, ¿cómo te encuentras hoy?', time: '10:30' },
        { from: 'student', text: 'Tengo algunas dudas sobre métodos anticonceptivos y no sé a quién preguntar.', time: '10:32' },
        { from: 'nurse', text: 'Gracias por confiar en mí. Es un tema importante y perfectamente normal tener dudas. ¿Qué te gustaría saber específicamente?', time: '10:33' },
        { from: 'nurse', text: 'Recuerda que toda nuestra conversación es confidencial.', time: '10:34' },
      ]
    }
  ];

  // Auto-scroll cuando llegan nuevos mensajes
  useEffect(() => {
    if (selectedChat) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedChat, chats.find(c => c.id === selectedChat)?.messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // Simular envío de mensaje
    console.log("Mensaje enviado:", newMessage);
    setNewMessage('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // Manejar envío al presionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // CSS para agregar directamente en la página
  const inlineStyles = `
    /* Estilos básicos garantizados para móviles */
    .app-chat-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background-color: #F5FBFD;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
    }
    
    .app-message-list-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 60px; /* Espacio para NavBar */
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      max-width: 100%;
      padding: 0;
    }
    
    .app-message-header {
      padding: 16px;
      text-align: center;
      background-color: white;
      position: sticky;
      top: 0;
      z-index: 2;
      width: 100%;
    }
    
    .app-message-title {
      margin: 0;
      font-size: 1.2rem;
      color: #002D3A;
    }
    
    .app-message-subtitle {
      margin: 4px 0 0 0;
      font-size: 0.9rem;
      color: #4A6572;
    }
    
    .app-message-info {
      margin: 12px;
      padding: 12px;
      background-color: #fff9c4;
      border-radius: 8px;
      text-align: center;
    }
    
    .app-message-info-title {
      margin: 0;
      font-weight: 500;
      font-size: 0.9rem;
      color: #002D3A;
    }
    
    .app-message-info-desc {
      margin: 4px 0 0 0;
      font-size: 0.8rem;
      color: #4A6572;
    }
    
    .app-message-list {
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 60px;
    }
    
    .app-message-item {
      background-color: white;
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 12px;
      display: flex;
      width: 100%;
      box-sizing: border-box;
    }
    
    .app-message-item.unread {
      border-left: 4px solid #00B7D8;
    }
    
    .app-message-avatar {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      background-color: #F5FBFD;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      font-size: 1.5rem;
    }
    
    .app-message-avatar.unread {
      background-color: rgba(0,183,216,0.1);
    }
    
    .app-message-content {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }
    
    .app-message-header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }
    
    .app-message-name {
      margin: 0;
      font-weight: 500;
      font-size: 1rem;
      color: #002D3A;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-message-name.unread {
      font-weight: 600;
    }
    
    .app-message-role {
      margin: 2px 0 0 0;
      font-size: 0.8rem;
      color: #4A6572;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-message-meta {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    
    .app-message-time {
      font-size: 0.75rem;
      color: #4A6572;
    }
    
    .app-message-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background-color: #00B7D8;
      color: white;
      border-radius: 50%;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 4px;
    }
    
    .app-message-preview {
      margin: 8px 0 0 0;
      font-size: 0.85rem;
      color: #4A6572;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-message-preview.unread {
      color: #002D3A;
    }
    
    /* Chat individual */
    .app-chat-header {
      display: flex;
      align-items: center;
      padding: 12px;
      background: white;
      box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    }
    
    .app-chat-back {
      font-size: 1.5rem;
      color: #00B7D8;
      margin-right: 12px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }
    
    .app-chat-profile {
      display: flex;
      align-items: center;
      flex: 1;
    }
    
    .app-chat-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F5FBFD;
      margin-right: 12px;
      font-size: 1.5rem;
    }
    
    .app-chat-info {
      flex: 1;
      min-width: 0;
    }
    
    .app-chat-name {
      margin: 0;
      font-weight: 600;
      font-size: 1rem;
      color: #002D3A;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-chat-role {
      margin: 2px 0 0 0;
      font-size: 0.8rem;
      color: #4A6572;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-chat-privacy {
      padding: 12px;
      background-color: #ffebee;
      border-left: 4px solid #d32f2f;
      display: flex;
      align-items: center;
    }
    
    .app-chat-privacy-icon {
      color: #d32f2f;
      font-size: 1.5rem;
      margin-right: 8px;
    }
    
    .app-chat-privacy-content {
      flex: 1;
    }
    
    .app-chat-privacy-title {
      margin: 0;
      font-weight: 600;
      font-size: 0.9rem;
      color: #d32f2f;
    }
    
    .app-chat-privacy-text {
      margin: 4px 0 0 0;
      font-size: 0.8rem;
      color: #002D3A;
    }
    
    .app-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 76px;
    }
    
    .app-chat-message {
      display: flex;
      margin-bottom: 12px;
      align-items: flex-end;
    }
    
    .app-chat-message-avatar {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      background-color: #F5FBFD;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      font-size: 1.2rem;
    }
    
    .app-chat-message.outgoing {
      flex-direction: row-reverse;
    }
    
    .app-chat-bubble {
      padding: 8px 12px;
      border-radius: 18px;
      max-width: 75%;
      word-break: break-word;
    }
    
    .app-chat-bubble.incoming {
      background: white;
      color: #002D3A;
      border-bottom-left-radius: 4px;
    }
    
    .app-chat-bubble.outgoing {
      background: #00B7D8;
      color: white;
      border-bottom-right-radius: 4px;
    }
    
    .app-chat-time {
      font-size: 0.7rem;
      color: #4A6572;
      margin-top: 4px;
    }
    
    .app-chat-message.outgoing .app-chat-time {
      text-align: right;
    }
    
    .app-chat-input-area {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 60px;
      background: white;
      padding: 8px;
      display: flex;
      align-items: center;
      box-shadow: 0 -1px 4px rgba(0,0,0,0.1);
    }
    
    .app-chat-input {
      flex: 1;
      border: none;
      padding: 8px 12px;
      background: #F5FBFD;
      border-radius: 20px;
      font-size: 0.9rem;
      resize: none;
      outline: none;
      font-family: inherit;
    }
    
    .app-chat-send {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #00B7D8;
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
      cursor: pointer;
      font-size: 1.2rem;
    }
    
    .app-chat-send:disabled {
      background-color: #e0e0e0;
      cursor: default;
    }
    
    /* Hack para iOS */
    @supports (-webkit-touch-callout: none) {
      .app-chat-container, .app-chat-list-container {
        height: -webkit-fill-available;
      }
    }
  `;

  // Agregar estilos directamente al head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = inlineStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  if (!selectedChat) {
    // Vista de lista de mensajes
    return (
      <div className="app-chat-container">
        <DemoBadge />
        
        <div className="app-message-list-container">
          <div className="app-message-header">
            <h1 className="app-message-title">Mensajes</h1>
            <p className="app-message-subtitle">Consulta con profesionales sanitarios</p>
          </div>
          
          <div className="app-message-info">
            <p className="app-message-info-title">
              Horario de atención: Lunes - Viernes, 08:00 - 15:00
            </p>
            <p className="app-message-info-desc">
              Recibirás una respuesta dentro del horario de atención.
            </p>
          </div>
          
          <div className="app-message-list">
            {chats.map((chat) => (
              <div 
                key={chat.id}
                className={`app-message-item ${chat.unread ? 'unread' : ''}`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className={`app-message-avatar ${chat.unread ? 'unread' : ''}`}>
                  {chat.avatar}
                </div>
                
                <div className="app-message-content">
                  <div className="app-message-header-row">
                    <div>
                      <h3 className={`app-message-name ${chat.unread ? 'unread' : ''}`}>
                        {chat.name}
                      </h3>
                      <p className="app-message-role">{chat.role}</p>
                    </div>
                    
                    <div className="app-message-meta">
                      <span className="app-message-time">{chat.lastActive}</span>
                      {chat.unread > 0 && (
                        <div className="app-message-badge">{chat.unread}</div>
                      )}
                    </div>
                  </div>
                  
                  {chat.messages.length > 0 && (
                    <p className={`app-message-preview ${chat.unread ? 'unread' : ''}`}>
                      {chat.messages[chat.messages.length - 1].text}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <NavBar active="chat" onNavigate={onNavigate} userType="student" />
      </div>
    );
  }

  // Vista de chat individual
  const currentChat = chats.find(c => c.id === selectedChat);
  
  return (
    <div className="app-chat-container">
      <DemoBadge />
      
      <div className="app-chat-header">
        <button className="app-chat-back" onClick={() => setSelectedChat(null)}>
          ←
        </button>
        
        <div className="app-chat-profile">
          <div className="app-chat-avatar">{currentChat?.avatar}</div>
          
          <div className="app-chat-info">
            <h3 className="app-chat-name">{currentChat?.name}</h3>
            <p className="app-chat-role">{currentChat?.role}</p>
          </div>
        </div>
      </div>
      
      <div className="app-chat-privacy">
        <div className="app-chat-privacy-icon">🔒</div>
        <div className="app-chat-privacy-content">
          <p className="app-chat-privacy-title">Consulta confidencial y anónima</p>
          <p className="app-chat-privacy-text">
            Tu privacidad está protegida. Nadie más tendrá acceso a esta conversación.
          </p>
        </div>
      </div>
      
      <div className="app-chat-messages">
        {currentChat?.messages.map((msg, idx) => (
          <div 
            key={idx}
            className={`app-chat-message ${msg.from === 'student' ? 'outgoing' : 'incoming'}`}
          >
            {msg.from !== 'student' && (
              <div className="app-chat-message-avatar">
                {currentChat?.avatar}
              </div>
            )}
            
            <div>
              <div className={`app-chat-bubble ${msg.from === 'student' ? 'outgoing' : 'incoming'}`}>
                {msg.text}
              </div>
              <div className="app-chat-time">{msg.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="app-chat-input-area">
        <textarea
          ref={inputRef}
          className="app-chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe un mensaje..."
          rows={1}
        />
        <button
          className="app-chat-send"
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          ↑
        </button>
      </div>
      
      <NavBar active="chat" onNavigate={onNavigate} userType="student" />
    </div>
  );
}

export default StudentChat;