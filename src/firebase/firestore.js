import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

// Create user document if it doesn't exist
export const createUserDocument = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);

  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,

      momentumScore: 100,
      streak: 0,

      totalTasks: 0,
      completedTasks: 0,

      createdAt: serverTimestamp(),
    });

    console.log("✅ User profile created.");
  } else {
    console.log("✅ User already exists.");
  }
};