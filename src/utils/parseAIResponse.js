export function parseAIResponse(response) {
  try {
    return JSON.parse(response);
  } catch (error) {
    console.error("Failed to parse AI response:", error);

    return {
      schedule: [],
      coach: "Unable to generate AI plan."
    };
  }
}