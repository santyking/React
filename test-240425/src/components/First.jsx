import React from 'react'
import { useState } from 'react'

function First() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <div>
        {
            count
        }
        </div>
        <button onClick={()=>setCount(prevstate=>prevstate+1)}>+</button>
        <button onClick={()=>setCount(prevstate=>prevstate-1)}>-</button>
        <button onClick={()=>setCount(0)}>x</button>
    </div>
  )
}

export default First