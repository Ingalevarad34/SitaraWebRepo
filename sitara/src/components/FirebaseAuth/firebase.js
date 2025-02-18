// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1W_IzOfY4utWvPcTIZpMVLAZGCWjPkuk",
  authDomain: "sitaraweb-28796.firebaseapp.com",
  projectId: "sitaraweb-28796",
  storageBucket: "sitaraweb-28796.firebasestorage.app",
  messagingSenderId: "824048775861",
  appId: "1:824048775861:web:95742db742f2b0e92584fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;