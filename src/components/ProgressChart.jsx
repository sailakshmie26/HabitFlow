import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

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
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="day" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="completed" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
      <RechartsDevtools />
    </BarChart>

    </>
  )
}

export default ProgressChart
