import habitFlowIcon from "../assets/habitFlowIcon.png";
import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {
  return (
    <>
    <div 
    className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-purple-600 text-white shadow-md">
    <div 
    className=" flex items-center gap-3 text-black-500 text-xl py-2">
      <img src={habitFlowIcon} alt="HabitFlowIcon"
      className="w-10 h-10 transform hover:scale-110 transition"/>
      <h1
      className="text-2xl font-bold tracking-wide">HABIT FLOW</h1>
    </div>

    <div className="flex gap-3 text-xl py-5">
      {isLoggedIn ? (
        <button
        className="bg-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition">
        <Link to={'/logout'}>Logout</Link></button>
      ) : (
        <button 
    className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
    <Link to={'/register'}>Register</Link></button>  
      )}
   
    </div>

    </div>
    </>
  );
};

export default Navbar;


