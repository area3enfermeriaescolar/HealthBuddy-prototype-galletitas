import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Usar valores directos en lugar de variables de entorno para asegurar la inicialización
const firebaseConfig = {
  apiKey: "AIzaSyDDdyGFdOdRWTlMWBzBByfzc39OY2mtZTo",
  authDomain: "healthbuddy-881bd.firebaseapp.com",
  databaseURL: "https://healthbuddy-881bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "healthbuddy-881bd",
  storageBucket: "healthbuddy-881bd.firebasestorage.app",
  messagingSenderId: "1052497472413",
  appId: "1:1052497472413:web:41d564b9e94dc30c2f9d74",
  measurementId: "G-W82WSQHQCB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
