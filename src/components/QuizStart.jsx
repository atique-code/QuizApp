import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Answers from './Answers'
import { ProgressBar } from './ProgressBar'

const QuizStart = () => {
    const getQuestion = useSelector((state) => state.APP)
    const { totalQuestions, Next, score } = getQuestion
    console.log(totalQuestions[0].points)

    return (
        <Stack  alignSelf={'center'} width={'100%'}>
            <Stack alignSelf={'center'}>
                <ProgressBar />
                <Stack flexDirection={'row'} gap={10} >
                    <Typography>Question {Next + 1}/{totalQuestions.length}</Typography>
                    <Typography>Points {score}/280</Typography>
                </Stack>
            </Stack>
            <Stack mt={5}>
                <Typography fontSize={25}>{totalQuestions[Next].question}</Typography>
                <Stack alignItems={'center'} >
                    <Answers />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default QuizStart
