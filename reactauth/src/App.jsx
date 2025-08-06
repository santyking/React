import { Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import Home from './components/Home'
import { AuthProvider } from './components/Auth'
import Login from './components/Login'
import Navbar from './components/Navbar'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
          } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
