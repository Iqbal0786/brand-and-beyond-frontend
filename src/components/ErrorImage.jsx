import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorImage() {
    const navigate= useNavigate()
  return (
    <Box
    sx={{width:"80%" , height:"500px" , margin:"auto" , marginTop:"80px" , position:"relative"}}
    
    >
        <Typography sx={{color:"gray", fontWeight:"bold"}}>
            Warning!! You are not allowed to move ahead.
        </Typography>
        <Typography sx={{color:"blue" , fontSize:"19px" , fontStyle:"italic" , cursor:"pointer"}}
        onClick={()=>{
           navigate("/login")
        }}
        >
           Click to Return 
        </Typography>

     
    <img src='https://freefrontend.com/assets/img/403-forbidden-html-templates/403-Forbidden.gif' width={"100%"} height={"100%"} alt='Error Image '/></Box>
  )
}