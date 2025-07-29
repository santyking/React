import Home from './components/Home'
import About from './components/About'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavLinkBar from './components/NavLinkBar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <NavLinkBar/>
    </>
  )
}

export default App
