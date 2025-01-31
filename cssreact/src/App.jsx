import { useState } from 'react'
import './App.css'
// import ThemeComponent from './assets/components/ThemeComponent'
// import InlineStyling from './assets/components/InlineStyling'
// import MultiStyling from './assets/components/MultiStyling'
import ModuleComponent from './assets/components/ModuleComponent'

function App() {
  // const [appTheme,setTheme] = useState("light"); 
  return (
    <>
      {/* <ThemeComponent theme={appTheme}/>
      <button onClick={()=>setTheme("dark")}>Dark Theme</button>
      <button onClick={()=>setTheme("light")}>Light Theme</button> */}
      {/* <InlineStyling/> */}
      {/* <MultiStyling type="dark"/> */}
      <ModuleComponent/>
    </>
  )
}

export default App
