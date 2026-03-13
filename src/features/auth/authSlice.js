import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const storedUser = JSON.parse(localStorage.getItem('storedUser'))
const currentUser = JSON.parse(localStorage.getItem('currentUser'))

const initialState = {
    users: storedUser || [] ,
    loggedinUser : currentUser || null
}

const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
       register:(state, action)=>{
        const {email, username} = action.payload;
        const existingUser = state.users.find((x)=>{
           return x.email === email
        })
        if(existingUser){
            toast.error("This email is already registered, please login.")
            return;
        }
        state.users.push({id:Date.now(),...action.payload})
        localStorage.setItem('storedUser', JSON.stringify(state.users))
        toast.success("User registered.")
        },
       loginUser: (state, action)=>{
        const {email, password} = action.payload;
        const existingUser = state.users.find((x)=>{
            return x.email === email
        })
        if(!existingUser){
            return toast.error("No user found with this email! Please register.")
        }
        if(existingUser.password !== password){
            return toast.error("Invalid credentials!")
        }
        state.loggedinUser = existingUser
        localStorage.setItem('currentUser', JSON.stringify(state.loggedinUser))
        toast.success("Logged in successfully!")
       },
       logoutUser: (state)=>{    
         localStorage.removeItem("currentUser")
         state.loggedinUser = null;
         toast.success("Logged out!")
       }
       
    }
})

export const {register, loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;