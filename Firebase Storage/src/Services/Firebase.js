// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1-QINqoDbfJl7NS0UCptMzvIjKaSw_uA",
  authDomain: "firestore-d05ad.firebaseapp.com",
  projectId: "firestore-d05ad",
  storageBucket: "firestore-d05ad.appspot.com",
  messagingSenderId: "57479150984",
  appId: "1:57479150984:web:86b4117dcd0058cb4f8e3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firestore data base
export const db = getFirestore(app);
