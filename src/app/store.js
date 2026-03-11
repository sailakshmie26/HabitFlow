import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '../features/habits/habitSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        users : authReducer,
        habits: habitReducer,
    }
})