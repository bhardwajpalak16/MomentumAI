import { motion } from "framer-motion";

export default function LoadingBar({
  progress = 70,
}) {
  return (
    <div className="w-full">

      {/* Progress Track */}
      <div className="h-3 rounded-full bg-white/10 overflow-hidden">

        {/* Animated Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-violet-500
            via-purple-500
            to-blue-500
            shadow-[0_0_20px_rgba(124,58,237,.5)]
          "
        />

      </div>

      <div className="flex justify-between mt-2 text-xs text-slate-400">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

    </div>
  );
}