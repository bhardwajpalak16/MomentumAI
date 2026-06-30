import { askGemini } from "../geminiService";
import { coachPrompt } from "../prompts/coachPrompt";

export async function generateCoach(tasks, momentumScore) {
  const prompt = coachPrompt(tasks, momentumScore);
  return await askGemini(prompt);
}