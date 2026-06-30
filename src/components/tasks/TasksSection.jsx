import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import {
  getTasks,
  completeTask,
  updateUserStats,
} from "../../firebase/tasks";

import TaskCard from "./TaskCard";

export default function TasksSection() {

  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    if (!user) return;

    loadTasks();

  }, [user]);

  const loadTasks = async () => {

    const data = await getTasks(user.uid);

    setTasks(data);

  };

  const handleComplete = async (taskId) => {

    await completeTask(user.uid, taskId);

    await updateUserStats(user.uid);

    loadTasks();

  };

  return (

    <div className="mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">

        Today's Tasks

      </h2>

      <div className="space-y-4">

        {tasks.map(task => (

          <TaskCard
            key={task.id}
            task={task}
            onComplete={handleComplete}
          />

        ))}

      </div>

    </div>

  );

}