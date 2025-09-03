import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import { store } from './pages/30-aug/store.jsx'
import store  from './pages/Shopping-cart/store.jsx'
import { BrowserRouter } from 'react-router-dom'
import CounterContextComponent from './context/CounterContext.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CounterContextComponent>
    <Provider store={store}>
      <App />
    </Provider>
    </CounterContextComponent>
    </BrowserRouter>
  </StrictMode>
)
