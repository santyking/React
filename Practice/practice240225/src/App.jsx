import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrevState from './components/PrevState'
import ArrComp from './components/ArrComp'
import ObjComp from './components/ObjComp'
import PostList from './components/PostList'
import SinglePost from './components/SinglePost'
import ReducerSimple from './components/ReducerSimple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReducerSimple/>
    </>
  )
}

export default App
