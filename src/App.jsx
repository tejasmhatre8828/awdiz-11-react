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
import UseParams from './pages/01-aug/useParams'
import Product from './pages/01-aug/product'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import StyledComponent from './pages/02-aug/StyledComponent'
import CreateFruit from './pages/02-aug/CreateFruit'
import Greeting from './pages/02-aug/Greeting'
import DynamicStyles from './pages/03-aug/DynamicStyles'
import PageNotFound from './pages/06-aug/PageNotFound'
import FakeStore from './pages/06-aug/FakeStore'

function App() {
  const [users, setUsers] = useState(["Virat", "Rohit", "Rahul"]);
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
        <Route path="/use-params" element={<UseParams />} />
        <Route path="/product/:productId" element={<Product cricketers={users} />} />
        <Route path="/styled-component" element={<StyledComponent />} />
        <Route path="/create-fruit" element={<CreateFruit />} />
        <Route path="/greeting" element={<Greeting name="User" isLoggedIn={false} />} />
        <Route path="/dynamic-styles" element={<DynamicStyles />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/fakestore" element={<FakeStore />} />
      </Routes>
    </div>
  )
}

export default App
