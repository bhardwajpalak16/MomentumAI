import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { getTasks } from "../firebase/tasks";
import { generateAIPlan } from "../ai/agents/plannerAgent";

export default function AIPlanner() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("");

  const handleGeneratePlan = async () => {
    try {
      setLoading(true);

      // Read real tasks from Firestore
      const tasks = await getTasks(user.uid);

      if (tasks.length === 0) {
        alert("Please add some tasks first.");
        setLoading(false);
        return;
      }

      // Send real tasks to Google AI Studio
      const response = await generateAIPlan(tasks);

      setPlan(response);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10">

      <button
        onClick={handleGeneratePlan}
        disabled={loading}
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold"
      >
        {loading ? "Generating..." : "Generate AI Plan"}
      </button>

      <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-8">

        <pre className="whitespace-pre-wrap text-white">
          {plan}
        </pre>

      </div>

    </div>
  );
}
