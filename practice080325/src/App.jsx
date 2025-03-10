import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayItemDelete from './components/ArrayItemDelete'
import Arrayitemdeletesplice from './components/Arrayitemdeletesplice'
import DataFetching from './components/DataFetching'
import AddemailComp from './components/AddemailComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ArrayItemDelete/> */}
      {/* <Arrayitemdeletesplice/> */}
      {/* <DataFetching/> */}
      <AddemailComp/>
    </>
  )
}

export default App
