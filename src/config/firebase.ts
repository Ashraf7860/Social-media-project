// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZrgCP_bXmdWBUgcy_6yvRdHj9lnL3YI",
  authDomain: "social-media-project-c800f.firebaseapp.com",
  projectId: "social-media-project-c800f",
  storageBucket: "social-media-project-c800f.appspot.com",
  messagingSenderId: "252076537945",
  appId: "1:252076537945:web:25cf0df4790099ae8ed948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);