// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_N2ZbsEdxqrYE5Wb_GFJZOFW-k6EiZLk",
  authDomain: "fir-tutorial-44373.firebaseapp.com",
  projectId: "fir-tutorial-44373",
  storageBucket: "fir-tutorial-44373.firebasestorage.app",
  messagingSenderId: "360581350256",
  appId: "1:360581350256:web:618776a73ff46ffb1c05b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();