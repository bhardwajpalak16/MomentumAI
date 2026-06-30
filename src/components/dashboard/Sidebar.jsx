import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CalendarDays,
  CheckSquare,
  ShieldAlert,
  TrendingUp,
  Settings,
} from "lucide-react";

import logo from "../../assets/logo.png";

import useUserStats from "../../hooks/useUserStats";
import { useAuth } from "../../context/AuthContext";
import SettingsModal from "./SettingsModal";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    id: "hero",
  },
  {
    icon: CheckSquare,
    label: "Tasks",
    id: "tasks",
  },
  {
    icon: CalendarDays,
    label: "AI Planner",
    id: "planner",
  },
  {
    icon: ShieldAlert,
    label: "Rescue Mode",
    id: "rescue",
  },
  {
    icon: TrendingUp,
    label: "Analytics",
    id: "analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    id: "settings",
  },
];

export default function Sidebar() {

  const stats = useUserStats();
  const { user } = useAuth();

  const [openSettings, setOpenSettings] = useState(false);

  const scrollTo = (id) => {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };

  return (

    <>

      <motion.aside
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
       className="w-80 h-screen border-r border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col"
      >

        {/* Logo */}

<div className="p-6 border-b border-white/10">

  <div className="flex items-center gap-3">

    <img
      src={logo}
      alt="MomentumAI"
      className="w-10 h-10 object-contain flex-shrink-0"
    />

    <div className="min-w-0">

      <h1
        className="
          text-2xl
          font-black
          leading-none
          bg-gradient-to-r
          from-violet-400
          via-fuchsia-400
          to-cyan-400
          bg-clip-text
          text-transparent
          truncate
        "
      >
        MomentumAI
      </h1>

      <p className="text-slate-400 text-xs mt-1">
        AI Productivity Coach
      </p>

    </div>

  </div>

</div>
        {/* Menu */}

        <div className="flex-1 p-5 space-y-3">

          {menu.map((item) => {

            const Icon = item.icon;

            return (

              <motion.button

                key={item.label}

                whileHover={{ x: 8 }}

                whileTap={{ scale: 0.97 }}

                onClick={() => {

                  if (item.label === "Settings") {

                    setOpenSettings(true);

                    return;

                  }

                  scrollTo(item.id);

                }}

                className="
group
w-full
flex
items-center
gap-4
px-5
py-4
rounded-2xl
bg-white/[0.03]
border
border-transparent
transition-all
duration-300
hover:bg-white/10
hover:border-violet-500/30
hover:shadow-[0_0_25px_rgba(124,58,237,.25)]
"
              >

                <Icon
  size={22}
  className="
    text-slate-300
    group-hover:text-violet-400
    transition-colors
  "
/>

                <span
  className="
    text-slate-300
    font-medium
    group-hover:text-white
    transition-colors
  "
>
  {item.label}
</span>

              </motion.button>

            );

          })}

        </div>

        {/* Bottom Card */}

        <div className="p-6 border-t border-white/10">

          <div className="rounded-2xl bg-gradient-to-r from-violet-600/20 to-blue-600/20 p-5">

            <p className="text-white font-semibold">
              Momentum Score
            </p>

            <h2 className="text-4xl font-black mt-2 text-white">
              {stats.momentumScore}%
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Keep Building Momentum 🚀
            </p>

          </div>

        </div>

      </motion.aside>

      <SettingsModal
        isOpen={openSettings}
        onClose={() => setOpenSettings(false)}
        user={user}
      />

    </>

  );

}