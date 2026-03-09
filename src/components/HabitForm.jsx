import { useDispatch, useSelector } from "react-redux";
import { addHabit, deleteHabit } from "../features/habits/habitSlice";
import { useState } from "react";

const HabitForm = () => {
  const [habitName, setHabitName] = useState("");
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits)
  return (
    <>
      <div>
        <h2>Add a habit</h2>
      </div>
      <div>
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-black-500 py-2">
            <input
            onInput={(e)=> setHabitName(e.target.value)}
            value={habitName}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Habit name"
              aria-label="Habit name"
            />
            <button
            onClick={()=>{
              dispatch(addHabit({
                id:Date.now(), 
                habitName:habitName,
                category: "General",
                streak:0
              }))
              setHabitName("");
            }}
              className="flex-shrink-0 bg-blue-500 border-blue-500 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add
            </button>
            <button
            onClick={()=>{
              setHabitName("")
            }}
              className="flex-shrink-0 border-transparent border-4 text-black-500 text-sm py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button><br />
            {/* {
              habits.map((habit)=>{
                return <div key={habit.id}>{habit.habitName}{""}
                <button
                onClick={()=>{
                  dispatch(deleteHabit(habit))
                }}>Delete Habit</button>
                </div>
              })
            } */}
          </div>
        </form>
      </div>
    </>
  );
};

export default HabitForm;
