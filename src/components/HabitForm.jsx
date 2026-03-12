import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../features/habits/habitSlice";
import { useState } from "react";

const HabitForm = () => {
  const [habitName, setHabitName] = useState("");
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits)
  return (
    <>
      <div>
        <h2 className="text-gray-900 font-semibold">Add a habit</h2>
      </div>
      <div>
        <form className="w-full max-w-md">
          <div className="flex gap-2">
            <input
            onInput={(e)=> setHabitName(e.target.value)}
            value={habitName}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Habit name"
              aria-label="Habit name"
            />
            <button
            onClick={()=>{
              if(!habitName.trim()){
                return alert("Habit cannot be empty!")
              }
              dispatch(addHabit({
                id:Date.now(), 
                habitName:habitName,
                category: "General",
                streak:0,
                completedDates:[]
              }))
              setHabitName("");
            }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
              type="button"
            >
              Add
            </button>
            <button
            onClick={()=>{
              setHabitName("")
            }}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HabitForm;
