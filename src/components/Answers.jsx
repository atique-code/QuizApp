import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextAnswer, NextQuestion } from '../feature/QuizSlice'
import BtnComponent from './BtnComponent'
import Timer from './TimerComponent'

const Answers = () => {
    const getAnswers = useSelector((state) => state.APP)
    const { totalQuestions, Next, isDisable } = getAnswers
    // console.log(totalQuestions)
    const { points } = totalQuestions.at(Next)
    console.log("destructure", points)
    const dispatch = useDispatch()
    // const [isdisabled , setisDisabled] = useState(false)
    const correct = totalQuestions.at(Next).correctOption

    const handleAnswer = (index) => {
        let add = 0
        if (correct == index) {
            add = points
        }
        dispatch(NextQuestion(add))
    }
    return (
        <Stack alignItems={'center'} width={'100%'}>
            {totalQuestions[Next].options.map((val, index) => {
                return (
                    <Stack my={2} key={index} width={'38%'}>
                        <Button variant='contained'
                            disabled={isDisable}
                            style={{
                                borderRadius: '20px',
                                backgroundColor: `${isDisable && correct == index ? 'SkyBlue'
                                    : (isDisable && correct != index) ? 'orange' : '#495057'}`,
                                padding: "10px 0px", color: 'whitesmoke', fontWeight: 600
                            }}
                            onClick={() => handleAnswer(index)}
                        >
                            {val}
                        </Button>
                    </Stack>
                )
            })}
            <Stack width={'37%'}>

                <Stack flexDirection={'row'} justifyContent={'space-between'}>

                    <Timer />


                    {
                        isDisable &&

                        <BtnComponent />
                        // <Button onClick={handleNext}>Next</Button>
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Answers;
