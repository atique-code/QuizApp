import { Button, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Finish, NextAnswer } from '../feature/QuizSlice'

const BtnComponent = () => {
    const dispatch = useDispatch()
    const { totalQuestions, Next } = useSelector((state) => state.APP)
    // console.log(Next)
    const handleNext = () => {
        dispatch(NextAnswer(totalQuestions[Next].points))
    }

    const handleFinish = () => {
        dispatch(Finish())
    }

    return (
        <Stack >
            {
                Next === totalQuestions.length - 1 ?
                    <Button variant='contained' sx={{borderRadius: '15px'}} onClick={handleFinish}>Finish</Button>
                    :
                    <Button variant='contained' sx={{borderRadius: '15px'}} onClick={handleNext}>Next</Button>
            }
        </Stack>
    )
}

export default BtnComponent
