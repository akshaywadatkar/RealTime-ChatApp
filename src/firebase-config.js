// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJpeHIQ89T82OYpxvgjGU4AbU7fiyulTA",
  authDomain: "chatapp-732d1.firebaseapp.com",
  projectId: "chatapp-732d1",
  storageBucket: "chatapp-732d1.appspot.com",
  messagingSenderId: "481063329869",
  appId: "1:481063329869:web:a181e6e29b06e600923c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);