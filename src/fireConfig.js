// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdOUH4XhFGDz1PKXfY7RO22hwOgJPgpYU",
  authDomain: "react-chat-app-92f44.firebaseapp.com",
  projectId: "react-chat-app-92f44",
  storageBucket: "react-chat-app-92f44.appspot.com",
  messagingSenderId: "643860024046",
  appId: "1:643860024046:web:1749f454e200a5fd5881ff",
  measurementId: "G-8LEGQ2MVDF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // main app config
export const auth = getAuth()//authentication (register)
export const storage = getStorage() //file storage
export const db = getFirestore() //database


  