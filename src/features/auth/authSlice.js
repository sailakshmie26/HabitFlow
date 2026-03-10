import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('loggedInUser')

const initialState = {
    user: storedUser? JSON.parse(storedUser) : null
}

const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
       register:(state, action)=>{
        
        },
       loginUser: (state, action)=>{
        state.user = action.payload
        localStorage.setItem("loggedInUser", JSON.stringify(state.user))
        alert("Logged in successfully!")
       },
       logoutUser: (state)=>{
         state.user = null;
         localStorage.removeItem("loggedInUser")
         alert("Logged out!")
       }
       
    }
})

export const {loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;