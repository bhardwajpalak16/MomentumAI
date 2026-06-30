import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks } from "../firebase/tasks";
import { calculateMomentum } from "../utils/calculateMomentum";

export default function useMomentum() {
  const { user } = useAuth();

  const [score, setScore] = useState(100);

  useEffect(() => {
    if (!user) return;

    async function loadMomentum() {
      try {
        const tasks = await getTasks(user.uid);

        const momentum = calculateMomentum(tasks);

        setScore(momentum);
      } catch (error) {
        console.error(error);
      }
    }

    loadMomentum();
  }, [user]);

  return score;
}