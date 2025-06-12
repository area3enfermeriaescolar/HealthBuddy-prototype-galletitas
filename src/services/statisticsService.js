import { db } from "../firebase/config";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";

// Función para obtener el número total de consultas
export const getTotalConsultations = async () => {
  try {
    const q = query(collection(db, "consultations"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    console.error("Error getting total consultations:", error);
    throw error;
  }
};

// Función para obtener consultas agrupadas por tema
export const getConsultationsByTopic = async () => {
  try {
    const q = query(collection(db, "consultations"));
    const querySnapshot = await getDocs(q);
    const topicCounts = {};
    querySnapshot.forEach((doc) => {
      const topic = doc.data().topic || "Desconocido";
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });
    return topicCounts;
  } catch (error) {
    console.error("Error getting consultations by topic:", error);
    throw error;
  }
};

// Función para obtener consultas agrupadas por curso del estudiante
export const getConsultationsByCourse = async () => {
  try {
    const q = query(collection(db, "consultations"));
    const querySnapshot = await getDocs(q);
    const courseCounts = {};
    for (const docSnapshot of querySnapshot.docs) {
      const studentId = docSnapshot.data().studentId;
      if (studentId) {
        const studentDoc = await getDocs(query(collection(db, "users"), where("uid", "==", studentId), limit(1)));
        if (!studentDoc.empty) {
          const course = studentDoc.docs[0].data().course || "Desconocido";
          courseCounts[course] = (courseCounts[course] || 0) + 1;
        }
      }
    }
    return courseCounts;
  } catch (error) {
    console.error("Error getting consultations by course:", error);
    throw error;
  }
};

// Función para obtener consultas agrupadas por rango de edad del estudiante
export const getConsultationsByAgeGroup = async () => {
  try {
    const q = query(collection(db, "consultations"));
    const querySnapshot = await getDocs(q);
    const ageGroupCounts = {
      "12-14": 0,
      "15-16": 0,
      "17-18": 0,
      "Desconocido": 0,
    };

    for (const docSnapshot of querySnapshot.docs) {
      const studentId = docSnapshot.data().studentId;
      if (studentId) {
        const studentDoc = await getDocs(query(collection(db, "users"), where("uid", "==", studentId), limit(1)));
        if (!studentDoc.empty) {
          const birthDate = studentDoc.docs[0].data().birthDate?.toDate(); // Convertir a objeto Date
          if (birthDate) {
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }

            if (age >= 12 && age <= 14) {
              ageGroupCounts["12-14"]++;
            } else if (age >= 15 && age <= 16) {
              ageGroupCounts["15-16"]++;
            } else if (age >= 17 && age <= 18) {
              ageGroupCounts["17-18"]++;
            } else {
              ageGroupCounts["Desconocido"]++;
            }
          } else {
            ageGroupCounts["Desconocido"]++;
          }
        }
      }
    }
    return ageGroupCounts;
  } catch (error) {
    console.error("Error getting consultations by age group:", error);
    throw error;
  }
};

// Función para obtener los recursos más accedidos
export const getMostAccessedResources = async () => {
  try {
    const q = query(collection(db, "resourceConsultations"));
    const querySnapshot = await getDocs(q);
    const resourceCounts = {};
    querySnapshot.forEach((doc) => {
      const resourceTitle = doc.data().resourceTitle || "Desconocido";
      resourceCounts[resourceTitle] = (resourceCounts[resourceTitle] || 0) + 1;
    });

    // Convertir a array y ordenar para obtener los más accedidos
    const sortedResources = Object.entries(resourceCounts).sort(([, countA], [, countB]) => countB - countA);
    return sortedResources;
  } catch (error) {
    console.error("Error getting most accessed resources:", error);
    throw error;
  }
};

// Función para obtener el número total de citas
export const getTotalAppointments = async () => {
  try {
    const q = query(collection(db, "appointments"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    console.error("Error getting total appointments:", error);
    throw error;
  }
};

// Función para obtener citas agrupadas por estado
export const getAppointmentsByStatus = async () => {
  try {
    const q = query(collection(db, "appointments"));
    const querySnapshot = await getDocs(q);
    const statusCounts = {};
    querySnapshot.forEach((doc) => {
      const status = doc.data().status || "Desconocido";
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    return statusCounts;
  } catch (error) {
    console.error("Error getting appointments by status:", error);
    throw error;
  }
};
