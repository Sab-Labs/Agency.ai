//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa2PQdFhD5N3PshxIVIM9_JM4Rtbu8bUM",
    authDomain: "agencyai-2fa4f.firebaseapp.com",
    projectId: "agencyai-2fa4f",
    storageBucket: "agencyai-2fa4f.firebasestorage.app",
    messagingSenderId: "476934547839",
    appId: "1:476934547839:web:9dd7827436a9733a3c124a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
