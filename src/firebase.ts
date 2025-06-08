// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqU7otmgVbDOQpzJxDU3UF69s4ADuTE7Q",
  authDomain: "totalenergies-399c0.firebaseapp.com",
  projectId: "totalenergies-399c0",
  storageBucket: "totalenergies-399c0.firebasestorage.app",
  messagingSenderId: "79734990006",
  appId: "1:79734990006:web:165838c2367cb7d4c9b217",
  measurementId: "G-6DK9N5G0S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
