import { Sparkles } from "lucide-react";

export default function AICoachCard({ coach }) {
  return (
    <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">

      <div className="flex items-center gap-3">

        <Sparkles className="text-violet-400" />

        <h3 className="text-xl font-bold text-white">
          AI Coach
        </h3>

      </div>

      <p className="mt-4 text-slate-300 leading-7">
        {coach}
      </p>

    </div>
  );
}