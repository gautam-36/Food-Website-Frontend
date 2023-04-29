import React from 'react'
import "./app.scss"
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/'  exact element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App