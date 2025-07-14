// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
import {getAuth,signInAnonymously} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4zBJSz2xMR_ZyG4TG11TsE05GmMHdzMU",
  authDomain: "hopeline-9124c.firebaseapp.com",
  projectId: "hopeline-9124c",
  storageBucket: "hopeline-9124c.firebasestorage.app",
  messagingSenderId: "499094752495",
  appId: "1:499094752495:web:7c62af0b86159598551f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
signInAnonymously(auth);

export { db, auth };