import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import UserDetails from './components/UserDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='users' element={<Users/>}>
        <Route path=':userid' element={<UserDetails/>}/>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
