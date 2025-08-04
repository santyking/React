import { Routes,Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
