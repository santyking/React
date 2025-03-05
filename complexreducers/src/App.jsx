import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiReducers from './components/MultiReducers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MultiReducers/>
    </>
  )
}

export default App
