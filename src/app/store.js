import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '../reduxSlices/habitSlice'

export const store = configureStore({
    reducer: {
        habits: habitReducer,
    }
})