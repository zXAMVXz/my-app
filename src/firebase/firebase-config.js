

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAS99xm7sB0rzPnNxpOZF2CWsdm4m5YWE",
  authDomain: "react-globant-667f4.firebaseapp.com",
  projectId: "react-globant-667f4",
  storageBucket: "react-globant-667f4.appspot.com",
  messagingSenderId: "1043102594964",
  appId: "1:1043102594964:web:cd1d3545f17b18b0d78181"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);