import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyGrid from './MyGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyGrid/>
    </div>
  )
}

export default App
