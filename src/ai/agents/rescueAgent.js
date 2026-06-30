import { askGemini } from "../geminiService";
import { rescuePrompt } from "../prompts/rescuePrompt";

export async function generateRescuePlan(tasks) {
  const prompt = rescuePrompt(tasks);

  return await askGemini(prompt);
}