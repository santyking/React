import { useState } from 'react'
// import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterOne/> */}
      <CounterTwo/>
    </>
  )
}

export default App
