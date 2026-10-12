import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC95tXExtZrgZ45_psCIv_Pk1nejVEckIw",
  authDomain: "evocabank-clone.firebaseapp.com",
  projectId: "evocabank-clone",
  storageBucket: "evocabank-clone.firebasestorage.app",
  messagingSenderId: "318642686868",
  appId: "1:318642686868:web:dfcb71b915996624269d81"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);