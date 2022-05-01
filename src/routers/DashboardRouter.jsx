import {  Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import NavBar from '../components/NavBar/NavBar'
import NoMatch from '../components/NoMatch/NoMatch'
import Register from '../components/Register/Register'
import Team from '../components/Team/Team'
import Profile from '../components/Profile/Profile'
import CardContainer from '../components/CardContainer/CardContainer'


const DashboardRouter = () => {
  return (
    <>
    
    <NavBar />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/Home' element={<Home />}/>
      <Route  path='/Team' element={<Team />}/>
      <Route  path='/Search' element={<CardContainer />}/>
      <Route  path='/Profile' element={<Profile />}/>
      <Route  path='/login' element={<Login />}/>
      <Route  path='/Register' element={<Register />}/>
      <Route  path='*' element={<NoMatch />}/>

    </Routes>
    </>
  )
}

export default DashboardRouter