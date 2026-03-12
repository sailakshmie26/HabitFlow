import { useSelector } from "react-redux"

const DashboardStats = () => {

  const habits = useSelector((state) => state.habits.habits);
  const totalHabits = habits.length;
  const totalStreak = habits.reduce((acc, habit) =>{
    return acc + (habit.streak || 0)
  },0)

  return (
    <div 
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h2
      className="text-xl font-bold text-green-800 mb-4">
      Statistics</h2>
      <div className="grid grid-cols-2 gap-4">

    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <p className="text-sm text-gray-600">Total Habits</p>
      <p className="text-2xl font-bold text-blue-600">
        {totalHabits}
      </p>
    </div>

    <div className="bg-green-50 p-4 rounded-lg text-center">
      <p className="text-sm text-gray-600">Streak Points</p>
      <p className="text-2xl font-bold text-green-600">
        {totalStreak}🔥
      </p>
    </div>

  </div>
    </div>
  )
}

export default DashboardStats
