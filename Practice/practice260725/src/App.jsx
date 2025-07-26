import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NormalCounter from './components/NormalCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NormalCounter/>
    </>
  )
}

export default App
