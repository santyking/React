import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ReducerApi from './components/ReducerApi'
// import ReducerApi2 from './components/ReducerApi2'
// import ReducerApi3 from './components/ReducerApi3'
import ReducerAPI4 from './components/ReducerAPI4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReducerAPI4/>
    </>
  )
}

export default App
