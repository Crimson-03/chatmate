import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtJzCYv0xkM4kat_yifj4kjZZqr7ceBDQ",
  authDomain: "chatmate-1e118.firebaseapp.com",
  projectId: "chatmate-1e118",
  storageBucket: "chatmate-1e118.appspot.com",
  messagingSenderId: "590669143005",
  appId: "1:590669143005:web:634b8fb95a25692fd8b434",
  measurementId: "G-VTH4HK8VED",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
