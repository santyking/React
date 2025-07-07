import { useState } from 'react'
import CounterOne from './components/CounterOne'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterOne/>
    </>
  )
}

export default App
