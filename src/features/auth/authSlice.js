import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
       loginUser: (state, action)=>{
        state.user = action.payload
        state.isAuthenticated = true
        localStorage.setItem("user", JSON.stringify(state.user))
        alert("Logged in successfully!")
       }
       
    }
})

export default authSlice.reducer;