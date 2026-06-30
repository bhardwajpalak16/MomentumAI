import TimelineCard from "./TimelineCard";
import AICoachCard from "./AICoachCard";

export default function AIPlanCard({ plan }) {
  if (!plan) return null;

  return (
    <div className="rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-8">

      <h2 className="text-3xl font-bold text-white">
        🧠 Today's AI Schedule
      </h2>

      <p className="text-violet-300 mt-2">
        Powered by Google AI Studio ✨
      </p>

      <div className="mt-8 space-y-6">

        {Array.isArray(plan.schedule) &&
  plan.schedule.map((item, index) =>  (
          <TimelineCard
            key={index}
            time={item.time}
            task={item.task}
            reason={item.reason}
          />
        ))}

      </div>

      <AICoachCard coach={plan.coach} />

    </div>
  );
}