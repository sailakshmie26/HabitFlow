import { useSelector } from "react-redux"

const DashboardStats = () => {

  const habits = useSelector((state) => state.habits.habits);
  const totalHabits = habits.length;
  const totalStreak = habits.reduce((acc, habit) =>{
    return acc + (habit.streak || 0)
  },0)

  return (
    <div 
    className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg shadow-md">
      <h2
      className="text-xl font-semibold text-cyan-600 dark:text-cyan-300 mb-4">
      Statistics</h2>
      <div className="space-y-2 text-slate-700 dark:text-slate-200">
      <p>Total Habits: <span
      className="font-bold">{totalHabits}</span></p>
      <p>Total Streak Points: <span
      className="font-bold">{totalStreak}</span></p>
      </div>
    </div>
  )
}

export default DashboardStats
