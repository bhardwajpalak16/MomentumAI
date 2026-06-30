import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className={`
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      p-5
      transition-all
      duration-300
      hover:border-violet-500/40
      hover:shadow-[0_0_30px_rgba(124,58,237,.25)]
      ${className}
      `}
    >
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-transparent" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 flex items-center justify-center mb-4">

        <Icon
          size={24}
          className="text-violet-400"
        />

      </div>

      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>

      <p className="mt-2 text-slate-400 text-sm leading-relaxed">
        {description}
      </p>

    </motion.div>
  );
}