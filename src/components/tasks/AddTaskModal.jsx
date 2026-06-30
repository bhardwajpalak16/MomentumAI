import { motion } from "framer-motion";
import TaskForm from "./TaskForm";

export default function AddTaskModal({
  isOpen,
  onClose,
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl p-6"
      >
        <TaskForm onSubmit={onSubmit} />

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl border border-white/10 py-3 text-white hover:bg-white/10 transition"
        >
          Cancel
        </button>

      </motion.div>

    </div>
  );
}