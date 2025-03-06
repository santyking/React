import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './components/ComponentOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentOne/>
    </>
  )
}

export default App
