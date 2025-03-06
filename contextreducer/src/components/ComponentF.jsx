import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentF() {
  const myCountContext = useContext(CountContext);
  return (
    <div>ComponentF
      <button onClick={()=>myCountContext.countDispatch('increment')}>+</button>
        <button onClick={()=>myCountContext.countDispatch('decrement')}>-</button>
        <button onClick={()=>myCountContext.countDispatch('reset')}>0</button>
    </div>
  )
}

export default ComponentF