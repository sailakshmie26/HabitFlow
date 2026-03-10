import Navbar from "../components/Navbar";
import HabitForm from "../components/HabitForm";
import HabitCard from "../components/HabitCard";
import DashboardStats from "../components/DashboardStats";
import ProgressChart from "../components/ProgressChart";
import AISuggestions from "../components/AISuggestions";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Welcome back!</h2>

        <HabitForm />

        <div className="grid grid-cols-2 gap-6 mt-6">
          <HabitCard />

          <DashboardStats />
        </div>

        <h3>Your Habits.</h3>
        <div className="mt-8">
          <ProgressChart />
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
