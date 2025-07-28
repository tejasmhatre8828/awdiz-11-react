import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

    </div>
  )
}

export default App
