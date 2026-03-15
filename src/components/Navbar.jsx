import habitFlowIcon from "../assets/habitFlowIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedinUser = useSelector((state) => state.users.loggedinUser);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-0 bg-purple-300 text-gray-700 shadow-md">
        <div className=" flex items-center gap-3 text-black-500 text-xl py-2">
          <img
            src={habitFlowIcon}
            alt="HabitFlowIcon"
            className="w-10 h-10 transform hover:scale-110 duration-500 transition"
          />
          <h1 className="text-3xl font-bold tracking-wide">HABIT FLOW</h1>
        </div>

        <div className="flex gap-3 text-xl py-5">
          {loggedinUser ? (
            <button
              onClick={handleLogout}
              className="bg-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <Link to={"/register"}>
              <button className="bg-blue-300 hover:bg-blue-500 text-gray-700 font-semibold py-1 px-4 rounded-full">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
