import { askGemini } from "../geminiService";
import { plannerPrompt } from "../prompts/plannerPrompt";

export async function generateAIPlan(tasks) {

  const prompt = plannerPrompt(tasks);

  return await askGemini(prompt);

}