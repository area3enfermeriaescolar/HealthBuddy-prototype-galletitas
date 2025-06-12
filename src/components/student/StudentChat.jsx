import React, { useState, useRef, useEffect } from 'react';
import { NavBar, DemoBadge } from '../common/CommonComponents';
import './StudentInterface.css';
import { sendMessage, getChatMessages, createChat, getChatsForUser } from '../../services/chatService';
import { useAuth } from '../../contexts/AuthContext';

/**
 * StudentChat - Versión optimizada para móviles con integración Firebase
 */
function StudentChat({ onNavigate }) {
  const { currentUser } = useAuth();
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Datos de ejemplo para modo demo (cuando no hay usuario autenticado)
  const demoChats = [
    {
      id: 'demo-chat-1',
      name: 'Lucía Martínez',
      role: 'Enfermera Escolar',
      avatar: '👩‍⚕️',
      unread: 2,
      lastActive: 'Hace 10 min',
      participantIds: ['demo-student', 'demo-nurse'],
      lastMessage: {
        text: 'Recuerda que toda nuestra conversación es confidencial.',
        timestamp: new Date()
      }
    }
  ];

  const demoMessages = [
    { 
      id: '1',
      senderId: 'demo-nurse', 
      text: 'Hola, ¿cómo te encuentras hoy?', 
      timestamp: new Date(Date.now() - 3600000),
      senderName: 'Lucía Martínez'
    },
    { 
      id: '2',
      senderId: 'demo-student', 
      text: 'Tengo algunas dudas sobre métodos anticonceptivos y no sé a quién preguntar.', 
      timestamp: new Date(Date.now() - 3500000),
      senderName: 'Estudiante'
    },
    { 
      id: '3',
      senderId: 'demo-nurse', 
      text: 'Gracias por confiar en mí. Es un tema importante y perfectamente normal tener dudas. ¿Qué te gustaría saber específicamente?', 
      timestamp: new Date(Date.now() - 3400000),
      senderName: 'Lucía Martínez'
    },
    { 
      id: '4',
      senderId: 'demo-nurse', 
      text: 'Recuerda que toda nuestra conversación es confidencial.', 
      timestamp: new Date(Date.now() - 3300000),
      senderName: 'Lucía Martínez'
    },
  ];

  // Cargar chats del usuario
  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      const unsubscribeChats = getChatsForUser(currentUser.uid, (chats) => {
        setUserChats(chats);
        setLoading(false);
        
        // Seleccionar el primer chat por defecto si existe
        if (!selectedChat && chats.length > 0) {
          setSelectedChat(chats[0]);
        }
      }, (err) => {
        console.error('Error loading chats:', err);
        setError('Error al cargar las conversaciones');
        setLoading(false);
      });

      return () => unsubscribeChats();
    } else {
      // Modo demo sin autenticación
      setUserChats(demoChats);
      setLoading(false);
    }
  }, [currentUser]);

  // Cargar mensajes del chat seleccionado
  useEffect(() => {
    if (selectedChat) {
      if (currentUser) {
        const unsubscribeMessages = getChatMessages(selectedChat.id, (msgs) => {
          setMessages(msgs);
        }, (err) => {
          console.error('Error loading messages:', err);
          setError('Error al cargar los mensajes');
        });

        return () => unsubscribeMessages();
      } else {
        // Modo demo
        setMessages(demoMessages);
      }
    }
  }, [selectedChat, currentUser]);

  // Auto-scroll cuando llegan nuevos mensajes
  useEffect(() => {
    if (selectedChat && messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedChat, messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    
    if (currentUser && selectedChat) {
      try {
        // Obtener el ID del otro participante (profesional)
        const receiverId = selectedChat.participantIds.find(id => id !== currentUser.uid);
        
        await sendMessage(
          selectedChat.id,
          currentUser.uid,
          receiverId,
          newMessage.trim()
        );
        
        setNewMessage('');
        setError(null);
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
        setError('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } else {
      // Modo demo - simular envío
      console.log("Mensaje enviado (demo):", newMessage);
      setNewMessage('');
      
      // Simular respuesta automática después de un tiempo
      setTimeout(() => {
        const responses = [
          "Gracias por tu mensaje. Te responderé pronto.",
          "Entiendo tu consulta. ¿Podrías darme más detalles?",
          "Esa es una muy buena pregunta. Déjame explicarte...",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // En una implementación real, esto vendría del servidor
        console.log("Respuesta automática (demo):", randomResponse);
      }, 2000);
    }
    
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

  // Crear nuevo chat con profesional
  const handleCreateNewChat = async (professionalId) => {
    if (!currentUser) {
      console.log('Modo demo: no se puede crear chat real');
      return;
    }

    try {
      const newChatId = await createChat([currentUser.uid, professionalId]);
      // El chat se añadirá automáticamente a userChats a través del listener
      setError(null);
    } catch (error) {
      console.error('Error al crear chat:', error);
      setError('Error al iniciar la conversación');
    }
  };

  // Formatear tiempo para mostrar
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Determinar si el mensaje es del usuario actual
  const isOwnMessage = (message) => {
    if (!currentUser) {
      return message.senderId === 'demo-student';
    }
    return message.senderId === currentUser.uid;
  };

  // CSS para agregar directamente en la página (manteniendo el CSS original)
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
      cursor: pointer;
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
    
    .app-error {
      margin: 12px;
      padding: 12px;
      background-color: #ffebee;
      border-radius: 8px;
      border-left: 4px solid #d32f2f;
      color: #d32f2f;
      font-size: 0.9rem;
    }
    
    .app-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      color: #4A6572;
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

  if (loading) {
    return (
      <div className="app-chat-container">
        <DemoBadge />
        <div className="app-loading">
          <span>Cargando conversaciones...</span>
        </div>
        <NavBar active="chat" onNavigate={onNavigate} userType="student" />
      </div>
    );
  }

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
          
          {error && (
            <div className="app-error">
              {error}
            </div>
          )}
          
          <div className="app-message-info">
            <p className="app-message-info-title">
              Horario de atención: Lunes - Viernes, 08:00 - 15:00
            </p>
            <p className="app-message-info-desc">
              Recibirás una respuesta dentro del horario de atención.
            </p>
          </div>
          
          <div className="app-message-list">
            {userChats.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px 20px', 
                color: '#4A6572' 
              }}>
                <p>No tienes conversaciones activas.</p>
                <p style={{ fontSize: '0.9rem' }}>
                  {currentUser 
                    ? 'Contacta con un profesional sanitario para iniciar una consulta.'
                    : 'En modo demo se muestra una conversación de ejemplo.'
                  }
                </p>
              </div>
            ) : (
              userChats.map((chat) => {
                const hasUnread = chat.unread || (chat.lastMessage && !chat.lastMessage.read);
                const lastMessageText = chat.lastMessage ? chat.lastMessage.text : 'No hay mensajes';
                const lastActiveTime = chat.lastMessage 
                  ? formatTime(chat.lastMessage.timestamp)
                  : chat.lastActive || '';

                return (
                  <div 
                    key={chat.id}
                    className={`app-message-item ${hasUnread ? 'unread' : ''}`}
                    onClick={() => setSelectedChat(chat)}
                  >
                    <div className={`app-message-avatar ${hasUnread ? 'unread' : ''}`}>
                      {chat.avatar || '👩‍⚕️'}
                    </div>
                    
                    <div className="app-message-content">
                      <div className="app-message-header-row">
                        <div>
                          <h3 className={`app-message-name ${hasUnread ? 'unread' : ''}`}>
                            {chat.name || 'Profesional Sanitario'}
                          </h3>
                          <p className="app-message-role">{chat.role || 'Profesional de la Salud'}</p>
                        </div>
                        
                        <div className="app-message-meta">
                          <span className="app-message-time">{lastActiveTime}</span>
                          {hasUnread && (
                            <div className="app-message-badge">!</div>
                          )}
                        </div>
                      </div>
                      
                      <p className={`app-message-preview ${hasUnread ? 'unread' : ''}`}>
                        {lastMessageText}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        
        <NavBar active="chat" onNavigate={onNavigate} userType="student" />
      </div>
    );
  }

  // Vista de chat individual
  const currentChat = selectedChat;
  
  return (
    <div className="app-chat-container">
      <DemoBadge />
      
      <div className="app-chat-header">
        <button className="app-chat-back" onClick={() => setSelectedChat(null)}>
          ←
        </button>
        
        <div className="app-chat-profile">
          <div className="app-chat-avatar">{currentChat?.avatar || '👩‍⚕️'}</div>
          
          <div className="app-chat-info">
            <h3 className="app-chat-name">{currentChat?.name || 'Profesional Sanitario'}</h3>
            <p className="app-chat-role">{currentChat?.role || 'Profesional de la Salud'}</p>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="app-error">
          {error}
        </div>
      )}
      
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
        {messages.map((msg, idx) => {
          const isOwn = isOwnMessage(msg);
          return (
            <div 
              key={msg.id || idx}
              className={`app-chat-message ${isOwn ? 'outgoing' : 'incoming'}`}
            >
              {!isOwn && (
                <div className="app-chat-message-avatar">
                  {currentChat?.avatar || '👩‍⚕️'}
                </div>
              )}
              
              <div>
                <div className={`app-chat-bubble ${isOwn ? 'outgoing' : 'incoming'}`}>
                  {msg.text}
                </div>
                <div className="app-chat-time">
                  {formatTime(msg.timestamp)}
                </div>
              </div>
            </div>
          );
        })}
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
          disabled={!!error}
        />
        <button
          className="app-chat-send"
          onClick={handleSendMessage}
          disabled={!newMessage.trim() || !!error}
        >
          ↑
        </button>
      </div>
      
      <NavBar active="chat" onNavigate={onNavigate} userType="student" />
    </div>
  );
}

export default StudentChat;