import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Finish } from '../feature/QuizSlice';
import { Stack, Typography } from '@mui/material';

const Timer = () => {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(30);
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                
                clearTimeout(timer);
                dispatch(Finish())
            }
        }, 1000);

        return () => clearTimeout(timer); 
    }, [minutes, seconds]);

    return (
        <Stack>

            <Typography>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </Typography>
        </Stack>
    );
};

export default Timer;
