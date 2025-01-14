// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRf8jVD2qSBagS7RRw0ER0N70j-tHiC5E",
  authDomain: "sitara-85860.firebaseapp.com",
  projectId: "sitara-85860",
  storageBucket: "sitara-85860.firebasestorage.app",
  messagingSenderId: "797569159084",
  appId: "1:797569159084:web:facf39214d5d7295fcb409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;