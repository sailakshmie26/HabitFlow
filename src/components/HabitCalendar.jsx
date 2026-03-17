import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const HabitCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const allHabits = useSelector((state) => state.habits.habits);
  const habits = allHabits.filter((habit) => habit.userId === currentUser?.id);
  const completedDates = habits.flatMap((habit) => habit.completedDates || []);
  const dateCounts = {}
  completedDates.forEach(date =>{
    if(dateCounts[date]){
      dateCounts[date]++
    }else {
      dateCounts[date] = 1
    }
  })

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const d =
        date.getFullYear() +
        "-" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(date.getDate()).padStart(2, "0");

      const count = dateCounts[d]

      if(count === 1) return "level1"
      if(count === 2) return "level2"
      if(count >= 3) return "level3"
    }
  };

  const handleClickDay = (date) => {
    const d =
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0");
    setSelectedDate(d);
  };
  return (
    <div className="bg-green-50 p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold text-purple-800 mb-4">
        Habit Check-in Calendar
      </h2>

      <Calendar tileClassName={tileClassName} onClickDay={handleClickDay} />

      {selectedDate && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">
            Habits completed on {selectedDate}
          </h3>
          {habits
            .filter((habit) => habit.completedDates?.includes(selectedDate))
            .map((habit) => (
              <p key={habit.id}>✅{habit.habitName}</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default HabitCalendar;
