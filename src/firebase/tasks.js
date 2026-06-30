import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";


// ================================
// Add New Task
// ================================
export async function addTask(uid, task) {
  try {
    const docRef = await addDoc(
      collection(db, "users", uid, "tasks"),
      {
        ...task,
        completed: false,
        createdAt: serverTimestamp(),
      }
    );

    return docRef.id;

  } catch (error) {
    console.error(error);
    throw error;
  }
}


// ================================
// Get All Tasks
// ================================
export async function getTasks(uid) {
  try {

    const snapshot = await getDocs(
      collection(db, "users", uid, "tasks")
    );

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

  } catch (error) {

    console.error(error);

    return [];

  }
}


// ================================
// Complete Task
// ================================
export async function completeTask(uid, taskId) {

  const taskRef = doc(
    db,
    "users",
    uid,
    "tasks",
    taskId
  );

  await updateDoc(taskRef, {
    completed: true,
  });

}


// ================================
// Update User Statistics
// ================================
export async function updateUserStats(uid) {

  const tasksRef = collection(
    db,
    "users",
    uid,
    "tasks"
  );

  const snapshot = await getDocs(tasksRef);

  const tasks = snapshot.docs.map((doc) => doc.data());

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  // Basic Momentum Score Formula
  let momentumScore = 50;

  if (totalTasks > 0) {
    momentumScore = Math.round(
      50 + (completedTasks / totalTasks) * 50
    );
  }

  if (momentumScore > 100) {
    momentumScore = 100;
  }

  const userRef = doc(db, "users", uid);

  await updateDoc(userRef, {
    totalTasks,
    completedTasks,
    momentumScore,
  });

}