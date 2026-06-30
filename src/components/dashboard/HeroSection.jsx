import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

import CircularProgress from "../ui/CircularProgress";
import GradientButton from "../ui/GradientButton";
import GlassCard from "../ui/GlassCard";

import { useAuth } from "../../context/AuthContext";
import useUserStats from "../../hooks/useUserStats";

export default function HeroSection() {

  const { user } = useAuth();
  const stats = useUserStats();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (

    <GlassCard className="mt-8 overflow-hidden relative">

      {/* Animated Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-blue-500/10 to-fuchsia-500/10" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-16
          top-1/2
          h-72
          w-72
          rounded-full
          border
          border-violet-500/20
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-8
          top-1/2
          h-56
          w-56
          rounded-full
          border
          border-blue-500/20
        "
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <p className="flex items-center gap-2 text-violet-300 font-semibold">

              <Sparkles size={18} />

              {greeting},

              <span className="text-white">

                {user?.displayName || "User"} 👋

              </span>

            </p>

          </motion.div>

          <motion.h1

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .2,
            }}

            className="
              mt-5
              text-6xl
              font-black
              leading-tight
            "

          >

            <span className="text-white">
              You're
            </span>

            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

              Building Momentum.

            </span>

          </motion.h1>

          <p className="mt-6 text-slate-300 text-lg leading-8">

            You've completed

            <span className="text-violet-400 font-bold">
              {" "} {stats.completedTasks}
            </span>

            {" "}out of{" "}

            <span className="text-cyan-400 font-bold">

              {stats.totalTasks}

            </span>

            {" "}tasks.

            <br />

            Keep pushing towards your goals today.

          </p>

          <div className="mt-8 max-w-xs">

            <GradientButton>

              <Rocket size={18} />

              Generate AI Plan

            </GradientButton>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div

          initial={{
            opacity: 0,
            scale: .8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: .8,
          }}

          className="flex justify-center"

        >

          <CircularProgress
            score={stats.momentumScore}
          />

        </motion.div>

      </div>

    </GlassCard>

  );

}