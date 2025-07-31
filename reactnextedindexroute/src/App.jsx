import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Featured from './components/Featured'
import New from './components/New'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<New/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
