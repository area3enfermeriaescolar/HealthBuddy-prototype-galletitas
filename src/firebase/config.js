// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Configuración de Firebase
// En un entorno de producción, estas credenciales deberían estar en variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForHealthBuddyApp",
  authDomain: "healthbuddy-piloto.firebaseapp.com",
  projectId: "healthbuddy-piloto",
  storageBucket: "healthbuddy-piloto.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789jkl",
  measurementId: "G-MEASUREMENT_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
