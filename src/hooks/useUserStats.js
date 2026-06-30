import { useEffect, useState } from "react";

import { doc, onSnapshot } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

export default function useUserStats() {

  const { user } = useAuth();

  const [stats, setStats] = useState({
    momentumScore: 50,
    totalTasks: 0,
    completedTasks: 0,
    streak: 0,
  });

  useEffect(() => {

    if (!user) return;

    const unsub = onSnapshot(

      doc(db, "users", user.uid),

      (docSnap) => {

        if (docSnap.exists()) {

          setStats(docSnap.data());

        }

      }

    );

    return () => unsub();

  }, [user]);

  return stats;

}