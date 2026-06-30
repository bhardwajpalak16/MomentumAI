import { motion } from "framer-motion";
import {
  CalendarDays,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/logo.png";

import GoogleButton from "../components/ui/GoogleButton";
import FeatureCard from "../components/ui/FeatureCard";

export default function Login() {

  const { user } = useAuth();

  // If already logged in, go directly to Dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-full max-w-lg rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-2xl shadow-violet-500/20 p-10"
      >

        {/* Logo */}
        {/* Logo */}

<div className="flex flex-col items-center">

  <img
    src={logo}
    alt="MomentumAI"
    className="
      w-28
      h-28
      object-contain
      drop-shadow-[0_0_30px_rgba(139,92,246,.6)]
    "
  />

  <h1
    className="
      mt-4
      text-5xl
      font-black
      bg-gradient-to-r
      from-violet-400
      via-fuchsia-400
      to-cyan-400
      bg-clip-text
      text-transparent
    "
  >
    MomentumAI
  </h1>

</div>

        {/* Tagline */}
        <p className="mt-5 text-center text-slate-300 text-lg">
          Build Momentum.
          <br />
          Beat Every Deadline.
        </p>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Google Button */}
        <div className="mt-8">
          <GoogleButton />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 mt-8">

          <FeatureCard
            icon={CalendarDays}
            title="AI Planner"
            description="Generate optimized daily schedules."
            delay={0.1}
          />

          <FeatureCard
            icon={TrendingUp}
            title="Momentum"
            description="Track productivity with AI."
            delay={0.2}
          />

          <FeatureCard
            icon={ShieldAlert}
            title="Rescue Mode"
            description="Recover before deadlines."
            delay={0.3}
            className="col-span-2"
          />

        </div>

      </motion.div>

    </div>
  );
}