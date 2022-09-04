import React from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {

  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all")

  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercise={setExercise}
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}/>
      <Exercises
      exercise={exercise}
      bodyPart={bodyPart} 
      setExercise={setExercise} 
      />
    </Box>
  )
}

export default Home