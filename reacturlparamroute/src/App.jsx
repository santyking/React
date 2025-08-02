import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
