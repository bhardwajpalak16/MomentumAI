import TaskForm from "../components/tasks/TaskForm";

import { addTask } from "../firebase/tasks";
import { useAuth } from "../context/AuthContext";

export default function AddTask() {
  const { user } = useAuth();

  const handleAddTask = async (task) => {
    try {
      await addTask(user.uid, task);

      alert("✅ Task Added Successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
}