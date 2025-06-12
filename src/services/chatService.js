// src/services/chatService.js
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  getDoc,
  onSnapshot,
  limit
} from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Obtiene las conversaciones de un usuario
 * @param {string} userId - ID del usuario
 * @param {string} userType - Tipo de usuario ('student' o 'professional')
 * @returns {Object} Resultado de la operación con lista de chats
 */
export const getUserChats = async (userId, userType) => {
  try {
    // Campo a consultar según el tipo de usuario
    const field = userType === 'student' ? 'studentId' : 'professionalId';
    
    const q = query(
      collection(db, "chats"),
      where(field, "==", userId),
      orderBy("updatedAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const chats = [];
    
    querySnapshot.forEach((doc) => {
      chats.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: chats
    };
  } catch (error) {
    console.error('Error al obtener chats del usuario:', error);
    return {
      success: false,
      message: 'Error al obtener conversaciones',
      error: error.message
    };
  }
};

/**
 * Obtiene los mensajes de un chat
 * @param {string} chatId - ID del chat
 * @returns {Object} Resultado de la operación con lista de mensajes
 */
export const getChatMessages = async (chatId) => {
  try {
    const q = query(
      collection(db, `chats/${chatId}/messages`),
      orderBy("timestamp", "asc")
    );
    
    const querySnapshot = await getDocs(q);
    const messages = [];
    
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: messages
    };
  } catch (error) {
    console.error('Error al obtener mensajes del chat:', error);
    return {
      success: false,
      message: 'Error al obtener mensajes',
      error: error.message
    };
  }
};

/**
 * Suscribe a los mensajes de un chat en tiempo real
 * @param {string} chatId - ID del chat
 * @param {Function} callback - Función a ejecutar cuando hay nuevos mensajes
 * @returns {Function} Función para cancelar la suscripción
 */
export const subscribeToChatMessages = (chatId, callback) => {
  const q = query(
    collection(db, `chats/${chatId}/messages`),
    orderBy("timestamp", "asc")
  );
  
  return onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data()
      });
    });
    callback(messages);
  }, (error) => {
    console.error('Error en suscripción a mensajes:', error);
    callback([], error);
  });
};

/**
 * Envía un mensaje en un chat
 * @param {string} chatId - ID del chat
 * @param {Object} messageData - Datos del mensaje
 * @returns {Object} Resultado de la operación
 */
export const sendMessage = async (chatId, messageData) => {
  try {
    // Verificar que el chat existe
    const chatRef = doc(db, "chats", chatId);
    const chatDoc = await getDoc(chatRef);
    
    if (!chatDoc.exists()) {
      throw new Error("El chat no existe");
    }
    
    // Añadir mensaje a la subcolección
    const messageRef = await addDoc(collection(db, `chats/${chatId}/messages`), {
      ...messageData,
      timestamp: serverTimestamp()
    });
    
    // Actualizar último mensaje y fecha en el chat
    await updateDoc(chatRef, {
      lastMessage: messageData.text,
      updatedAt: serverTimestamp(),
      unreadCount: {
        ...chatDoc.data().unreadCount,
        [messageData.from === 'student' ? 'professional' : 'student']: 
          (chatDoc.data().unreadCount?.[messageData.from === 'student' ? 'professional' : 'student'] || 0) + 1
      }
    });
    
    return {
      success: true,
      message: 'Mensaje enviado correctamente',
      data: {
        id: messageRef.id,
        ...messageData
      }
    };
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    return {
      success: false,
      message: 'Error al enviar mensaje',
      error: error.message
    };
  }
};

/**
 * Crea un nuevo chat entre estudiante y profesional
 * @param {string} studentId - ID del estudiante
 * @param {string} professionalId - ID del profesional
 * @returns {Object} Resultado de la operación
 */
export const createChat = async (studentId, professionalId) => {
  try {
    // Verificar si ya existe un chat entre estos usuarios
    const q = query(
      collection(db, "chats"),
      where("studentId", "==", studentId),
      where("professionalId", "==", professionalId),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      // Ya existe un chat, devolver su ID
      const existingChat = querySnapshot.docs[0];
      return {
        success: true,
        message: 'Chat ya existente',
        data: {
          id: existingChat.id,
          ...existingChat.data()
        }
      };
    }
    
    // Obtener datos de los usuarios para el chat
    const studentDoc = await getDoc(doc(db, "users", "students", studentId));
    const professionalDoc = await getDoc(doc(db, "users", "professionals", professionalId));
    
    if (!studentDoc.exists() || !professionalDoc.exists()) {
      throw new Error("Uno o ambos usuarios no existen");
    }
    
    // Crear nuevo chat
    const chatRef = await addDoc(collection(db, "chats"), {
      studentId,
      professionalId,
      studentName: studentDoc.data().alias || `NRE: ${studentDoc.data().nre}`,
      professionalName: professionalDoc.data().name,
      professionalRole: professionalDoc.data().role,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastMessage: "",
      unreadCount: {
        student: 0,
        professional: 0
      }
    });
    
    return {
      success: true,
      message: 'Chat creado correctamente',
      data: {
        id: chatRef.id,
        studentId,
        professionalId,
        studentName: studentDoc.data().alias || `NRE: ${studentDoc.data().nre}`,
        professionalName: professionalDoc.data().name,
        professionalRole: professionalDoc.data().role
      }
    };
  } catch (error) {
    console.error('Error al crear chat:', error);
    return {
      success: false,
      message: 'Error al crear conversación',
      error: error.message
    };
  }
};

/**
 * Marca los mensajes de un chat como leídos
 * @param {string} chatId - ID del chat
 * @param {string} userType - Tipo de usuario ('student' o 'professional')
 * @returns {Object} Resultado de la operación
 */
export const markChatAsRead = async (chatId, userType) => {
  try {
    const chatRef = doc(db, "chats", chatId);
    
    // Actualizar contador de no leídos
    await updateDoc(chatRef, {
      [`unreadCount.${userType}`]: 0
    });
    
    return {
      success: true,
      message: 'Chat marcado como leído'
    };
  } catch (error) {
    console.error('Error al marcar chat como leído:', error);
    return {
      success: false,
      message: 'Error al actualizar estado de lectura',
      error: error.message
    };
  }
};
