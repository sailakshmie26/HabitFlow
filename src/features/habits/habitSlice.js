import { createSlice } from "@reduxjs/toolkit";
import { loadHabits, saveHabits } from "../../utils/storage";
import { calculateStreak } from "../../utils/streakCalculator";

const initialState = {
    habits : loadHabits(),
}

const habitSlice = createSlice({
   name:'habits',
   initialState,
   reducers:{
    addHabit: (state, action)=>{
       state.habits.push(action.payload)
       saveHabits(state.habits)
    },
    
    deleteHabit : (state, action)=>{
       state.habits = state.habits.filter((habit)=>
         habit.id !== action.payload                   
       );
       saveHabits(state.habits) 
    },
    completedHabit : (state, action)=>{
      const habit = state.habits.find(
         (h) => h.id === action.payload
      )
      if(!habit) return;
      
      if(!habit.completedDates){
          habit.completedDates = []
         }
         const today = new Date().toISOString().split("T")[0]

         if(!habit.completedDates.includes(today)){
         habit.completedDates.push(today)
         }
         habit.streak = calculateStreak(habit.completedDates)
         saveHabits(state.habits)       
      }
    }
   }
)

export default habitSlice.reducer;
export const {addHabit, deleteHabit, completedHabit} = habitSlice.actions;

