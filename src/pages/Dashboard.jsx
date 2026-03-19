import Navbar from "../components/Navbar";
import HabitForm from "../components/HabitForm";
import HabitCard from "../components/HabitCard";
import DashboardStats from "../components/DashboardStats";
import ProgressChart from "../components/ProgressChart";
import AISuggestions from "../components/AISuggestions";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import HabitCalendar from "../components/HabitCalendar";
import AchievementBadges from "../components/AchievementBadges";

const Dashboard = () => {
  const loggedinUser = useSelector((state) => state.users.loggedinUser);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl text-gray-900 font-bold mb-6">
          Hello{" "}
          <span className="text-purple-900">{loggedinUser.username}!</span>👋
        </h2>

        <HabitForm />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-6">
            <HabitCard />
            <ProgressChart />
            <HabitCalendar />
          </div>

          <div className="space-y-6 mt-8">
            <DashboardStats />
            <AchievementBadges />
            <AISuggestions />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
