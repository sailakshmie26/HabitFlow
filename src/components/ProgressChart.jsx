import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "recharts";
import { getWeeklyChartData } from "../utils/analytics";

const ProgressChart = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const allHabits = useSelector((state) => state.habits.habits);
  const habits = allHabits.filter((habit) => habit.userId === currentUser?.id);
  const weeklyData = getWeeklyChartData(habits)
  return (
    <>
      <h2 className="text-xl font-bold text-purple-800 mb-4">Your Weekly Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3}/>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="completed" fill="#82ca9d" radius={[6, 6, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ProgressChart;
