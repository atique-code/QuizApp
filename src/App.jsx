import { Stack, Typography } from '@mui/material'
import { motion } from "framer-motion"
import animatioData from './components/img/React.json'
import Loader from './components/img/loader.json'
import Lottie from 'lottie-react'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeScreen from './components/welcomeScreen'
import { useEffect } from 'react'
import { QUIZ_API } from './feature/QuizSlice'
import QuizStart from './components/QuizStart'
import FinishScreen from './components/FinishScreen'


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.APP);
  const { status } = data;
  console.log(status)


  useEffect(() => {
    dispatch(QUIZ_API())
  }, [])
  return (
    <Stack justifyContent={'center'} justifyItems={'center'} justifySelf={'center'}>
      
      <Stack style={{ background: 'linear-gradient(to right, #ff9900, #ff66cc)' }}>
        <motion.div
          // className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 4,
              stiffness: 80,
              restDelta: 0.001
            }
          }}
        >
          <Stack flexDirection={'row'} justifyContent={'center'}>
            <Stack sx={{ width: '90px', height: '100px' }}>
              <Lottie animationData={animatioData} />
            </Stack>
            <Stack pt={2}>

              <Typography variant='h3' sx={{ fontWeight: 500 }}>The React Quiz</Typography>

            </Stack>
          </Stack >

        </motion.div>

      </Stack>
      {
        status === 'loading' &&
        <Stack alignSelf={'center'} sx={{ width: '20%', height: '5%' }}>
          <Lottie animationData={Loader} />
        </Stack>
      }
      {
        status === 'ready' &&
        <Stack textAlign={'center'} my={3}>
          <WelcomeScreen />
        </Stack>
      }

      {
        status === 'active' &&
        <Stack textAlign={'center'} my={3}>
          <QuizStart />
        </Stack>
      }
       
      {
        status === 'finish' &&
        <FinishScreen/>
      }
    </Stack>

  )
}

export default App
