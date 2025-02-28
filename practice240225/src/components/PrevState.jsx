import React,{useState} from 'react'

function PrevState() {
    const [count,setCount]  = useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
        <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
        <button onClick={()=>setCount(0)}>0</button>
    </div>
  )
}

export default PrevState