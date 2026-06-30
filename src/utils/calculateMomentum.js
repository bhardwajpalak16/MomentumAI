export function calculateMomentum(tasks) {
  if (!tasks || tasks.length === 0) {
    return 50;
  }

  let score = 50;

  const completedTasks = tasks.filter(task => task.completed);

  // +8 for every completed task
  score += completedTasks.length * 8;

  // +5 bonus for completed high-priority tasks
  const highPriorityCompleted = completedTasks.filter(
    task => task.priority === "High"
  ).length;

  score += highPriorityCompleted * 5;

  // Small bonus if more than half the tasks are completed
  if (completedTasks.length >= Math.ceil(tasks.length / 2)) {
    score += 10;
  }

  // Clamp between 0 and 100
  score = Math.min(100, Math.max(0, score));

  return score;
}