import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefComp from './components/RefComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RefComp/>
        
    </>
  )
}

export default App
