import Navbar from "../components/Navbar"
import HabitForm from '../components/HabitForm'
import HabitCard from '../components/HabitCard'
import DashboardStats from '../components/DashboardStats'
import ProgressChart from '../components/ProgressChart'
import AISuggestions from '../components/AISuggestions'
import Footer from "../components/Footer"


const Dashboard = () => {
  return (
    <>
      <Navbar/>
      
      <h2>Welcome back!</h2>
      <HabitForm/>

      <h3>Your Habits.</h3>
      <HabitCard/>

      <DashboardStats/>
      <ProgressChart/>
      <AISuggestions/>

      <Footer/>
    </>
  )
}

export default Dashboard
