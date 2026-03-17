import { useSelector } from "react-redux";
import { getAISuggestions } from "../services/aiService";
import { useState } from "react";

const AiSuggestions = () => {
  const habits = useSelector((state) => state.habits.habits);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleAISuggestions = async () => {
    if(habits.length === 0){
      return alert("Add some habits first!")
    }
    setLoading(true);

    const habitNames = habits.map((habit) => habit.habitName);
    try{
    const result = await getAISuggestions(habitNames);
    const formatted = result
                      .split("\n")
                      .map(item => item.replace(/^\d+[\).\s-]*/, "").trim())
                      .filter(Boolean)
    setSuggestions(formatted);
    } catch(err){
      console.error(err);
      toast("Failed to fetch suggestions.")
    }
    setLoading(false)

  };
  return (
    <>
      <div className="p-4 bg-gray-100 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-bold text-purple-900">AI Habit Coach</h2>

        <button
          onClick={handleAISuggestions}
          className="w-full bg-purple-500 hover:bg-purple-700 text-white py-2 rounded-lg transitoin mb-4"
        >
        {loading? "Generating..." : "Generate Suggestions"}
        </button>

        <div className="space-y-2">
          {suggestions.map((item, i) => (
            <div key={i} 
            className="bg-green-50 p-3 rounded-lg text-sm shadow">
            {item}
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default AiSuggestions;
