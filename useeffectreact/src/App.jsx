import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import HookMouse from './components/HookMouse'
import HookMouse2 from './components/HookMouse2'
import MouseContainer from './components/MouseContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <HookMouse2/> */}
      <MouseContainer/>
    </>
  )
}

export default App
