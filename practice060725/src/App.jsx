import CompA from './components/CompA'
import CompB from './components/CompB'
import CompC from './components/CompC'
import {createContext,useState} from 'react' // STEP 1
import './App.css'
export const ThemeContext = createContext(); // step 2
function App() {
  const [theme,setTheme] = useState("dark");
  return (
    <>
      <CompA/>
      <CompB/>
      <ThemeContext.Provider value={theme}> // step 3
        <CompC/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
