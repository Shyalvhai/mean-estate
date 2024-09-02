// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zain-estate.firebaseapp.com",
  projectId: "zain-estate",
  storageBucket: "zain-estate.appspot.com",
  messagingSenderId: "393799287611",
  appId: "1:393799287611:web:f89ca36fd8db2ec9e5ed1e",
  measurementId: "G-GDZ4FHHGHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
