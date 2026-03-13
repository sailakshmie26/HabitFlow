import Navbar from "../components/Navbar";
import HabitForm from "../components/HabitForm";
import HabitCard from "../components/HabitCard";
import DashboardStats from "../components/DashboardStats";
import ProgressChart from "../components/ProgressChart";
import AISuggestions from "../components/AISuggestions";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import HabitCalendar from "../components/HabitCalendar";

const Dashboard = () => {
  const loggedinUser = useSelector((state) => state.users.loggedinUser)
  return (
    <>
      <Navbar/>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl text-green-900 font-semibold mb-6">Welcome 
        <span className="font-bold text-purple-500 ms-1">{loggedinUser.username}</span>!</h2>

        <HabitForm />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
          <HabitCard />

          <DashboardStats />
        </div>

        <div className="mt-8">
          <ProgressChart />
        </div>

        <div className="mt-8">
          <HabitCalendar/>
        </div>

        <div className="mt-8">
          <AISuggestions />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

