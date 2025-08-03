import { Routes,Route } from 'react-router-dom'
import './App.css'
import React,{Suspense,lazy} from 'react'
import Home from './components/Home'
// import About from './components/About'
const myAbout = React.lazy(()=>import('./components/About'));
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={
      <React.Suspense fallback='Loading...'>
        <myAbout/>
      </React.Suspense>
        }/>
      <Route path='/users' element={<Users/>}>
        <Route path=':userdetails' element={<UserDetails/>}/>
        <Route path='Admin' element={<Admin/>}/>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
