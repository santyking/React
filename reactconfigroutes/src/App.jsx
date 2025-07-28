import { Routes,Route } from 'react-router-dom'
// step 3 : import the components into root component
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import './App.css'

function App() {

  return (
    //step 4: configure routes
    <>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
