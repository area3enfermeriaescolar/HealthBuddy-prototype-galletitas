import React, { useState, useRef, useEffect } from 'react';
import { sendMessage, getChatMessages, createChat, getUserChats } from '../../services/chatService';
import { useAuth } from '../../contexts/AuthContext';

// Paleta de colores
const COLORS = {
  primary: '#00B7D8',
  primaryDark: '#0095B0',
  textDark: '#2C3E50',
  textMedium: '#4A6572',
  lightBg: '#F7FAFC',
  lightGrey: '#ECEFF1',
  accent: '#4CAF50',
  warning: '#FF9800',
  danger: '#E74C3C'
};

// Demo badge inline
const DemoBadge = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 10,
      right: 10,
      background: '#00B7D8',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: 20,
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: 0.5,
      zIndex: 1000,
    }}>
      DEMO
    </div>
  );
};

// Datos de ejemplo para modo demo
const chatsMockDemo = [
  {
    id: 'demo-est1',
    nre: '30012345',
    center: 'IES Mediterráneo',
    unread: true,
    participantIds: ['demo-professional', 'demo-student1'],
    lastMessage: {
      text: '¿Es seguro usar solo preservativo o debería combinar con otro método?',
      timestamp: new Date(Date.now() - 300000),
      senderId: 'demo-student1'
    },
  },
  {
    id: 'demo-est2',
    nre: '30023456',
    center: 'IES Mar Menor',
    unread: false,
    participantIds: ['demo-professional', 'demo-student2'],
    lastMessage: {
      text: 'Entiendo. ¿Te gustaría que hablemos sobre esto en tu próxima cita?',
      timestamp: new Date(Date.now() - 7200000),
      senderId: 'demo-professional'
    },
  },
  {
    id: 'demo-est3',
    nre: '30034567',
    center: 'IES Mar Menor',
    unread: true,
    participantIds: ['demo-professional', 'demo-student3'],
    lastMessage: {
      text: 'Hola, ¿cuándo es tu próxima visita a nuestro instituto?',
      timestamp: new Date(Date.now() - 14400000),
      senderId: 'demo-student3'
    },
  },
];

// Componente Principal de Chat Profesional
const ProfessionalChat = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const [search, setSearch] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [input, setInput] = useState('');
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Cargar chats del profesional
  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      
      const fetchChats = async () => {
        try {
          const result = await getUserChats(currentUser.uid, 'professional');
          if (result.success) {
            setChats(result.data);
          } else {
            console.error('Error loading chats:', result.message);
            setError('Error al cargar las conversaciones');
          }
          setLoading(false);
        } catch (err) {
          console.error('Error loading chats:', err);
          setError('Error al cargar las conversaciones');
          setLoading(false);
        }
      };
      
      fetchChats();
    } else {
      // Modo demo sin autenticación
      setChats(chatsMockDemo);
      setLoading(false);
    }
  }, [currentUser]);

  // Cargar mensajes del chat seleccionado
  useEffect(() => {
    if (selectedChat) {
      if (currentUser) {
        const unsubscribeMessages = getChatMessages(selectedChat.id, (chatMessages) => {
          setMessages(chatMessages);
        }, (err) => {
          console.error('Error loading messages:', err);
          setError('Error al cargar los mensajes');
        });

        return () => unsubscribeMessages();
      } else {
        // Modo demo - generar mensajes de ejemplo
        const demoMessages = [
          {
            id: '1',
            senderId: selectedChat.participantIds.find(id => id !== 'demo-professional'),
            text: getDemoMessageForChat(selectedChat.id),
            timestamp: new Date(Date.now() - 3600000),
            senderName: `Estudiante ${selectedChat.nre}`
          },
          {
            id: '2',
            senderId: 'demo-professional',
            text: 'Hola, cuéntame en qué puedo ayudarte.',
            timestamp: new Date(Date.now() - 3500000),
            senderName: 'Profesional'
          },
          {
            id: '3',
            senderId: selectedChat.participantIds.find(id => id !== 'demo-professional'),
            text: selectedChat.lastMessage.text,
            timestamp: selectedChat.lastMessage.timestamp,
            senderName: `Estudiante ${selectedChat.nre}`
          }
        ];
        setMessages(demoMessages);
      }
    }
  }, [selectedChat, currentUser]);

  // Función para obtener mensaje demo según el chat
  const getDemoMessageForChat = (chatId) => {
    const demoFirstMessages = {
      'demo-est1': 'Buenos días, tengo una duda sobre métodos anticonceptivos.',
      'demo-est2': 'No me encuentro bien hoy, tengo mucha ansiedad por los exámenes.',
      'demo-est3': 'Hola, ¿cuándo es tu próxima visita a nuestro instituto?',
    };
    return demoFirstMessages[chatId] || 'Hola, necesito ayuda con un tema de salud.';
  };

  // Auto-scroll cuando llegan nuevos mensajes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Agrupar chats por centro
  const groupedChats = chats.reduce((acc, chat) => {
    const centerName = chat.center || 'Centro Desconocido';
    if (!acc[centerName]) acc[centerName] = [];
    acc[centerName].push(chat);
    return acc;
  }, {});

  // Filtrar dentro de cada grupo
  const filterChat = (chat) =>
    (chat.nre && chat.nre.toLowerCase().includes(search.toLowerCase())) ||
    (chat.center && chat.center.toLowerCase().includes(search.toLowerCase()));

  // Manejador de envío de mensajes
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    if (currentUser && selectedChat) {
      try {
        // Obtener el ID del estudiante (el otro participante)
        const receiverId = selectedChat.participantIds.find(id => id !== currentUser.uid);
        
        await sendMessage(
          selectedChat.id,
          currentUser.uid,
          receiverId,
          input.trim()
        );
        
        setInput('');
        setError(null);
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
        setError('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } else {
      // Modo demo - simular envío
      console.log('Mensaje enviado (demo):', input);
      
      // Simular añadir mensaje a la conversación demo
      const newMessage = {
        id: Date.now().toString(),
        senderId: 'demo-professional',
        text: input,
        timestamp: new Date(),
        senderName: 'Profesional'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInput('');
      
      // Simular respuesta automática del estudiante después de un tiempo
      setTimeout(() => {
        const responses = [
          'Gracias por la información.',
          'Entiendo, lo tendré en cuenta.',
          '¿Podríamos hablar de esto en la próxima consulta?',
          'Vale, intentaré seguir tu consejo.',
          '¿Hay algo más que deba saber sobre esto?'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const studentId = selectedChat.participantIds.find(id => id !== 'demo-professional');
        
        const studentMessage = {
          id: (Date.now() + 1000).toString(),
          senderId: studentId,
          text: randomResponse,
          timestamp: new Date(),
          senderName: `Estudiante ${selectedChat.nre}`
        };
        
        setMessages(prev => [...prev, studentMessage]);
        
        // Marcar chat como con mensajes no leídos
        setChats(prevChats => 
          prevChats.map(chat => 
            chat.id === selectedChat.id 
              ? { ...chat, unread: true, lastMessage: studentMessage }
              : chat
          )
        );
      }, 2000 + Math.random() * 3000);
    }
    
    // Enfocar el input para continuar escribiendo
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // Marcar chat como leído cuando se selecciona
  const handleSelectChat = (chat) => {
    if (chat.unread) {
      const updatedChats = chats.map(c => 
        c.id === chat.id ? {...c, unread: false} : c
      );
      setChats(updatedChats);
      setSelectedChat({...chat, unread: false});
    } else {
      setSelectedChat(chat);
    }
    setError(null);
  };

  // Manejar envío con Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Formatear tiempo para mostrar
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Determinar si el mensaje es del profesional actual
  const isOwnMessage = (message) => {
    if (!currentUser) {
      return message.senderId === 'demo-professional';
    }
    return message.senderId === currentUser.uid;
  };

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.lightBg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <DemoBadge />
        <span style={{ color: COLORS.textMedium }}>Cargando conversaciones...</span>
      </div>
    );
  }

  // Renderizar la vista de lista de chats
  if (!selectedChat) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.lightBg,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <DemoBadge />
        
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '1rem',
          position: 'relative',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}>
          <button
            onClick={() => onNavigate('dashboard')}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: COLORS.primary, 
              fontSize: 16, 
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              cursor: 'pointer',
              padding: 0,
              position: 'absolute',
              left: '1rem'
            }}
          >
            <span style={{ fontSize: 20 }}>←</span> Atrás
          </button>
          <h1 style={{ 
            flex: 1, 
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            margin: 0,
          }}>Chat con estudiantes</h1>
        </div>
        
        {/* Error Display */}
        {error && (
          <div style={{
            margin: '1rem',
            padding: '12px',
            backgroundColor: '#ffebee',
            borderRadius: 8,
            borderLeft: `4px solid ${COLORS.danger}`,
            color: COLORS.danger,
            fontSize: 14
          }}>
            {error}
          </div>
        )}
        
        {/* Search Bar */}
        <div style={{ padding: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por NRE o centro"
              style={{
                width: '100%',
                padding: '8px 16px 8px 36px',
                borderRadius: 8,
                border: `1px solid ${COLORS.lightGrey}`,
                fontSize: 14
              }}
            />
            <span style={{ 
              position: 'absolute', 
              left: 12, 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: COLORS.textMedium,
              fontSize: 18
            }}>
              🔍
            </span>
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: COLORS.textMedium,
                  fontSize: 16,
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        {/* Unread Counter */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 1rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: 14, color: COLORS.textMedium }}>
            Conversaciones activas
          </span>
          <span style={{ 
            background: COLORS.primary, 
            color: 'white', 
            borderRadius: 20, 
            padding: '4px 12px',
            fontSize: 13,
            fontWeight: 500
          }}>
            {chats.filter(c => c.unread).length} sin leer
          </span>
        </div>
        
        {/* Chat List */}
        <div style={{ 
          flex: 1,
          overflowY: 'auto',
          padding: '0 1rem',
          paddingBottom: '80px', // Space for navbar
        }}>
          {Object.keys(groupedChats).length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px', 
              color: COLORS.textMedium 
            }}>
              <p>No tienes conversaciones activas.</p>
              <p style={{ fontSize: '0.9rem' }}>
                {currentUser 
                  ? 'Los estudiantes pueden iniciar conversaciones contigo desde su aplicación.'
                  : 'En modo demo se muestran conversaciones de ejemplo.'
                }
              </p>
            </div>
          ) : (
            Object.entries(groupedChats).map(([center, centerChats]) => {
              const visibleChats = centerChats.filter(filterChat);
              if (visibleChats.length === 0) return null;
              
              return (
                <div key={center} style={{ marginBottom: 24 }}>
                  <h2 style={{ 
                    color: COLORS.textDark, 
                    marginBottom: 12,
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <span style={{ fontSize: 18, color: COLORS.primary }}>🏫</span> {center}
                  </h2>
                  
                  {visibleChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => handleSelectChat(chat)}
                      style={{
                        background: 'white',
                        padding: 12,
                        borderRadius: 12,
                        marginBottom: 12,
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        borderLeft: chat.unread ? `4px solid ${COLORS.primary}` : 'none',
                        paddingLeft: chat.unread ? 8 : 12,
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                      }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ 
                            margin: 0, 
                            fontWeight: chat.unread ? 600 : 500,
                            color: COLORS.textDark,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: 14
                          }}>
                            <span style={{ fontSize: 16, color: COLORS.primary }}>👤</span>
                            NRE: {chat.nre}
                          </p>
                          <div style={{ 
                            fontSize: 12, 
                            color: chat.unread ? COLORS.textDark : COLORS.textMedium,
                            marginTop: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                          }}>
                            <span style={{ 
                              maxWidth: '180px', 
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              display: 'inline-block'
                            }}>
                              {chat.lastMessage ? chat.lastMessage.text : 'No hay mensajes'}
                            </span>
                            <span style={{ fontSize: 11, color: COLORS.textMedium }}>
                              • {chat.lastMessage ? formatTime(chat.lastMessage.timestamp) : ''}
                            </span>
                          </div>
                        </div>
                        {chat.unread && (
                          <span style={{ 
                            background: COLORS.primary, 
                            color: 'white', 
                            width: 24, 
                            height: 24, 
                            borderRadius: 12,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 'bold'
                          }}>
                            !
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })
          )}
        </div>
        
        {/* Navigation */}
        <div style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#fff',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0.6rem 0',
          zIndex: 40,
          height: '60px',
        }}>
          {[
            { id: 'dashboard', label: 'Inicio', icon: '🏠' },
            { id: 'chat', label: 'Chat', icon: '💬' },
            { id: 'appointments', label: 'Citas', icon: '📅' },
            { id: 'resources', label: 'Recursos', icon: '📚' }
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{ 
                textAlign: 'center', 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ 
                fontSize: '1.6rem',
                color: item.id === 'chat' ? COLORS.primary : COLORS.textMedium
              }}>
                {item.icon}
              </div>
              <span style={{
                fontSize: 12,
                color: item.id === 'chat' ? COLORS.primary : COLORS.textMedium,
                fontWeight: item.id === 'chat' ? 600 : 400,
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Vista de chat individual
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: COLORS.lightBg,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <DemoBadge />
      
      {/* Chat Header */}
      <div style={{ 
        background: 'white',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button 
              onClick={() => setSelectedChat(null)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: COLORS.primary,
                fontSize: 24,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              ←
            </button>
            <div>
              <h2 style={{ 
                margin: 0, 
                fontSize: 16, 
                color: COLORS.textDark,
                display: 'flex', 
                alignItems: 'center', 
                gap: 8 
              }}>
                <span style={{ fontSize: 18, color: COLORS.primary }}>👤</span> NRE: {selectedChat.nre}
              </h2>
              <p style={{ 
                fontSize: 13, 
                color: COLORS.textMedium, 
                margin: '4px 0 0 0',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                <span style={{ fontSize: 14, color: COLORS.primary }}>🏫</span> {selectedChat.center}
              </p>
            </div>
          </div>
          
          <button style={{
            background: 'none',
            border: `1px solid ${COLORS.primary}`,
            color: COLORS.primary,
            borderRadius: 8,
            padding: '6px 10px',
            fontSize: 13,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            <span>📋</span> Ver historial
          </button>
        </div>
      </div>

      {/* Confidentiality Notice */}
      <div style={{ 
        background: COLORS.danger, 
        color: 'white', 
        padding: '10px 12px', 
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13
      }}>
        <span style={{ fontSize: 16 }}>🔒</span> Esta consulta es confidencial y anónima.
      </div>

      {/* Error Display in Chat */}
      {error && (
        <div style={{
          margin: '12px',
          padding: '12px',
          backgroundColor: '#ffebee',
          borderRadius: 8,
          borderLeft: `4px solid ${COLORS.danger}`,
          color: COLORS.danger,
          fontSize: 14
        }}>
          {error}
        </div>
      )}

      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        paddingBottom: '80px', // Space for input
      }}>
        {messages.map((msg, idx) => {
          const isOwn = isOwnMessage(msg);
          return (
            <div 
              key={msg.id || idx} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: isOwn ? 'flex-end' : 'flex-start',
                marginBottom: 16
              }}
            >
              <div style={{ 
                background: isOwn ? COLORS.primary : 'white', 
                color: isOwn ? 'white' : COLORS.textDark, 
                padding: '10px 16px', 
                borderRadius: 16,
                borderBottomLeftRadius: isOwn ? 16 : 4,
                borderBottomRightRadius: isOwn ? 4 : 16,
                maxWidth: '80%',
                wordBreak: 'break-word',
                boxShadow: !isOwn ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                fontSize: 14
              }}>
                {msg.text}
              </div>
              <span style={{ 
                fontSize: 11, 
                color: COLORS.textMedium, 
                marginTop: 4,
                alignSelf: isOwn ? 'flex-end' : 'flex-start'
              }}>
                {formatTime(msg.timestamp)}
              </span>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div style={{
        position: 'absolute',
        bottom: '60px', // Just above navbar
        left: 0,
        right: 0,
        background: 'white',
        borderTop: `1px solid ${COLORS.lightGrey}`,
        padding: '8px 12px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      }}>
        <div style={{ 
          display: 'flex', 
          gap: 8,
          maxWidth: 800,
          margin: '0 auto'
        }}>
          <textarea 
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Escribe un mensaje..."
            disabled={!!error}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: 20,
              border: `1px solid ${COLORS.lightGrey}`,
              resize: 'none',
              fontSize: 14,
              minHeight: 40,
              maxHeight: 120,
              backgroundColor: COLORS.lightBg,
              fontFamily: 'inherit',
              outline: 'none',
              opacity: error ? 0.6 : 1
            }}
            rows={1}
          />
          <button 
            onClick={sendMessage}
            disabled={!input.trim() || !!error}
            style={{
              background: (input.trim() && !error) ? COLORS.primary : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: (input.trim() && !error) ? 'pointer' : 'not-allowed',
              fontSize: 20,
              flexShrink: 0
            }}
          >
            ↑
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0.6rem 0',
        zIndex: 40,
        height: '60px',
      }}>
        {[
          { id: 'dashboard', label: 'Inicio', icon: '🏠' },
          { id: 'chat', label: 'Chat', icon: '💬' },
          { id: 'appointments', label: 'Citas', icon: '📅' },
          { id: 'resources', label: 'Recursos', icon: '📚' }
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{ 
              textAlign: 'center', 
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ 
              fontSize: '1.6rem',
              color: item.id === 'chat' ? COLORS.primary : COLORS.textMedium
            }}>
              {item.icon}
            </div>
            <span style={{
              fontSize: 12,
              color: item.id === 'chat' ? COLORS.primary : COLORS.textMedium,
              fontWeight: item.id === 'chat' ? 600 : 400,
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalChat;