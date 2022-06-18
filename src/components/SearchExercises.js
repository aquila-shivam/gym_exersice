import React from 'react'
import { useEffect,useState } from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { borderRadius } from '@mui/system'

const SearchExercises = () => {
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700} sx={{ fontSize : {lg:'44px' , sm : '30px'}}} mb="50px" textAlign="center">
      Awesome Exerices You <br/>Should Know
      </Typography>

      <Box position="relative" mb="76px">
       <TextField sx={{
        input:{fontWeight:"700" ,border:"none",borderRadius:"4px"},
        width:{lg:"800px",xs:'350px'},backgroundColor:"fff" ,borderRadius:"40"
       }} placeholder='Search Exercises' onChange={(e)=>{}} value="" type="text" height="76px"/>
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
       }}}>Search</Button>
      </Box>
      
    </Stack>
  )
}

export default SearchExercises