
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../components/Login/Login'

import Register from '../components/Register/Register'

import DashboardRouter from './DashboardRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
   
    <Routes>
     
      <Route  path='/login' element={<Login />}/>
      <Route  path='/Register' element={<Register />}/>
      <Route  path='/*' element={<DashboardRouter />} />

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter