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
          <div key={habit.id} className="bg-purple-50 rounded-xl shadow p-4">
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
                className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-3 rounded"
              >
                Completed
              </button>

              <button
                onClick={() => {
                  dispatch(deleteHabit(habit.id));
                  toast("Habit deleted",{ icon: "🗑️" });
                }}
                className="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
              >
                Delete
              </button>
              
              <button
              onClick={()=>{
                dispatch(undoCompletedHabit(habit.id))
                toast("Completion undone", {icon:"↩️"})
              }}
              className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-3 rounded">
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
              className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded">
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
