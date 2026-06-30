import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import HeroSection from "../components/dashboard/HeroSection";
import StatsGrid from "../components/dashboard/StatsGrid";
import QuickActions from "../components/dashboard/QuickActions";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import AuroraBackground from "../components/ui/AuroraBackground";

import TasksSection from "../components/tasks/TasksSection";
import AddTaskModal from "../components/tasks/AddTaskModal";

import FloatingParticles from "../components/ui/FloatingParticles";

import AICommandCenter from "../components/ai/AICommandCenter";
import AIRescueCenter from "../components/ai/AIRescueCenter";
import AIAdviceCenter from "../components/ai/AIAdviceCenter";

import {
  addTask,
  updateUserStats,
} from "../firebase/tasks";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

  const { user } = useAuth();

  const [openTaskModal, setOpenTaskModal] = useState(false);

  const handleAddTask = async (task) => {

    try {

      await addTask(user.uid, task);

      await updateUserStats(user.uid);

      alert("✅ Task Added Successfully!");

      setOpenTaskModal(false);

      window.location.reload();

    } catch (error) {

      console.error(error);

      alert(error.message);

    }

  };

  return (

    <>

      <AuroraBackground />
      <FloatingParticles />
      <div className="flex min-h-screen relative z-10">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-10 overflow-y-auto">

          <TopBar />

          {/* Hero */}
          <div id="hero">
            <HeroSection />
          </div>

          {/* Stats */}
          <StatsGrid />

          {/* Tasks + AI */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8">

            {/* Left Side */}
            <div
              id="tasks"
              className="lg:col-span-2"
            >
              <TasksSection />
            </div>

            {/* Right Side */}
            <div className="space-y-8">

              <div id="planner">
                <AICommandCenter />
              </div>

              <div id="rescue">
                <AIRescueCenter />
              </div>

              <div id="coach">
                <AIAdviceCenter />
              </div>

            </div>

          </div>

          {/* Quick Actions */}
          <QuickActions
            onAddTask={() => setOpenTaskModal(true)}
          />

          {/* Analytics */}
          <div id="analytics">
            <AnalyticsChart />
          </div>

        </main>

        {/* Add Task Modal */}
        <AddTaskModal
          isOpen={openTaskModal}
          onClose={() => setOpenTaskModal(false)}
          onSubmit={handleAddTask}
        />

      </div>

    </>

  );

}