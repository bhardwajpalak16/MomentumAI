import { Sparkles } from "lucide-react";

export default function AICoachPanel({ coach }) {
  if (!coach) return null;

  return (
    <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-8">

      <div className="flex items-center gap-3">

        <Sparkles className="text-violet-400" />

        <h2 className="text-2xl font-bold text-white">
          {coach.title}
        </h2>

      </div>

      <p className="mt-5 text-slate-300 leading-8">
        {coach.message}
      </p>

    </div>
  );
}