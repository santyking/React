import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // step 1 import browser 

// step 2 wrap the root component witn BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </StrictMode>,
)
