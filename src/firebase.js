import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5LmixtQMR3H9XzOcARqO5oM9CaMb4SX0",
  authDomain: "chat-d9978.firebaseapp.com",
  projectId: "chat-d9978",
  storageBucket: "chat-d9978.appspot.com",
  messagingSenderId: "991857164823",
  appId: "1:991857164823:web:57eba7f76b205f0bf45252",
  measurementId: "G-P100BNPZR4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
