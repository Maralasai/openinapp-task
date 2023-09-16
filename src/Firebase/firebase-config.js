import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlwHYhpUJ13Owo4Ds_kCWsaEyZGjHZTI",
  authDomain: "incomeexpene.firebaseapp.com",
  projectId: "incomeexpene",
  storageBucket: "incomeexpene.appspot.com",
  messagingSenderId: "1015316790867",
  appId: "1:1015316790867:web:5789402f7831a7513b90a6",
  measurementId: "G-07VM8LVDER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
