import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";

/**
 * - Genera el correo NRE@alu.murciaeduca.es
 * - Crea la cuenta en Firebase Auth
 * - Crea el documento students/{NRE} en Cloud Firestore
 */
export async function registerStudent(data) {
  const {
    nre, password,
    alias, centroEducativo,
    curso, fechaNacimiento,
    sexo
  } = data;

  // 1. Email automático
  const email = `${nre}@alu.murciaeduca.es`.toLowerCase();

  // 2. Alta en Authentication
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  // 3. Documento en la colección "students" (ID = NRE para evitar duplicados)
  await setDoc(doc(db, "students", nre), {
    uid:        user.uid,
    nre, email, alias,
    centerIds:  [centroEducativo], // usa IDs si creas la colección centers
    course:     curso,
    birthDate:  Timestamp.fromDate(new Date(fechaNacimiento)),
    gender:     sexo,
    createdAt:  Timestamp.now()
  });
}
