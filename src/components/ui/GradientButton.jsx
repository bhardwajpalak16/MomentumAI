import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GradientButton({
  children,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        px-8
        py-4
        font-semibold
        text-white
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-600
        to-blue-600
        shadow-[0_0_35px_rgba(139,92,246,.45)]
        transition-all
        duration-500
        hover:shadow-[0_0_55px_rgba(139,92,246,.8)]
        ${className}
      `}
    >
      {/* Shine */}

      <motion.div
        animate={{
          x: ["-150%", "150%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      <div className="relative z-10 flex items-center justify-center gap-2">

        {children}

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />

      </div>

    </motion.button>
  );
}