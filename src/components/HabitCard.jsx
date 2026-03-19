import { useDispatch, useSelector } from "react-redux";
import { deleteHabit, completedHabit, undoCompletedHabit, editHabit } from "../features/habits/habitSlice";
import toast from "react-hot-toast";

const HabitCard = () => {
  const dispatch = useDispatch();
  const allHabits = useSelector((state) => state.habits.habits);
  const currentUser = useSelector((state) => state.users.loggedinUser);
  if (!currentUser) {
    return <p>No user logged in</p>;
  }
  const habits = allHabits.filter((habit) => habit.userId === currentUser.id);

  return (
    <>
      <div className="space-y-4">
        {habits.length === 0 && (
          <p className="text-gray-500">No habits yet? Add one.</p>
        )}
        {habits.map((habit) => (
          <div key={habit.id} className="bg-teal-50 rounded-xl shadow p-4">
            <h3 className="font-semibold text-xl text-gray-900 mb-2">{habit.habitName}</h3>

            <p className="text-gray-700">
              Category: {habit.category || "General"}
            </p>
            <p>Streak🔥:{habit.streak || 0}</p>

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => {
                  dispatch(completedHabit(habit.id));
                  toast.success("Good job pal!🔥");
                }}
                className="bg-blue-500 hover:bg-blue-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-white font-semibold py-2 px-4 rounded-md"
              >
                Completed
              </button>

              <button
                onClick={() => {
                  dispatch(deleteHabit(habit.id));
                  toast("Habit deleted",{ icon: "🗑️" });
                }}
                className="bg-red-500 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition text-white font-semibold py-2 px-4 rounded-md"
              >
                Delete
              </button>
              
              <button
              onClick={()=>{
                dispatch(undoCompletedHabit(habit.id))
                toast("Completion undone", {icon:"↩️"})
              }}
              className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition text-white font-bold py-2 px-4 rounded-md">
                Undo
              </button>

              <button
              onClick={()=>{
                const newName = prompt('Edit habit name', habit.habitName)
                if(newName){
                  dispatch(editHabit({id: habit.id, habitName: newName}))
                  toast.success("Habit updated")
                }
              }}
              className="bg-purple-500 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition text-white font-bold py-2 px-4 rounded-md">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HabitCard;
