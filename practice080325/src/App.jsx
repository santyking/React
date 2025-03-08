import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayList from './components/ArrayList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArrayList/>
    </>
  )
}

export default App
