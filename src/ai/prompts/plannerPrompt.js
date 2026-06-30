export function plannerPrompt(tasks) {
  return `
You are the Planner Engine of MomentumAI.

Your job is to create the best daily schedule.

Rules:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT wrap the JSON inside \`\`\`.
4. Do NOT write explanations.
5. Every task must appear exactly once.
6. Schedule high priority tasks first.
7. Return ONLY one JSON object.

Tasks:

${JSON.stringify(tasks, null, 2)}

Output format:

{
  "schedule": [
    {
      "time": "09:00 - 10:00",
      "task": "Task Name",
      "reason": "Reason for scheduling"
    }
  ],
  "coach": "One motivational paragraph."
}
`;
}