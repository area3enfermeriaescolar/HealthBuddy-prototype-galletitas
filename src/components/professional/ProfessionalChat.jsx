import React, { useState, useRef, useEffect } from 'react';
import ProfessionalLayout from './ProfessionalLayout';

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

// Datos de ejemplo mejorados: chats agrupados por estudiante, cada uno tiene un centro y mensajes
const chatsMock = [
  {
    id: 'est1',
    nre: '30012345',
    center: 'IES Mediterráneo',
    unread: true,
    messages: [
      { from: 'student', text: 'Buenos días, tengo una duda sobre métodos anticonceptivos.', ts: '10:00' },
      { from: 'pro', text: 'Hola, cuéntame en qué puedo ayudarte.', ts: '10:02' },
      { from: 'student', text: '¿Es seguro usar solo preservativo o debería combinar con otro método?', ts: '10:03' },
    ],
  },
  {
    id: 'est2',
    nre: '30023456',
    center: 'IES Mar Menor',
    unread: false,
    messages: [
      { from: 'student', text: 'No me encuentro bien hoy, tengo mucha ansiedad por los exámenes.', ts: '09:30' },
      { from: 'pro', text: 'Lamento escuchar eso. ¿Has probado alguna técnica de relajación?', ts: '09:35' },
      { from: 'student', text: 'He intentado respirar profundo pero no me funciona mucho.', ts: '09:40' },
      { from: 'pro', text: 'Entiendo. ¿Te gustaría que hablemos sobre esto en tu próxima cita? Podría enseñarte algunas técnicas más efectivas.', ts: '09:42' },
    ],
  },
  {
    id: 'est3',
    nre: '30034567',
    center: 'IES Mar Menor',
    unread: true,
    messages: [
      { from: 'student', text: 'Hola, ¿cuándo es tu próxima visita a nuestro instituto?', ts: '11:15' },
    ],
  },
  {
    id: 'est4',
    nre: '30045678',
    center: 'IES San Juan Bosco',
    unread: false,
    messages: [
      { from: 'student', text: 'Gracias por la información de ayer, me ha sido muy útil.', ts: '08:45' },
      { from: 'pro', text: 'Me alegro mucho. Recuerda que estoy aquí para lo que necesites.', ts: '09:00' },
    ],
  },
  {
    id: 'est5',
    nre: '30056789',
    center: 'IES San Juan Bosco',
    unread: true,
    messages: [
      { from: 'student', text: 'Tengo un problema con un compañero de clase, ¿podríamos hablar?', ts: '10:30' },
    ],
  },
];

// Componente Principal de Chat (más responsive)
const ProfessionalChat = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [input, setInput] = useState('');
  const [chats, setChats] = useState(chatsMock);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Desplazarse al final del chat cuando cambian los mensajes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat?.messages]);

  // Agrupar chats por centro
  const groupedChats = chats.reduce((acc, chat) => {
    if (!acc[chat.center]) acc[chat.center] = [];
    acc[chat.center].push(chat);
    return acc;
  }, {});

  // Filtrar dentro de cada grupo
  const filterChat = (chat) =>
    chat.nre.toLowerCase().includes(search.toLowerCase()) ||
    chat.center.toLowerCase().includes(search.toLowerCase());

  // Manejador de envío de mensajes
  const sendMessage = () => {
    if (!input.trim()) return;
    
    // Crear una copia del array de chats
    const updatedChats = [...chats];
    
    // Encontrar y actualizar el chat seleccionado
    const chatIndex = updatedChats.findIndex(c => c.id === selectedChat.id);
    if (chatIndex !== -1) {
      // Crear una copia del chat seleccionado
      const updatedChat = {...updatedChats[chatIndex]};
      
      // Añadir el nuevo mensaje
      updatedChat.messages = [
        ...updatedChat.messages,
        { 
          from: 'pro', 
          text: input, 
          ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
      ];
      
      // Marcar como leído
      updatedChat.unread = false;
      
      // Actualizar el chat en el array
      updatedChats[chatIndex] = updatedChat;
      
      // Actualizar el estado
      setChats(updatedChats);
      
      // Actualizar la selección actual
      setSelectedChat(updatedChat);
    }
    
    // Limpiar el input
    setInput('');
    
    // Enfocar el input para continuar escribiendo
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // Marcar chat como leído cuando se selecciona
  const handleSelectChat = (chat) => {
    // Si el chat está sin leer, marcarlo como leído
    if (chat.unread) {
      const updatedChats = chats.map(c => 
        c.id === chat.id ? {...c, unread: false} : c
      );
      setChats(updatedChats);
      // Actualizar el chat seleccionado con la versión actualizada
      setSelectedChat({...chat, unread: false});
    } else {
      setSelectedChat(chat);
    }
  };

  // Simular respuesta automática después de enviar un mensaje (solo para demo)
  useEffect(() => {
    if (selectedChat && selectedChat.messages.length > 0) {
      const lastMessage = selectedChat.messages[selectedChat.messages.length - 1];
      
      // Si el último mensaje es del profesional y hay más de un mensaje
      if (lastMessage.from === 'pro' && selectedChat.messages.length > 1) {
        // Simular una respuesta después de un tiempo aleatorio (solo en algunos casos)
        const shouldRespond = Math.random() > 0.7; // 30% de probabilidad
        
        if (shouldRespond) {
          const responseTime = 2000 + Math.random() * 3000; // Entre 2 y 5 segundos
          
          const responseTimer = setTimeout(() => {
            const responses = [
              "Gracias por la información.",
              "Entiendo, lo tendré en cuenta.",
              "¿Podríamos hablar de esto en la próxima consulta?",
              "Vale, intentaré seguir tu consejo.",
              "¿Hay algo más que deba saber sobre esto?"
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            // Actualizar el chat con la respuesta automática
            const updatedChats = [...chats];
            const chatIndex = updatedChats.findIndex(c => c.id === selectedChat.id);
            
            if (chatIndex !== -1) {
              const updatedChat = {...updatedChats[chatIndex]};
              updatedChat.messages = [
                ...updatedChat.messages,
                { 
                  from: 'student', 
                  text: randomResponse, 
                  ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                }
              ];
              updatedChat.unread = true;
              
              updatedChats[chatIndex] = updatedChat;
              setChats(updatedChats);
              
              // Si todavía estamos en el mismo chat, actualizar la selección
              if (selectedChat && selectedChat.id === updatedChat.id) {
                setSelectedChat(updatedChat);
              }
            }
          }, responseTime);
          
          return () => clearTimeout(responseTimer);
        }
      }
    }
  }, [selectedChat, chats]);

  // Manejar envío con Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleBack = () => {
    if (selectedChat) {
      setSelectedChat(null);
    } else {
      onNavigate('dashboard');
    }
  };

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
          {Object.entries(groupedChats).map(([center, centerChats]) => {
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
                            {chat.messages.slice(-1)[0].text}
                          </span>
                          <span style={{ fontSize: 11, color: COLORS.textMedium }}>
                            • {chat.messages.slice(-1)[0].ts}
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
          })}
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

      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        paddingBottom: '80px', // Space for input
      }}>
        {selectedChat.messages.map((msg, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: msg.from === 'pro' ? 'flex-end' : 'flex-start',
              marginBottom: 16
            }}
          >
            <div style={{ 
              background: msg.from === 'pro' ? COLORS.primary : 'white', 
              color: msg.from === 'pro' ? 'white' : COLORS.textDark, 
              padding: '10px 16px', 
              borderRadius: 16,
              borderBottomLeftRadius: msg.from === 'pro' ? 16 : 4,
              borderBottomRightRadius: msg.from === 'pro' ? 4 : 16,
              maxWidth: '80%',
              wordBreak: 'break-word',
              boxShadow: msg.from === 'student' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              fontSize: 14
            }}>
              {msg.text}
            </div>
            <span style={{ 
              fontSize: 11, 
              color: COLORS.textMedium, 
              marginTop: 4,
              alignSelf: msg.from === 'pro' ? 'flex-end' : 'flex-start'
            }}>
              {msg.ts}
            </span>
          </div>
        ))}
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
            }}
            rows={1}
          />
          <button 
            onClick={sendMessage}
            disabled={!input.trim()}
            style={{
              background: input.trim() ? COLORS.primary : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
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