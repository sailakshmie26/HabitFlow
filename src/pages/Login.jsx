import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loginUser} from '../features/auth/authSlice'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email:'',
    password:''
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInput = (e) => {
  const {name,value} = e.target
  setFormdata((prev) => ({...prev,[name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formdata));
    const user = JSON.parse(localStorage.getItem("currentUser"))
    if(user ){
      navigate('/dashboard')
    }
 
    setFormdata({
      email:'',
      password:"",
    })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="grid md:grid-cols-2 gap-10 items-center text-center font-semibold max-w-6xl w-full">
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Welcome back to
        <span className="text-purple-900"> Habit Flow.</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Continue your journey. Stay consistent. Stay unstoppable.
        </p>
      </div>
      
       <form
       onSubmit={handleSubmit}
       action="" 
       className="w-full max-w-md justify-self-center bg-white rounded-2xl shadow-xl p-8 space-y-5">
      
       <h2 className="text-2xl font-bold text-center text-purple-900">
        Login
       </h2>

        <input 
        onChange={handleInput}
        value={formdata.email}
        name="email"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" 
        type="email" placeholder="Email"/>

        <input 
        onChange={handleInput}
        value={formdata.password}
        name="password"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" 
        type="password" placeholder="Password"/>
        
        <button
        type="submit"
        className="w-full bg-purple-400 hover:bg-purple-900 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105">
        Login</button>

        <p className="text-center font-semibold">New User? <Link
        className="text-blue-600" to={'/register'}>
        Register Here</Link></p>
       </form>
        <div>
       </div> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;


