import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'loading',
    totalQuestions: [],
    Next: 0,
    isDisable: false,
    score: 0,
    percentage: 0,
    record: 0

}

export const QUIZ_API = createAsyncThunk("getQuestions", async () => {
    try {
        let url = 'http://localhost:8000/questions';
        const resp = await axios.get(url)
        console.log(resp.data)
        return resp.data
    } catch (error) {
        console.log(error)
    }
})

export const QuizSlice = createSlice({
    name: 'QuizApp',
    initialState,
    reducers: {
        StartQuiz: (state) => {
            state.status = 'active';
        },
        NextQuestion: (state, action) => {
            state.isDisable = true;
            state.score = state.score + action.payload 
            
        },
        NextAnswer: (state, action) => {
            
            state.Next = state.Next + 1
            state.isDisable = false

        },
        Finish: (state) => {
            state.status = 'finish';
            state.record = state.score
            state.percentage = ((state.score /280 )*100).toFixed(2)
        },
        RestartQuiz: (state) => {
            state.status = 'ready',
            state.Next = 0,
            state.isDisable = false,
            state.score = 0,
            state.percentage = 0
        }
    },
    extraReducers: {
        [QUIZ_API.pending]: (state) => {
            state.status = 'loading'
        },
        [QUIZ_API.fulfilled]: (state, action) => {
            // console.log(action)
            // state.loading = false
            state.totalQuestions = action.payload;
            state.status = 'ready';
        },
        [QUIZ_API.rejected]: (state, action) => {
            // state.loading = true
        }
    }
})

export const { StartQuiz, NextQuestion, NextAnswer, Finish, RestartQuiz } = QuizSlice.actions
export default QuizSlice.reducer;

