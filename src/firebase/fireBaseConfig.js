
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBszfD5jJbRBJtAalbCNvzjd-qVeyXelqs",
    authDomain: "fir-internship-ebfec.firebaseapp.com",
    projectId: "fir-internship-ebfec",
    storageBucket: "fir-internship-ebfec.firebasestorage.app",
    messagingSenderId: "234632372026",
    appId: "1:234632372026:web:674d6b2aa5f39debf0ba03",
    measurementId: "G-4LP1DH9FQY",
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);