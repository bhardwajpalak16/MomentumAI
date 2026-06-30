import GlassCard from "../ui/GlassCard";
import { Sparkles, Brain, TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    icon: Sparkles,
    title: "Best Study Time",
    text: "You're usually most productive between 7 PM and 10 PM.",
    color: "text-violet-400",
  },
  {
    icon: Brain,
    title: "AI Suggestion",
    text: "Complete your DSA task before starting DBMS revision.",
    color: "text-cyan-400",
  },
  {
    icon: TriangleAlert,
    title: "Rescue Alert",
    text: "Two deadlines are due within the next 24 hours.",
    color: "text-orange-400",
  },
];

export default function AIInsights() {
  return (
    <GlassCard>

      <h2 className="text-2xl font-bold mb-6">
        AI Insights
      </h2>

      <div className="space-y-5">

        {insights.map((item, index) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex gap-4 rounded-2xl bg-white/5 border border-white/10 p-5"
            >
              <div className="mt-1">
                <Icon className={item.color} size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1 leading-6">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );

        })}

      </div>

    </GlassCard>
  );
}