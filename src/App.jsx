import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'
import UseState from './pages/30-july/useState'
import UseEffect from './pages/30-july/useEffect'
import useParams from './pages/01-aug/useParams'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {

  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/useParams" element={<products />} />
      <Route path="/useParams/:productID" element={<useParams />} />
    </Routes>

    </div>
  )
}

export default App
