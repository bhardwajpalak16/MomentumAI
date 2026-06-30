import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "text-violet-400",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
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
        y: -10,
        scale: 1.04,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-6
        shadow-[0_0_35px_rgba(124,58,237,.18)]
        transition-all
        duration-500
        hover:border-violet-500/50
        hover:shadow-[0_0_60px_rgba(124,58,237,.40)]
      "
    >

      {/* Animated Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          from-violet-500/10
          via-transparent
          to-cyan-500/10
        "
      />

      {/* Animated Top Border */}
      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 5,
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

      <div className="relative z-10 flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm font-medium">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">
            {value}
          </h2>

        </div>

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-violet-600/20
            to-blue-600/20
            border
            border-white/10
            flex
            items-center
            justify-center
            shadow-[0_0_20px_rgba(124,58,237,.25)]
          "
        >

          <Icon
            size={30}
            className={color}
          />

        </motion.div>

      </div>

    </motion.div>
  );
}