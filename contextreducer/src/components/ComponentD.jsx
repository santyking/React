import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentD() {
  const myCountContext = useContext(CountContext);
  return (
    <div>ComponentD
      <button onClick={()=>myCountContext.countDispatch('increment')}>+</button>
        <button onClick={()=>myCountContext.countDispatch('decrement')}>-</button>
        <button onClick={()=>myCountContext.countDispatch('reset')}>0</button>
    </div>
  )
}

export default ComponentD