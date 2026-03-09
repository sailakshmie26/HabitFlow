export const getAISuggestions = async (habits) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `Based on these habits: ${habits.join(", ")}, suggest
                    3 new habits.`
                }
            ]
        })
    });
const data = await response.json();
return data.choices[0].message.content;
}

