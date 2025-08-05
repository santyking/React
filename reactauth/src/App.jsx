import { Routes,Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import Home from './components/Home'
import { authProvider } from './components/Auth'
import Login from './components/Login'

function App() {
  return (
    <>
    <authProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </authProvider>
    </>
  )
}

export default App
