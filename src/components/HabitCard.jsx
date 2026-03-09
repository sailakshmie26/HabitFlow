import { useDispatch, useSelector } from "react-redux";
import { deleteHabit, completedHabit } from "../features/habits/habitSlice";

const HabitCard = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">

          {habits.map((habit) => {
            return (
              <div key={habit.id} className="mb-4">

                <h3 className="font-bold text-xl mb-2">
                  {habit.habitName}
                </h3>
                

                <p className="text-gray-700">
                  Category: {habit.category || "General"} </p>

                <p>Streak:🔥{habit.streak || 0}</p>

                <div className="flex gap-2 mt-2">

                  <button
                    onClick={() => {
                      dispatch(completedHabit(habit.id));
                    }}
                    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                  >
                    Completed
                  </button>

                  <button
                    onClick={() => {
                      dispatch(deleteHabit(habit));
                    }}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <br />
      </div>
    </>
  );
};

export default HabitCard;
