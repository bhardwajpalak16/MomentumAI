import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import { getTasks } from "../../firebase/tasks";

import { generateRescuePlan } from "../../ai/agents/rescueAgent";

import RescueCard from "./RescueCard";
import AILoading from "./AILoading";

export default function AIRescueCenter() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [rescue, setRescue] = useState(null);

  const generateRescue = async () => {
    try {
      setLoading(true);

      const tasks = await getTasks(user.uid);

      if (tasks.length === 0) {
        alert("Please add some tasks first.");
        return;
      }

      const response = await generateRescuePlan(tasks);

      const cleaned = response
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        alert("Gemini didn't return valid JSON.");
        return;
      }

      const data = JSON.parse(jsonMatch[0]);

      setRescue(data);

    } catch (error) {
      console.error(error);
      alert("Unable to generate Rescue Plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8">

        <h2 className="text-3xl font-bold text-white">
          🚨 Rescue Engine
        </h2>

        <p className="mt-2 text-red-300">
          Google AI Studio analyzes your workload and predicts deadline risks.
        </p>

        <button
          onClick={generateRescue}
          className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold hover:scale-105 transition"
        >
          Generate Rescue Plan
        </button>

      </div>

      {loading && <AILoading />}

      {!loading && rescue && (
        <RescueCard rescue={rescue} />
      )}

    </div>
  );
}