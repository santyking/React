import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerApi from './components/ReducerApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReducerApi/>
    </>
  )
}

export default App
