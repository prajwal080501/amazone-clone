// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_uc6tjgtX8FbZ3PpLI16WSJPX04zgPy4",
  authDomain: "clone-ebd93.firebaseapp.com",
  projectId: "clone-ebd93",
  storageBucket: "clone-ebd93.appspot.com",
  messagingSenderId: "799714592347",
  appId: "1:799714592347:web:744a8969c2a382eac0217e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = app.auth();

export { db, auth };