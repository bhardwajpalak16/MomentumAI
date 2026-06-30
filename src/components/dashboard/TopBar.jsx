import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Moon,
  Sparkles,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function TopBar() {

  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: -20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .6,
      }}

      className="flex items-center justify-between mb-10"

    >

      {/* LEFT */}

      <div>

        <h1 className="text-3xl font-black text-white">

          {greeting},

          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

            {" "}
            {user?.displayName || "User"}

          </span>

          👋

        </h1>

        <p className="text-slate-400 mt-2">

          Let's make today productive and meaningful.

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div
          className="
          flex
          items-center
          gap-3
          px-5
          py-3
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          shadow-[0_0_20px_rgba(124,58,237,.15)]
        "
        >

          <Search
            size={18}
            className="text-slate-400"
          />

          <input

            placeholder="Search anything..."

            className="
              bg-transparent
              outline-none
              text-white
              placeholder:text-slate-500
              w-52
            "

          />

        </div>

        {/* Notification */}

        <motion.button

          whileHover={{
            scale: 1.08,
          }}

          whileTap={{
            scale: .95,
          }}

          className="
          relative
          w-12
          h-12
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          hover:border-violet-500/40
          hover:shadow-[0_0_20px_rgba(124,58,237,.35)]
        "

        >

          <Bell className="text-white" />

          <span
            className="
            absolute
            -top-1
            -right-1
            w-5
            h-5
            rounded-full
            bg-violet-600
            text-white
            text-[10px]
            flex
            items-center
            justify-center
          "
          >

            3

          </span>

        </motion.button>

        {/* Theme */}

        <motion.button

          whileHover={{
            rotate: 25,
          }}

          className="
          w-12
          h-12
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
        "

        >

          <Moon className="text-white" />

        </motion.button>

        {/* AI */}

        <motion.div

          animate={{
            rotate: 360,
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}

          className="
          w-12
          h-12
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-blue-600
          flex
          items-center
          justify-center
          shadow-[0_0_20px_rgba(124,58,237,.5)]
        "

        >

          <Sparkles className="text-white" />

        </motion.div>

      </div>

    </motion.div>

  );

}