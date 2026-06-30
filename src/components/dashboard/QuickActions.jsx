import GlassCard from "../ui/GlassCard";
import {
  CalendarPlus,
  Sparkles,
  ShieldAlert,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const actions = [
  {
    icon: CalendarPlus,
    title: "Generate AI Plan",
    description: "Create today's optimized schedule",
    color: "from-violet-500 to-blue-500",
  },
  {
    icon: PlusCircle,
    title: "Add New Task",
    description: "Add a new goal or assignment",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShieldAlert,
    title: "Rescue Mode",
    description: "Recover from missed deadlines",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Ask AI Coach",
    description: "Get personalized productivity tips",
    color: "from-pink-500 to-violet-500",
  },
];

export default function QuickActions({
  onAddTask,
}) {
  return (
    <GlassCard className="mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action, index) => {

          const Icon = action.icon;

          return (

            <motion.button
  onClick={() => {

  if (action.title === "Add New Task") {
    onAddTask();
    return;
  }

  if (action.title === "Generate AI Plan") {
    document
      .getElementById("planner")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    return;
  }

  if (action.title === "Rescue Mode") {
    document
      .getElementById("rescue")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    return;
  }

  if (action.title === "Ask AI Coach") {
    document
      .getElementById("coach")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

}}
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              p-6
              text-left
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(124,58,237,.25)]
              "
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${action.color}
                flex items-center justify-center shadow-lg mb-5`}
              >
                <Icon
                  size={26}
                  className="text-white"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white">
                {action.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-400 leading-6">
                {action.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex justify-end">

                <ArrowRight
                  size={20}
                  className="
                  text-slate-500
                  group-hover:text-violet-400
                  group-hover:translate-x-1
                  transition-all
                  "
                />

              </div>

            </motion.button>

          );

        })}

      </div>

    </GlassCard>
  );
}