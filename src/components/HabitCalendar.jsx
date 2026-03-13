import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useSelector } from "react-redux"

const HabitCalendar = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const allHabits = useSelector(state => state.habits.habits)
  const habits = allHabits.filter(
    habit => habit.userId === currentUser?.id
  )
  const completedDates = habits.flatMap(
    habit => habit.completedDates || []
  )
  const completedSet = new Set(completedDates);
  const titleClassName = ({date, view}) => {
    if(view === "month"){
      const d = date.toISOString().split("T")[0];

      if(completedSet.has(d)){
        return "completed-day"
      }
    }
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Habit Check-in Calendar</h2> 

        <Calendar titleClassName={titleClassName}/>     
    </div>
  )
}

export default HabitCalendar
