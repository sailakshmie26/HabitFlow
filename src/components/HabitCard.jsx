import { useDispatch, useSelector } from "react-redux";
import { deleteHabit, completedHabit } from "../features/habits/habitSlice";

const HabitCard = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits);
  return (
  <>
   {habits.map((habit) => (
   <div key={habit.id} className="max-w-sm rounded shadow-lg p-4 mb-4 bg-white">
     <h3 className="font-bold text-xl mb-2">
       {habit.habitName}
     </h3>
     
     <p className="text-gray-700">
       Category: {habit.category || "General"} </p>
     <p>Streaks🔥:{habit.streak || 0}</p>
     <div className="flex gap-3 mt-2">
       <button
         onClick={() => {
           dispatch(completedHabit(habit.id));
         }}
         className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-3 rounded"
       >
         Completed
       </button>
       <button
         onClick={() => {
           dispatch(deleteHabit(habit.id));
         }}
         className="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
       >
         Delete
       </button>
     </div>
   </div>
     )
   )}
  </>
  );
};

export default HabitCard;
