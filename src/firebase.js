// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ-nxY8Dos9FN-wOOo02cSc2Xe8w6prP8",
  authDomain: "login-system-55c93.firebaseapp.com",
  projectId: "login-system-55c93",
  storageBucket: "login-system-55c93.firebasestorage.app",
  messagingSenderId: "25492591995",
  appId: "1:25492591995:web:9b242216b7c08ca9bad9de",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle };
