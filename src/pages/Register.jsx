import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import habitFlowIcon from "../assets/habitFlowIcon.png";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formdata));
    navigate("/");
  };

return (
<>
<Navbar />
<div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-purple-100 to-blue-100 text-center text-md font-semibold">
  <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
    
    <div className="text-center md:text-left space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
      Transform your daily habits into 
      <span className="text-purple-900"> an adventure</span>. Habit Flow is
      here to help level up your life the way you have always wanted.
    </h1>
    <p className="text-gray-600 text-lg max-w-md">
    Build Consistency. Track Progress. Become unstoppable.</p>
    <img
      src={habitFlowIcon}
      alt="HabitFlowIcon"
      className="w-20 mx:w-24 mx-auto md:mx-0 transform hover:scale-110 transition"
    />
    </div>
  
      <form
        onSubmit={handleSubmit}
        className=" w-full mx-w-md justify-self-center bg-white shadow-xl rounded-2xl p-8 space-y-5"
      >
            <h2 className="text-2xl font-bold text-center text-purple-900">
              Register
            </h2>
            <input
              onChange={handleInput}
              value={formdata.username}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="username"
              type="text"
              name="username"
              placeholder="username"
              required
            />

            <input
              onChange={handleInput}
              value={formdata.email}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />

            <input
              onChange={handleInput}
              value={formdata.password}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              required
            />

            <input
              onChange={handleInput}
              value={formdata.city}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="grid-city"
              type="text"
              name="city"
              placeholder="city"
              required
            />
              <button
                type="submit"
                className="w-full bg-purple-400 hover:bg-purple-900 text-white font-semibold py-3 rounded-lg transition"
              >
                Register
              </button>
        <p className="text-center font-semibold">Already registered? <Link
        className="text-blue-600" to={'/'}>
        Login Here</Link></p>
      </form>
  </div>
</div>
<Footer />
</>
);
};

export default Register;
