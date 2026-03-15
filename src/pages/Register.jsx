import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

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

  const handleSubmit =(e) => {
    e.preventDefault()
    dispatch(register(formdata))
    navigate("/")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-md font-semibold">
        <h2>
          Transform your daily habits into an epic adventure. Habit Flow is here
          to help level up your life the way you have always wanted.
        </h2>
        <div>
          <h2>Register now to explore!</h2>
          <div className="w-full max-w-2xl">
          <form
          onSubmit={handleSubmit} 
          className="bg-white shadow-lg rounded-xl p-10 mt-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  onChange={handleInput}
                  value={formdata.username}
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-blue-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="username"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  onChange={handleInput}
                  value={formdata.email}
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-blue-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={handleInput}
                  value={formdata.password}
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="******************"
                  required
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  onChange={handleInput}
                  value={formdata.city}
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-blue-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  name="city"
                  placeholder="city"
                  required
                />
                <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white mt-2 px-6 py-2 rounded"
                >
                  Register
                </button>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
