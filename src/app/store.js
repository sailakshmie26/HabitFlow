import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '../features/habits/habitSlice'

export const store = configureStore({
    reducer: {
        habits: habitReducer,
    }
})