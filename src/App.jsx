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
import SingleProduct from './pages/06-aug/SingleProduct'
import UseMemo from './pages/10-aug/UseMemo'
import UseCallback from './pages/10-aug/UseCallback'
import UseRef from './pages/13-aug/UseRef'
import RegistrationForm from './pages/17-aug/RegistrationForm'
import UseReducer from './pages/20-aug/UseReducer'
import ContextCounter from './pages/22-aug/ContextCounter'
import CountDownTimer from './pages/23-aug-test/CountDownTimer'
import TodoList from './pages/23-aug-test/TodoList'
import ProductList from './pages/23-aug-test/ProductList'
import AnswerShit from './pages/23-aug-test/AnswerShit'
import Calculator from './pages/30-aug/Calculator'
import ShoppingCart from './pages/23-aug-test/ShopingCart'

function App() {
  const [users, setUsers] = useState(["Virat", "Rohit", "Rahul"]);
  return (
    <div>
      {/* <Navbar /> */}
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
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/countdown-timer" element={<CountDownTimer />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/answer-shit" element={<AnswerShit />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App
