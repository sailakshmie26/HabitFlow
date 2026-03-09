import { useSelector } from "react-redux"

const DashboardStats = () => {

  const habits = useSelector(state = state.habits.habits);
  const totalHabits = habits.length;
  const totalStreak = habits.reduce((acc, habit) =>{
    return acc + (habit.streal || 0)
  },0)

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Habits: {totalHabits}</p>
      <p>Total Streak Points: {totalStreak}</p>
    </div>
  )
}

export default DashboardStats
