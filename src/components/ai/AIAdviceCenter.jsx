import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import { getTasks } from "../../firebase/tasks";
import useMomentum from "../../hooks/useMomentum";

import { generateCoach } from "../../ai/agents/coachAgent";

import AILoading from "./AILoading";
import AICoachPanel from "./AICoachPanel";

export default function AIAdviceCenter() {

  const { user } = useAuth();

  const momentum = useMomentum();

  const [loading, setLoading] = useState(false);
  const [coach, setCoach] = useState(null);

  const generateAdvice = async () => {

    try {

      setLoading(true);

      const tasks = await getTasks(user.uid);

      if (tasks.length === 0) {
        alert("Please add some tasks first.");
        return;
      }

      const response = await generateCoach(tasks, momentum);

      const cleaned = response
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        alert("Invalid AI response.");
        return;
      }

      const data = JSON.parse(jsonMatch[0]);

      setCoach(data);

    } catch (error) {

      console.error(error);

      alert("Unable to generate AI advice.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="space-y-6">

      <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-8">

        <h2 className="text-3xl font-bold text-white">
          💬 AI Coach
        </h2>

        <p className="mt-2 text-violet-300">
          Personalized productivity guidance powered by Google AI Studio.
        </p>

        <button
          onClick={generateAdvice}
          className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold hover:scale-105 transition"
        >
          Get AI Advice
        </button>

      </div>

      {loading && <AILoading />}

      {!loading && coach && (
        <AICoachPanel coach={coach} />
      )}

    </div>

  );

}