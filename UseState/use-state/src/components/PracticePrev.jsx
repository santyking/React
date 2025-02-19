import React,{useState} from 'react'

function PracticePrev() {
const [count,setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
        <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
        <button onClick={()=>setCount(0)}>X</button>
    </div>
  )
}

export default PracticePrev