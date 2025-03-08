import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayItemDelete from './components/ArrayItemDelete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArrayItemDelete/>
    </>
  )
}

export default App
