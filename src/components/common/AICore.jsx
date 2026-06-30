import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="relative flex items-center justify-center w-72 h-72">

      {/* BACKGROUND GLOW */}
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-violet-600/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* OUTER RING */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-violet-500/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* DASHED RING */}
      <motion.div
        className="absolute w-56 h-56 rounded-full border-2 border-dashed border-blue-400/40"
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* INNER RING */}
      <motion.div
        className="absolute w-44 h-44 rounded-full border border-violet-400/40"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ENERGY ORBIT 1 */}
      <motion.div
        className="absolute w-64 h-64"
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_25px_#8b5cf6]" />
      </motion.div>

      {/* ENERGY ORBIT 2 */}
      <motion.div
        className="absolute w-48 h-48"
        animate={{ rotate: -360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />
      </motion.div>

      {/* ENERGY ORBIT 3 */}
      <motion.div
        className="absolute w-52 h-52"
        animate={{ rotate: 360 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_20px_white]" />
      </motion.div>

      {/* CENTER GLOW */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 blur-2xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* CORE */}
      <motion.div
        className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-blue-500 shadow-[0_0_80px_rgba(124,58,237,.9)]"
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="text-5xl font-black text-white">
          M
        </span>
      </motion.div>

    </div>
  );
}