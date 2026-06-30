import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.06]
        backdrop-blur-3xl
        shadow-[0_0_40px_rgba(124,58,237,.18)]
        p-6
        transition-all
        duration-500
        hover:border-violet-400/40
        hover:shadow-[0_0_70px_rgba(124,58,237,.40)]
        ${className}
      `}
    >

      {/* Animated Top Glow */}

      <motion.div
        animate={{
          x: ["-100%", "120%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0
          h-[2px]
          w-1/2
          bg-gradient-to-r
          from-transparent
          via-violet-400
          to-blue-400
        "
      />

      {/* Glow Overlay */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-violet-500/5
          via-transparent
          to-blue-500/5
        "
      />

      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>

    </motion.div>
  );
}