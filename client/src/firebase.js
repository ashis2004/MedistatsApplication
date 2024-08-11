// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "medistatsm.firebaseapp.com",
  projectId: "medistatsm",
  storageBucket: "medistatsm.appspot.com",
  messagingSenderId: "1015239677656",
  appId: "1:1015239677656:web:a294b20403dd04332ca9ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);