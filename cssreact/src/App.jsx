import { useState } from 'react'
import './App.css'
import ThemeComponent from './assets/components/ThemeComponent'

function App() {
  const [appTheme,setTheme] = useState("light"); 
  return (
    <>
      <ThemeComponent theme={appTheme}/>
      <button onClick={()=>setTheme("dark")}>Dark Theme</button>
      <button onClick={()=>setTheme("light")}>Light Theme</button>
    </>
  )
}

export default App
