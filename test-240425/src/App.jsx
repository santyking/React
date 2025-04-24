import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import UsingArray from './components/UsingArray'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsingArray/>
    </>
  )
}

export default App
