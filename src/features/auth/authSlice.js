import { createSlice } from "@reduxjs/toolkit";

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
        const {email} = action.payload;
        const existingUser = state.users.find((x)=>{
           return x.email === email
        })
        if(existingUser){
            alert("This email is already registered, please login.")
            return;
        }
        state.users.push({id:Date.now(),...action.payload})
        localStorage.setItem('storedUser', JSON.stringify(state.users))
        alert("User registered.")
        },
       loginUser: (state, action)=>{
        const {email, password} = action.payload;
        const existingUser = state.users.find((x)=>{
            return x.email === email
        })
        if(!existingUser){
            return alert ("No user found with this email. Please register")
        }
        if(existingUser.password !== password){
            return alert("Invalid credentials!")
        }
        state.loggedinUser = existingUser
        localStorage.setItem('currentUser', JSON.stringify(state.loggedinUser))
        alert("Logged in!")
       },
       logoutUser: (state)=>{    
         localStorage.removeItem("currentUser")
         state.loggedinUser = null;
         alert("Logged out!")
       }
       
    }
})

export const {register, loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;