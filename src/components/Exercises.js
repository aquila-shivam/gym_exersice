import React ,{useEffect,useState}from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import {options,fetchData} from '../utils/fetchData'

const Exercises = (setExercise,bodyPart,exercise) => {

  console.log(exercise);
  return (
    <Box id="exercise" sx={{mt:{lg:'110px'}}} mt="50px" p="20px">
      <Typography variant='h3'>Showing Results</Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
       {exercise?.map((exe,index)=>(<p>exe.name</p>))}
      </Stack>
    </Box>
  )
}

export default Exercises