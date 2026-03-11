import habitFlowIcon from "../assets/habitFlowIcon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between p-2 bg-purple-300">
    <div className="text-black-500 text-xl py-2">
      <h1><img src={habitFlowIcon} alt=""
      width={"25px"} />HABIT FLOW</h1>
    </div>
    <div className="flex gap-3 text-xl py-5">
    <button 
    className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
    <Link to={'/register'}>Register</Link></button>     
    </div>

    </div>
    </>
  );
};

export default Navbar;


