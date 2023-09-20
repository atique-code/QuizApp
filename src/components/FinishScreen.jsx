import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RestartQuiz } from '../feature/QuizSlice'

const FinishScreen = () => {
    const dispatch = useDispatch()
    const { percentage, score, record } = useSelector((state) => state.APP)

    const handleRestart = () => {
        dispatch(RestartQuiz())
    }
    return (
        <Stack textAlign={'center'} my={6}>
            <Typography variant='h5'>You Score {score} out Of 280 ({percentage})%</Typography>
            <Typography variant='h5'>Heighest Score {record > score ? record : score}</Typography>
            <Stack alignItems={'center'} width={'100%'} my={2}>
                <Stack width={'15%'}>
                    <Button variant='contained' sx={{ borderRadius: '20px', padding: "10px", color: 'whitesmoke', fontWeight: 600 }} onClick={handleRestart}>Restart</Button>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default FinishScreen
