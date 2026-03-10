import habitFlowIcon from "../assets/habitFlowIcon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between p-2 bg-blue-300">
    <div className="text-black-500 text-xl py-2">
      <h1><img src={habitFlowIcon} alt=""
      width={"25px"} />HABIT FLOW</h1>
    </div>
    <div className="flex gap-3 text-xl py-5">
      <Link to={'/register'}>Register</Link>
    </div>

    </div>
    </>
  );
};

export default Navbar;


