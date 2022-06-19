import React from 'react'
import {Stack,Typography} from '@mui/material'
import icon from '../assets/icons/gym.png'
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
   <Stack type="button"
    alignItems="center" 
    justifyContent="center" 
    className="bodyPart-card"
    sx={{
        borderTop: bodyPart===item ? '4px solid #ff2625' :"",
            background:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
    }}
    >
    <img src={icon} alt="dumbbel" style={{width:'40px',height:'40px'}}/>
    <Typography fontSize='20px' 
    fontWeight='bold' textTransform='capitalize' color='#3a1212'
    >{item}</Typography>
   </Stack>
  )
}

export default BodyPart