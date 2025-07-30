import { Routes,Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Page404 from './components/Page404'
import OrderPlaced from './components/OrderPlaced'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ordered' element={<OrderPlaced/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>      
    </>
  )
}

export default App
