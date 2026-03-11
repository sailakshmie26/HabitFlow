import { useSelector } from "react-redux";
import { getAISuggestions } from "../services/aiService";
import { useState } from "react";

const AiSuggestions = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const appTitle = import.meta.env.VITE_APP_TITLE;
  console.log("API URL:", apiUrl);
  console.log("App Title:", appTitle);

  const habits = useSelector((state) => state.habits.habits);
  const [suggestions, setSuggestions] = useState([]);
  const handAISuggestions = async () => {
    const habitNames = habits.map((habit) => habit.habitName);
    const result = await getAISuggestions(habitNames);
    const formatted = result.split("\n");
    setSuggestions(formatted);
  };
  return (
    <>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-3">AI Habit Coach</h2>

        <button
          onClick={handAISuggestions}
          className="bg-purple-500 text-white px-4 py-2 rounded mb-4"
        >
          Generate AI Suggestions
        </button>

        <div className="space-y-2">
          {suggestions.map((item, i) => (
            <div key={i} className="bg-white p-3 rounded shadow">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AiSuggestions;
