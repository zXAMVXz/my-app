

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'; 


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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{ db, googleAuthProvider, firebase }