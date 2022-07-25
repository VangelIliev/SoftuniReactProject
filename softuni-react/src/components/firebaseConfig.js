// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEd02420kBnpHzqGWhsynj3dPe-tUkZYo",
  authDomain: "fir-react-54eee.firebaseapp.com",
  projectId: "fir-react-54eee",
  storageBucket: "fir-react-54eee.appspot.com",
  messagingSenderId: "79373978615",
  appId: "1:79373978615:web:e6d84b50f3d0803204fcf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);