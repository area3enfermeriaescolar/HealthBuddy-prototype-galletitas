import React, { useState, useEffect, useRef } from 'react';
import { NavBar, DemoBadge } from '../common/CommonComponents';
import './StudentInterface.css';
import { sendMessage, getChatMessages, createChat, getUserChats, subscribeToChatMessages } from '../../services/chatService'; // Modificado: getChatsForUser -> getUserChats
import { useAuth } from '../../contexts/AuthContext';

const StudentChat = () => {
  const { currentUser } = useAuth();
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (currentUser) {
      const fetchChats = async () => {
        const result = await getUserChats(currentUser.uid, currentUser.role); // Usar getUserChats
        if (result.success) {
          setUserChats(result.data);
          if (result.data.length > 0) {
            setSelectedChat(result.data[0]); // Seleccionar el primer chat por defecto
          }
        }
      };
      fetchChats();
    }
  }, [currentUser]);

  useEffect(() => {
    if (selectedChat) {
      const unsubscribe = subscribeToChatMessages(selectedChat.id, (newMessages) => {
        setMessages(newMessages);
      });
      return () => unsubscribe();
    }
  }, [selectedChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (messageText.trim() && selectedChat && currentUser) {
      const messageData = {
        text: messageText,
        senderId: currentUser.uid,
        from: currentUser.role, // 'student' o 'professional'
        timestamp: new Date(),
      };
      const result = await sendMessage(selectedChat.id, messageData);
      if (result.success) {
        setMessageText('');
      } else {
        console.error('Error al enviar mensaje:', result.error);
      }
    }
  };

  const handleCreateNewChat = async (professionalId) => {
    if (!currentUser) return;
    try {
      const result = await createChat(currentUser.uid, professionalId);
      if (result.success) {
        setSelectedChat(result.data);
        // Actualizar la lista de chats del usuario
        const updatedChatsResult = await getUserChats(currentUser.uid, currentUser.role);
        if (updatedChatsResult.success) {
          setUserChats(updatedChatsResult.data);
        }
      } else {
        console.error('Error al crear chat:', result.error);
      }
    } catch (error) {
      console.error('Error al crear chat:', error);
    }
  };

  if (!currentUser) {
    return <div>Cargando usuario...</div>; // O un componente de carga/redirección
  }

  return (
    <div className="student-chat-container">
      <NavBar />
      <DemoBadge />
      <div className="chat-interface">
        <div className="chat-sidebar">
          <h3>Tus Chats</h3>
          {userChats.length === 0 ? (
            <p>No tienes chats activos. Inicia una conversación con un profesional.</p>
          ) : (
            <ul>
              {userChats.map((chat) => (
                <li
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={selectedChat?.id === chat.id ? 'selected' : ''}
                >
                  {currentUser.role === 'student' ? chat.professionalName : chat.studentName}
                </li>
              ))}
            </ul>
          )}
          {/* Botón o lógica para iniciar un nuevo chat */}
          <button onClick={() => handleCreateNewChat('PROFESSIONAL_ID_EXAMPLE')}>
            Iniciar Nuevo Chat
          </button>
        </div>
        <div className="chat-main">
          {selectedChat ? (
            <>
              <div className="chat-header">
                <h2>Chat con {currentUser.role === 'student' ? selectedChat.professionalName : selectedChat.studentName}</h2>
              </div>
              <div className="messages-list">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`message ${msg.senderId === currentUser.uid ? 'sent' : 'received'}`}
                  >
                    <p>{msg.text}</p>
                    <span>{new Date(msg.timestamp?.toDate()).toLocaleTimeString()}</span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="message-input-form">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Escribe un mensaje..."
                />
                <button type="submit">Enviar</button>
              </form>
            </>
          ) : (
            <div className="no-chat-selected">
              <p>Selecciona un chat para empezar a conversar o inicia uno nuevo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentChat;


