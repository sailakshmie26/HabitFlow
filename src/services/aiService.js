export const getAISuggestions = async (habits) => {

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `User habits: ${habits.join(",")}.
                            Suggest 3 new productive habits.`,
                },
              ],
            },
          ],
        }),
      },
    );
    const data = await response.json();
    if (!data.candidates) {
      console.log(data);
      return "AI failed to generate suggestions";
    }
    return data.candidates[0].content.parts[0].text
  } catch (error) {
    console.log("AI Suggestion error:", error);
    return "Could not generate suggestions.";
  }
};
