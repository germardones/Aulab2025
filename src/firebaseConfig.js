// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCngk0g7gSBbHPrrDtU42yB9MtAglgb53A",
  authDomain: "aulab-23262.firebaseapp.com",
  projectId: "aulab-23262",
  storageBucket: "aulab-23262.firebasestorage.app",
  messagingSenderId: "620021948792",
  appId: "1:620021948792:web:4598f260b0e5a08eac288d"
};



// Inicializar Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
