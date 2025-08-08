import CompA from './components/CompA'
import './App.css'
import { createContext } from 'react'
export const themeContext = createContext(null);
function App() {

  return (
    <>
    <themeContext.Provider value="dark">
      <CompA/>
    </themeContext.Provider>
    </>
  )
}

export default App
