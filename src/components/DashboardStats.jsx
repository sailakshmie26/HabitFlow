import { useSelector } from "react-redux";
import { getCompletionPercentage } from "../utils/analytics";

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

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-xl font-bold text-green-800 mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Total Habits</p>
          <p className="text-2xl font-bold text-blue-600">{totalHabits}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Streak Points</p>
          <p className="text-2xl font-bold text-green-600">{totalStreak}🔥</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Completion</p>
          <p className="text-2xl font-bold text-purple-600">{completion}%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
