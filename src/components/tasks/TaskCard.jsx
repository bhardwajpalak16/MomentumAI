export default function TaskCard({
  task,
  onComplete,
}) {

  return (

    <div
      className={`
      rounded-2xl
      border
      p-5
      transition

      ${
        task.completed
          ? "border-green-500/30 bg-green-500/10"
          : "border-white/10 bg-white/5"
      }
      `}
    >

      <div className="flex justify-between items-center">

        <div>

          <h3
            className={`
            font-semibold

            ${
              task.completed
                ? "text-green-300 line-through"
                : "text-white"
            }
            `}
          >
            {task.title}
          </h3>

          <p className="text-slate-400 mt-2">
            {task.category}
          </p>

          <p className="text-slate-500 text-sm">
            {task.deadline}
          </p>

        </div>

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-xs

          ${
            task.priority === "High"
              ? "bg-red-500/20 text-red-300"

              : task.priority === "Medium"
              ? "bg-yellow-500/20 text-yellow-300"

              : "bg-green-500/20 text-green-300"
          }
          `}
        >
          {task.priority}
        </span>

      </div>

      <button
        disabled={task.completed}
        onClick={() => onComplete(task.id)}
        className={`
        mt-5
        w-full
        py-3
        rounded-xl
        font-semibold
        transition

        ${
          task.completed

            ? "bg-green-600 cursor-default"

            : "bg-gradient-to-r from-violet-600 to-blue-600 hover:scale-[1.02]"
        }

        text-white
        `}
      >

        {task.completed
          ? "✅ Completed"
          : "Mark as Complete"}

      </button>

    </div>

  );

}