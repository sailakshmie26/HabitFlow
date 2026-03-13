import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../features/habits/habitSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const HabitForm = () => {
  const [habitName, setHabitName] = useState("");
  const [category, setCategory] = useState("")
  const currentUser = useSelector((state) => state.users.loggedinUser)
  const dispatch = useDispatch();
  const habits = useSelector(state => state.habits.habits)
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
            
            <select name="" id=""
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2">
              <option value="">Select a category</option>
              <option value="Health">Health</option>
              <option value="Fitness">Fitness</option>
              <option value="Learning">Learning</option>
              <option value="Productivity">Productivity</option>
              <option value="Mindfulness">Mindfulness</option>
              <option value="Finance">Finance</option>
              <option value="Personal">Personal</option>
            </select>

            <button
            onClick={()=>{
              if(!habitName.trim()){
                return toast.error("Habit cannot be empty!")
              }
              dispatch(addHabit({
                id:Date.now(), 
                userId: currentUser.id,
                habitName:habitName,
                category: category,
                streak:0,
                completedDates:[]
              }))
              setHabitName("");
              setCategory("")
              toast.success("Habit added successfully!")
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
