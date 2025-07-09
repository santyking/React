import { createContext, useState } from 'react'
// import CounterOne from './components/CounterOne'
// import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import './App.css'
export const myTheme = createContext();
function App() {

  return (
    <>
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      <myTheme.Provider value="dark">
        <CounterThree/>
      </myTheme.Provider>
    </>
  )
}

export default App
