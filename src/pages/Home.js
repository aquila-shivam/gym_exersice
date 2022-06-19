import React from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {

  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all")
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercise}
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}/>
      <Exercises
       setExercises={setExercise}
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home