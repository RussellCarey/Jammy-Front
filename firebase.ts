// https://console.firebase.google.com/project/dioramalama/authentication/users
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBgw5W-utijWiorR8eweyLFIeMTnIc-Ak",
  authDomain: "dioramalama.firebaseapp.com",
  projectId: "dioramalama",
  storageBucket: "dioramalama.appspot.com",
  messagingSenderId: "293771562278",
  appId: "1:293771562278:web:13014a67f949bb41a945e7",
  measurementId: "G-23K357KLXN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
