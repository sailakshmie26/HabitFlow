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
      <div className="sticky top-0 z-50 flex justify-between items-center px-8 py-1 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={habitFlowIcon}
            alt="HabitFlowIcon"
            className="w-10 h-10 transform hover:scale-110 transition"
          />
          <h1 className="text-2xl text-purple-900 font-bold tracking-wide">HABIT FLOW</h1>
        </div>

        <div className="flex gap-3 text-xl py-5">
          {loggedinUser ? (
            <button
              onClick={handleLogout}
              className="bg-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              LOGOUT
            </button>
          ) : (
            <Link to={"/register"}>
              <button className="bg-purple-900 hover:bg-purple-500 text-white font-medium py-2 px-5 rounded-full transition">
                REGISTER
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
