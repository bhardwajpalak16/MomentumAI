import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [task, setTask] = useState({
    title: "",
    priority: "Medium",
    category: "Study",
    deadline: "",
    duration: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(task);

    setTask({
      title: "",
      priority: "Medium",
      category: "Study",
      deadline: "",
      duration: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
    >
      <h2 className="text-3xl font-bold text-white">
        Add New Task
      </h2>

      {/* Task Title */}
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
        className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 outline-none"
      />

      {/* Category */}
      <select
        name="category"
        value={task.category}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/10 text-white outline-none"
      >
        <option className="text-black">Study</option>
        <option className="text-black">Hackathon</option>
        <option className="text-black">Personal</option>
        <option className="text-black">Fitness</option>
      </select>

      {/* Priority */}
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/10 text-white outline-none"
      >
        <option className="text-black">High</option>
        <option className="text-black">Medium</option>
        <option className="text-black">Low</option>
      </select>

      {/* Deadline */}
      <input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/10 text-white outline-none"
      />

      {/* Duration */}
      <input
        type="text"
        name="duration"
        placeholder="Estimated Duration (e.g. 2 Hours)"
        value={task.duration}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 outline-none"
      />

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:scale-[1.02] transition"
      >
        Save Task
      </button>
    </form>
  );
}