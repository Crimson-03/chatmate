import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-dqMjY5I0jz6FCVMUeq4ZMgyMYu3fh20",
    authDomain: "chat-2b516.firebaseapp.com",
    projectId: "chat-2b516",
    storageBucket: "chat-2b516.appspot.com",
    messagingSenderId: "986006688233",
    appId: "1:986006688233:web:50b6fc0e984cebc22c3b78",
    measurementId: "G-GC0112BSYG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);