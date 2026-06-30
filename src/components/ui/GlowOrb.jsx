import { motion } from "framer-motion";

export default function GlowOrb({
  size = 350,
  color = "#8B5CF6",
  top = "0%",
  left = "0%",
  duration = 8,
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-[120px] opacity-25 pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        top,
        left,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}