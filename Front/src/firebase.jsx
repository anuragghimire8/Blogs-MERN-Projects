
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogs-abfec.firebaseapp.com",
  projectId: "blogs-abfec",
  storageBucket: "blogs-abfec.appspot.com",
  messagingSenderId: "1096160018158",
  appId: "1:1096160018158:web:8357791e625bc6af23fdff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);