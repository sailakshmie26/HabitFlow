import { useSelector } from "react-redux"
import { getAISuggestions } from "../services/aiService";

const AiSuggestions = () => {
  const habits = useSelector((state)=> state.habits.habits)
  const suggestions = getAISuggestions(habits);
  return (
    <>
      <h2>AI Habit Coach</h2>
      {
        suggestions.map((state, i)=>(
          <p key={i}>*{state}</p>
        ))
      }
    </>
  )
}

export default AiSuggestions
