import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "../feature/QuizSlice";

export const store = configureStore({
    reducer: {
        APP: QuizSlice
    }
})