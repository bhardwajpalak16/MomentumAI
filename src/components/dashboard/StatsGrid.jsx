import {
  CheckCircle2,
  Flame,
  Clock3,
  CalendarClock,
} from "lucide-react";

import StatCard from "../ui/StatCard";
import useUserStats from "../../hooks/useUserStats";

export default function StatsGrid() {

  const statsData = useUserStats();

  const stats = [
    {
      icon: CheckCircle2,
      title: "Tasks Completed",
      value: `${statsData.completedTasks} / ${statsData.totalTasks}`,
      color: "text-green-400",
    },
    {
      icon: Flame,
      title: "Current Streak",
      value: `${statsData.streak} Days`,
      color: "text-orange-400",
    },
    {
      icon: Clock3,
      title: "Momentum Score",
      value: `${statsData.momentumScore}%`,
      color: "text-cyan-400",
    },
    {
      icon: CalendarClock,
      title: "Pending Tasks",
      value: `${statsData.totalTasks - statsData.completedTasks}`,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {stats.map((item, index) => (

        <StatCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          value={item.value}
          color={item.color}
          delay={index * 0.1}
        />

      ))}

    </div>
  );
}