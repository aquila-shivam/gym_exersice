import React ,{useEffect,useState}from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import {options,fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({exercise,bodyPart,setExercise}) => {
  console.log(exercise)
  return (
    <Box id="exercise" sx={{mt:{lg:'110px'}}} mt="50px" p="20px">
      <Typography variant='h3'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
       {exercise.map((exe,index)=>(
        <ExerciseCard key ={index} exercise={exe}/>
       ))}
      </Stack>
    </Box>
  )
}

export default Exercises