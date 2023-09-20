import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StartQuiz } from '../feature/QuizSlice'

const WelcomeScreen = () => {
    const total = useSelector((state)=>state.APP.totalQuestions)
    const dispatch = useDispatch()
    const handleStart =() => {
        dispatch(StartQuiz())
    }
    return (
        
        <Stack>
            <Typography variant='h3'>Welcome To The React Quiz</Typography>
            <Typography fontSize={24}> {total.length} Questions to test your React Mastery</Typography>
            <Stack alignItems={'center'} mt={2}>
                <Button variant='contained' sx={{ width: '10%',  padding :  "10px 0px" , color: 'whitesmoke', fontWeight: 600, borderRadius: '20px' }} onClick={handleStart}>Start</Button>
            </Stack>
        </Stack>
    )
}

export default WelcomeScreen;
