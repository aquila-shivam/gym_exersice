import React from 'react'
import { useEffect,useState } from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import {options,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = () => {
  const[search,setSearch]= useState("");
  const [exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
         const fetchExercisesData = async () =>{
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          options)
          
         setBodyParts(['all',...bodyPartsData]);

         }
         fetchExercisesData();
  }, []);
  

  const handleSearch = async()=>{
    if(search)
    {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
      options);
      

      const searchExercise = exerciseData.fliter((exercises)=>
       exercises.name.toLocaleLowerCase().include(search)
      || exercises.target.toLocaleLowerCase().include(search)
      || exercises.equipment.toLocaleLowerCase().include(search)
      || exercises.bodyPart.toLocaleLowerCase().include(search));

      setSearch('');
      setExercise(searchExercise);     

      
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700} sx={{ fontSize : {lg:'44px' , sm : '30px'}}} mb="50px" textAlign="center">
      Awesome Exerices You <br/>Should Know
      </Typography>

      <Box position="relative" mb="76px">
       <TextField sx={{
        input:{fontWeight:"700" ,border:"none",borderRadius:"4px"},
        width:{lg:"800px",xs:'350px'},backgroundColor:"fff" ,borderRadius:"40"
       }} placeholder='Search Exercises' onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} value={search} type="text" height="76px"/>
       <Button className="search-btn" 
       sx={{
        bgcolor:"#ff2625",
        color:"#fff" ,
        textTransform:"none" , 
        width:{lg:"175px",xs:"80px",
        fontSize:{lg:"20px" , sm:"14px"},
        height:"56px",
        position:"absolute",
        right:'0'
       }}}
       onClick={handleSearch} 
       >Search</Button>
      </Box>

      <Box sx={{position:'relative',width:'100%', p:'20px'}}>
         <HorizontalScrollbar data={bodyParts}/>
      </Box>
      
    </Stack>
  )
}

export default SearchExercises