import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#070B1A]">

      {/* Purple */}
      <motion.div
        className="absolute -top-52 -left-52 h-[700px] w-[700px] rounded-full bg-violet-600/35 blur-[140px]"
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue */}
      <motion.div
        className="absolute top-20 right-[-250px] h-[650px] w-[650px] rounded-full bg-blue-500/30 blur-[140px]"
        animate={{
          x: [0, -100, 120, 0],
          y: [0, 80, -60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink */}
      <motion.div
        className="absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-500/25 blur-[120px]"
        animate={{
          y: [0, -80, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}