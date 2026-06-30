import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Splash() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex flex-col items-center justify-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[150px]" />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="MomentumAI"
        className="w-36 h-36 relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* App Name */}
      <motion.h1
        className="relative z-10 mt-8 text-6xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        MomentumAI
      </motion.h1>

      <motion.p
        className="relative z-10 mt-4 text-slate-400 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Turn Intent into Momentum
      </motion.p>

    </div>
  );
}