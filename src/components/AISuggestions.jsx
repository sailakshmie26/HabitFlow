import { useSelector } from "react-redux"
import { getAISuggestions } from "../services/aiService";
import { useState } from "react";

const AiSuggestions = () => {
  const habits = useSelector((state)=> state.habits.habits)
  const [suggestions, setSuggestions] =useState([])
  const handAISuggestions = async()=>{
    const habitNames = habits.map(habit => habit.habitName)
    const result = await getAISuggestions(habitNames)
    const formatted = result.split("\n")
    setSuggestions(formatted)
  }
  return (
    <>
      <h2>AI Habit Coach</h2>
      
      <button onClick={handAISuggestions}>
       Generate AI Suggestions
      </button>

      {
        suggestions.map((item, i)=>(
          <p key={i}>{item}</p>
        ))
      }
      
    </>
  )
}

export default AiSuggestions
