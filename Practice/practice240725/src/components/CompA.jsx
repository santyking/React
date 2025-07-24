import React, { useContext } from 'react'
import { CountContext } from '../App'

function CompA() {
    const myCount = useContext(CountContext);
  return (
    <div>CompA- {myCount.countState}
    <button onClick={()=>myCount.countDispatch("add")}>+</button>
    <button onClick={()=>myCount.countDispatch("sub")}>-</button>
    <button onClick={()=>myCount.countDispatch("res")}>x</button>
    </div>
  )
}

export default CompA