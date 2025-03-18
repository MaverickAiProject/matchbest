import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCxZ6M6qsdVfDsp872z3RnTBGSpnlVPs78",
    authDomain: "matchbest-cd2c8.firebaseapp.com",
    projectId: "matchbest-cd2c8",
    storageBucket: "matchbest-cd2c8.firebasestorage.app",
    messagingSenderId: "28143982654",
    appId: "1:28143982654:web:c2704494a008c5cf0f596f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = typeof window !== "undefined" ? getAuth(app) : null;