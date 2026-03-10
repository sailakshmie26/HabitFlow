import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
      username:'',
      email:'',
      password:'',
      city:'',
    })

  const handleInput = (e) =>{
    const {name,value} = e.target
    setFormdata((prev) => ({...prev, [name]:value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("registeredUser", JSON.stringify(formdata))
    dispatch(loginUser(formdata))
    navigate("/dashboard")
    alert('Registration successfull!')
    setFormdata({
      username:'',
      email:'',
      password:"",
      city:""
    })
    
  }
  
  return (
    <>
      <Navbar />
      <div>
        <h2>
          Transform your daily habits into an epic adventure. Habit Flow is here
          to help level up your life the way you have always wanted.
        </h2>
        <div>
          <h2>Welcome!</h2>
          <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg">

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Username
                </label>
                <input
                onInput={handleInput}
                  value={formdata.username}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="username"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
            </div>

              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                onInput={handleInput}
                  value={formdata.email}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                onInput={handleInput}
                value={formdata.password}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  name="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                onInput={handleInput}
                value={formdata.city}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  name="city"
                  placeholder="City"
                />

                <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded">
                  Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
