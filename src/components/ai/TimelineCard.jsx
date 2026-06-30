import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

export default function TimelineCard({
  time,
  task,
  reason,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative border-l-4 border-violet-500 pl-6 pb-8"
    >
      <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-violet-500"></div>

      <div className="flex items-center gap-2 text-violet-400 font-semibold">
        <Clock3 size={16} />
        {time}
      </div>

      <h3 className="mt-2 text-xl font-bold text-white">
        {task}
      </h3>

      <p className="mt-2 text-slate-400">
        💡 {reason}
      </p>
    </motion.div>
  );
}