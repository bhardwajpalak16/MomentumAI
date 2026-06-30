import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2CJMURcYvI1b1UPOS5hpNQS8GixxG8zw",
  authDomain: "momentumai-31a47.firebaseapp.com",
  projectId: "momentumai-31a47",
  storageBucket: "momentumai-31a47.firebasestorage.app",
  messagingSenderId: "983824027004",
  appId: "1:983824027004:web:bab119b344450875c068f9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;