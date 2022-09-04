import React ,{useEffect,useState}from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import {options,fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({exercise,bodyPart,setExercise}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercise.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate =(e,value)=>{
      setCurrentPage(value);
      window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(() => {
    
    const fetchExercisesData =async () =>{
      let exerciseData = [];
      if(bodyPart === 'all')
      {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        options)
      }
      else
      {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        options)
      }
      setExercise(exerciseData);
    }
    fetchExercisesData();
  }, [bodyPart])
  


  return (
    <Box id="exercise" sx={{mt:{lg:'110px'}}} mt="50px" p="20px">
      <Typography variant='h3'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
       {currentExercise.map((exe,index)=>(
        <ExerciseCard key ={index} exercise={exe}/>
       ))}
      </Stack>
      <Stack mt="100px" alignItems="center" >
        {exercise.length > 9 &&
        (
        <Pagination 
          color='standard'
          shape='rounded'
          defaultPage={1}
          count = {Math.ceil(exercise.length / exercisePerPage )}
          page={currentPage}
          onChange ={paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises