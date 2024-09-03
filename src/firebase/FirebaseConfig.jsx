// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx1OGxF_5wKX0bG8bTRGbt1eqBSuh1TJ8",
  authDomain: "myecom-d00b5.firebaseapp.com",
  projectId: "myecom-d00b5",
  storageBucket: "myecom-d00b5.appspot.com",
  messagingSenderId: "887633840996",
  appId: "1:887633840996:web:fca8422d4ae2c228334871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
