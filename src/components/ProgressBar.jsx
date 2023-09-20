import { Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


export const ProgressBar = () => {
    
    const { totalQuestions, Next } = useSelector(state => state.APP)
    const totalScore = totalQuestions.map(({ points }) => points).reduce((a, b) => a + b, 0)
    console.log(totalScore)
    // const {question} = questions   
    // console.log(totalQuestions.length)
    return (
        <>
            <progress style={{ width: "100%" }} max={totalQuestions.length} value={Next + 1} />
        </>
    )
}
// export default ProgressBar