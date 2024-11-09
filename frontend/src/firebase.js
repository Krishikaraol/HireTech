// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC7gFG85dHhEXiq81cvyMsCNLro8hMSPD0",
    authDomain: "hiretech-2480d.firebaseapp.com",
    projectId: "hiretech-2480d",
    storageBucket: "hiretech-2480d.appspot.com",
    messagingSenderId: "1016195959638",
    appId: "1:1016195959638:web:c2ed32b4064af5ecaae4f7",
    measurementId: "G-PYVB7ZBQ5G"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
