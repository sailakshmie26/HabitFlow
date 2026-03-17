import { useSelector } from "react-redux";
import { getCompletionPercentage } from "../utils/analytics";

  const getTopHabit = (habits) => {
    if(!habits.length) return null;

    return habits.reduce((top, current) => 
    current.streak > top.streak ? current: top
  )
  }

const DashboardStats = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const allHabits = useSelector(state => state.habits.habits)
  const habits = allHabits.filter(
    habit => habit.userId === currentUser?.id
  )
  const totalHabits = habits.length;
  const totalStreak = habits.reduce((acc, habit) => {
    return acc + (habit.streak || 0);
  }, 0);

  const completion = getCompletionPercentage(habits);

  const topHabit = getTopHabit(habits)

  return (
    <div className="bg-red-50 p-6 rounded-xl shadow-md space-y-5 border border-gray-100">
      <h2 className="text-xl font-bold text-green-900 mb-4">
      Statistics</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">My Habits</p>
          <p className="text-2xl font-bold text-blue-700">{totalHabits}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Streak Points</p>
          <p className="text-2xl font-bold text-green-700">{totalStreak}🔥</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Completion</p>
          <p className="text-2xl font-bold text-purple-700">{completion}%</p>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          Top Habit
        </p>
        <p className="text-lg font-semibold text-green-900">
          {topHabit ? topHabit.habitName : "No habits yet."}
        </p>
        <p className="text-sm text-gray-500">
        🔥{topHabit?.streak || 0} day streak 
        </p>
      </div>

    </div>
  );
};

export default DashboardStats;
