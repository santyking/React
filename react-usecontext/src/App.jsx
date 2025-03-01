import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './components/ComponentA'

export const MyTheme = createContext();

function App() {

  return (
    <>
      <MyTheme.Provider value={"dark"}>
        <ComponentA/>
      </MyTheme.Provider>
    </>
  )
}

export default App
