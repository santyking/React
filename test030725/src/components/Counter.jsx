import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <p>
            <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
            <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
            <button onClick={()=>setCount(0)}>x</button>
        </p>
    </div>
  )
}

export default Counter