import { motion } from "framer-motion";

export default function CircularProgress({
  score = 88,
}) {

  const radius = 65;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (score / 100) * circumference;

  return (
    <div className="relative w-44 h-44 flex items-center justify-center">

      <svg
        className="absolute"
        width="180"
        height="180"
      >

        {/* Background Circle */}

        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="rgba(255,255,255,.08)"
          strokeWidth="10"
          fill="none"
        />

        {/* Animated Circle */}

        <motion.circle
          cx="90"
          cy="90"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          transform="rotate(-90 90 90)"
        />

        <defs>
          <linearGradient
            id="gradient"
          >
            <stop
              offset="0%"
              stopColor="#8B5CF6"
            />
            <stop
              offset="100%"
              stopColor="#3B82F6"
            />
          </linearGradient>
        </defs>

      </svg>

      {/* Score */}

      <div className="text-center">

        <motion.h2
          initial={{
            scale: .6,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: .5,
          }}
          className="text-5xl font-black text-white"
        >
          {score}
        </motion.h2>

        <p className="text-slate-400 text-sm mt-2">
  Momentum Score
</p>

<p className="mt-2 text-xs font-medium">
  {score >= 80 && (
    <span className="text-green-400">
      🚀 Excellent
    </span>
  )}

  {score >= 60 && score < 80 && (
    <span className="text-yellow-400">
      ⚡ Good Progress
    </span>
  )}

  {score < 60 && (
    <span className="text-red-400">
      🔥 Needs Focus
    </span>
  )}
</p>

      </div>

    </div>
  );
}