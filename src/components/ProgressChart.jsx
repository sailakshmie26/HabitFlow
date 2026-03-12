import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import { ResponsiveContainer } from 'recharts';


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
      
      <ResponsiveContainer width="100%" height={300}>
      <BarChart
      data={weeklyData}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Bar dataKey="completed" fill="#82ca9d"/>
      </BarChart>
      </ResponsiveContainer>


    </>
  )
}

export default ProgressChart


