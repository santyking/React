import { useState,useReducer, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import './App.css'

export const CountContext = createContext();

const initialState = 0;
const reducer = (state,action)=>{
  switch (action) {
    case 'increment':
      return state +1;
    case 'decrement':
      return state -1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const[count,dispatch] =  useReducer(reducer,initialState);
  return (
    <>
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}> 
      {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </CountContext.Provider>
    </>
  )
}

export default App
