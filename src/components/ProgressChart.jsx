import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {day:"Sun", completed: 1},
  {day:"Mon", completed: 5},
  {day:"Tue", completed: 6},
  {day:"Wed", completed: 3},
  {day:"Thu", completed: 2},
  {day:"Fri", completed: 4},
  {day:"Sat", completed: 2},

]

const ProgressChart = () => {
  return (
    <>
      <h2>Your Habit progress simplified</h2>
      <h3>Weekly Chart</h3>

      <BarChart
      width={600} height={300} data={data}
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


