import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits : [],
    numbers : 0,

}

const habitSlice = createSlice({
   name:'habits',
   initialState,
   reducers:{
    addHabit: (state, action)=>{
       state.habits.push(action.payload)
    },
    
    deleteHabit : (state, action)=>{
       state.habits = state.habits.filter((habit)=>{
         return habit.id !== action.payload.id
      }
       )
    },
    completedHabit : (state, action)=>{
      const habit = state.habits.find(
         e => e.id === action.payload
      )
      if(habit){
         if(!habit.streak)habit.streak = 0
         habit.streak += 1
      }
    }
   }
})

export default habitSlice.reducer;
export const {addHabit, deleteHabit, completedHabit} = habitSlice.actions;