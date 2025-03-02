import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterOne from './components/CounterOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterOne/>
    </>
  )
}

export default App
