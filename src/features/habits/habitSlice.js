import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits : [],
    numbers : 0,

}

const habitSlice = createSlice({
   name:'habits',
   initialState,
   reducers:{
    addHabit: (state)=>{
       state.habits.push("habit1")
    },
    
    getHabit : ()=>{

    }
   }
})

export default habitSlice.reducer;
export const {addHabit, getHabit} = habitSlice.actions;