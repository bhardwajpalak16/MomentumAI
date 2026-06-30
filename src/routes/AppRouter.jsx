import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Splash from "../pages/Splash";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddTask from "../pages/AddTask";
import AITest from "../pages/AITest";
import AIPlanner from "../pages/AIPlanner";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowSplash(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (showSplash) {

    return <Splash />;

  }

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-task"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aitest"
          element={
            <ProtectedRoute>
              <AITest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <AIPlanner />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>

  );

}