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
        <h2 className="text-2xl text-gray-900 font-bold mb-6">Hello there 
        <span className="font-bold text-purple-800 ms-1">{loggedinUser.username}!</span></h2>

        <HabitForm />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
          <HabitCard />
          </div>
          
          
          <div className="space-y-6">
          <DashboardStats />
          </div>
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

