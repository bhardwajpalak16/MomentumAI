import GlassCard from "../ui/GlassCard";
import { CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";

const tasks = [
  {
    title: "Finish DSA Sheet",
    time: "Today • 5:00 PM",
    completed: true,
    priority: "High",
  },
  {
    title: "Build MomentumAI UI",
    time: "Today • 8:00 PM",
    completed: false,
    priority: "Medium",
  },
  {
    title: "Review DBMS Notes",
    time: "Tomorrow",
    completed: false,
    priority: "Low",
  },
];

const priorityColor = {
  High: "bg-red-500/20 text-red-400",
  Medium: "bg-yellow-500/20 text-yellow-400",
  Low: "bg-green-500/20 text-green-400",
};

export default function TodayTasks() {
  return (
    <GlassCard className="mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Today's Tasks
      </h2>

      <div className="space-y-4">

        {tasks.map((task, index) => (

          <motion.div
            key={task.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-5"
          >

            <div className="flex items-center gap-4">

              {task.completed ? (
                <CheckCircle2 className="text-green-400" />
              ) : (
                <Circle className="text-slate-400" />
              )}

              <div>

                <h3 className="font-semibold text-white">
                  {task.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {task.time}
                </p>

              </div>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColor[task.priority]}`}
            >
              {task.priority}
            </span>

          </motion.div>

        ))}

      </div>

    </GlassCard>
  );
}