import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentA() {
    const myCountContext = useContext(CountContext);
  return (
    <div>ComponentA
        <button onClick={()=>myCountContext.countDispatch('increment')}>+</button>
        <button onClick={()=>myCountContext.countDispatch('decrement')}>-</button>
        <button onClick={()=>myCountContext.countDispatch('reset')}>0</button>
    </div>
  )
}

export default ComponentA