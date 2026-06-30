import { ShieldAlert } from "lucide-react";

export default function RescueCard({ rescue }) {
  if (!rescue) return null;

  return (
    <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 mt-8">

      <div className="flex items-center gap-3">

        <ShieldAlert className="text-red-400" />

        <h2 className="text-2xl font-bold text-white">
          Rescue Mode
        </h2>

      </div>

      <p className="mt-4 text-red-300 font-semibold">
        Risk Level: {rescue.risk}
      </p>

      <div className="mt-6">

        <h3 className="text-white font-semibold">
          Why?
        </h3>

        <ul className="mt-2 space-y-2">
          {rescue.reasons.map((reason, index) => (
            <li key={index} className="text-slate-300">
              • {reason}
            </li>
          ))}
        </ul>

      </div>

      <div className="mt-6">

        <h3 className="text-white font-semibold">
          Recovery Plan
        </h3>

        <div className="mt-3 space-y-3">
          {rescue.recoveryPlan.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 border border-white/10 p-4"
            >
              <p className="text-violet-300 font-medium">
                {item.time}
              </p>

              <p className="text-white">
                {item.task}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-white/5 p-4">

        <h3 className="text-white font-semibold mb-2">
          AI Advice
        </h3>

        <p className="text-slate-300">
          {rescue.advice}
        </p>

      </div>

    </div>
  );
}