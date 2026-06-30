import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import { getTasks } from "../../firebase/tasks";
import { generateAIPlan } from "../../ai/agents/plannerAgent";

import AIPlanCard from "./AIPlanCard";
import AILoading from "./AILoading";

export default function AICommandCenter() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const generatePlan = async () => {
    try {
      setLoading(true);

      const tasks = await getTasks(user.uid);

      if (tasks.length === 0) {
        alert("Please add some tasks first.");
        return;
      }

      const response = await generateAIPlan(tasks);

      console.log("========== RAW GEMINI RESPONSE ==========");
      console.log(response);

      // Remove markdown fences
      const cleaned = response
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      console.log("========== CLEANED RESPONSE ==========");
      console.log(cleaned);

      // Find JSON object
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        alert("No JSON found in Gemini response.");
        return;
      }

      let data;

try {
  data = JSON.parse(jsonMatch[0]);
} catch (err) {
  console.error("JSON Parse Error:", err);
  console.log("Response:", jsonMatch[0]);

  alert("Gemini returned invalid JSON.");

  return;
}

if (!data.schedule || !Array.isArray(data.schedule)) {
  alert("AI returned an invalid schedule.");
  return;
}

setPlan(data);

    } catch (error) {
      console.error("AI Error:", error);
      alert("Failed to generate AI plan. Check the browser console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        <h2 className="text-3xl font-black text-white">
          🧠 AI Command Center
        </h2>

        <p className="mt-2 text-violet-300 font-medium">
          Powered by Google AI Studio ✨
        </p>

        <p className="mt-2 text-slate-400">
          Your AI productivity engine analyzes tasks and creates an optimized daily schedule.
        </p>

        <button
          onClick={generatePlan}
          className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold hover:scale-105 transition"
        >
          ⚡ Generate Today's Plan
        </button>

      </div>

      {loading && <AILoading />}

      {!loading && plan && (
        <AIPlanCard plan={plan} />
      )}
    </div>
  );
}