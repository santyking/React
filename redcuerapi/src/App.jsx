import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ReducerApi from './components/ReducerApi'
import ReducerApi2 from './components/ReducerApi2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReducerApi2/>
    </>
  )
}

export default App
