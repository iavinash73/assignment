import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRscQBK9l3dqoFv65-fRfSDAZJWY5N_zM",
  authDomain: "sarvam-assignment.firebaseapp.com",
  projectId: "sarvam-assignment",
  storageBucket: "sarvam-assignment.firebasestorage.app",
  messagingSenderId: "783792226508",
  appId: "1:783792226508:web:1286aec7d75bfe01774269",
  measurementId: "G-JX29D1G55X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
