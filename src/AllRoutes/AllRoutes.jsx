import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function AllRoutes() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </>
  )
}
