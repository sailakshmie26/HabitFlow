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
    navigate('/dashboard')
    setFormdata({
      email:'',
      password:"",
    })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center gap-3">
        <h2 className="text-center max-w-xl">
          Transform your daily habits into an epic adventure. Habit Flow is here
          to help level up your life the way you have always wanted.
        </h2>
       <form
       onSubmit={handleSubmit}
       action="" 
       className="flex flex-col p-6 shadow-xl gap-4 w-80">

        <input 
        onChange={handleInput}
        value={formdata.email}
        name="email"
        className="border outline-0 rounded border-gray-400 p-2" 
        type="email" placeholder="Email"/>

        <input 
        onChange={handleInput}
        value={formdata.password}
        name="password"
        className="border outline-0 rounded border-gray-400 p-2" 
        type="password" placeholder="Password"/>
        
        <button
        type="submit"
        className="bg-orange-500 text-white text-xl rounded p-2">
        Login</button>

        <p>New User? <Link to={'/register'}>
        Register Here</Link></p>
       </form>
        <div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;


