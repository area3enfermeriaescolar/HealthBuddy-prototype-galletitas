import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

// Función para registrar que un estudiante ha consultado un recurso
export const addResourceConsultation = async (consultationData) => {
  try {
    const docRef = await addDoc(
      collection(db, "resourceConsultations"),
      {
        ...consultationData,
        timestamp: new Date(), // Añadir marca de tiempo
      }
    );
    console.log("Documento de consulta de recurso escrito con ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error al añadir documento de consulta de recurso: ", e);
    throw e;
  }
};

// Función para obtener el historial de recursos consultados por un estudiante
export const getResourceConsultationsByStudent = (studentId, callback) => {
  try {
    const q = query(
      collection(db, "resourceConsultations"),
      where("studentId", "==", studentId),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const consultations = [];
      querySnapshot.forEach((doc) => {
        consultations.push({ id: doc.id, ...doc.data() });
      });
      callback(consultations);
    });

    return unsubscribe;
  } catch (error) {
    console.error("Error al obtener consultas de recursos por estudiante: ", error);
    throw error;
  }
};
