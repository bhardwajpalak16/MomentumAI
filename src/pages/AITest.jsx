import { useState } from "react";
import { generateAIPlan } from "../ai/agents/plannerAgent";

export default function AITest() {

  const [response, setResponse] = useState("");

  const testAI = async () => {

    const tasks = [
      {
        title: "Complete DBMS Assignment",
        priority: "High",
      },
      {
        title: "Practice DSA",
        priority: "Medium",
      },
      {
        title: "Hackathon Development",
        priority: "High",
      },
    ];

    const result = await generateAIPlan(tasks);

    setResponse(result);
  };

  return (
    <div className="p-10">

      <button
        onClick={testAI}
        className="bg-violet-600 px-6 py-3 rounded-xl text-white"
      >
        Test Planner AI
      </button>

      <pre className="mt-10 whitespace-pre-wrap text-white">
        {response}
      </pre>

    </div>
  );
}