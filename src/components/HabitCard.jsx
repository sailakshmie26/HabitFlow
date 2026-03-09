import { useDispatch, useSelector } from "react-redux";
import { deleteHabit, completedHabit } from "../features/habits/habitSlice";

const HabitCard = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits);
  return (
    <>
          {habits.map((habit) => (
              <div key={habit.id} className="max-w-sm rounded shadow-lg p-4 mb-4">

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
                    className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
                  >
                    Completed
                  </button>

                  <button
                    onClick={() => {
                      dispatch(deleteHabit(habit));
                    }}
                    className="bg-red-500 hover:bg-pink-700 text-white py-1 px-3 rounded"
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
