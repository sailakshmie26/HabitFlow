import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';

// const data = [
//   {day:"Sun", completed: 1},
//   {day:"Mon", completed: 5},
//   {day:"Tue", completed: 6},
//   {day:"Wed", completed: 3},
//   {day:"Thu", completed: 2},
//   {day:"Fri", completed: 4},
//   {day:"Sat", completed: 2},

// ]

const ProgressChart = () => {
  const habits = useSelector((state) => state.habits.habits)
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const weeklyData = days.map((day,index)=>{
    let count = 0;
    habits.forEach((habit)=>{
      if(habit.completedDates){
        habit.completedDates.forEach((date)=>{
          const d = new Date(date)

          if(d.getDay() === index){
            count++
          }
        })
      }
    })
    return{
      day: day,
      completed: count
    }
  })
  return (
    <>
      <h2 
      className='text-xl font-bold mb-3'>
      Your Habit progress simplified</h2>
      <h3
      className='mb-4'>
      Weekly Chart</h3>

      <BarChart
      width={600} height={300} data={weeklyData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Bar dataKey="completed" fill="#82ca9d"/>
    </BarChart>

    </>
  )
}

export default ProgressChart


