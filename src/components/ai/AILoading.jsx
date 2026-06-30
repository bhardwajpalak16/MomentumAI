import { Loader2, Brain } from "lucide-react";

export default function AILoading() {
  return (
    <div className="rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-10 flex flex-col items-center">

      <Brain
        size={50}
        className="text-violet-400 mb-5"
      />

      <Loader2
        size={42}
        className="animate-spin text-blue-400"
      />

      <h2 className="mt-6 text-xl font-bold text-white">
        Google AI Studio is thinking...
      </h2>

      <p className="mt-2 text-slate-400 text-center">
        Analyzing your tasks and creating the most productive schedule.
      </p>

    </div>
  );
}