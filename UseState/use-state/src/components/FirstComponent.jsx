import React,{useState} from 'react'

function FirstComponent() {
  const initialCount = 0;
  const[count,setCount] = useState(initialCount);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count is : {count}</p>
      <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
      <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
      <button onClick={()=>setCount(0)}>X</button>
    </div>
  )
}

export default FirstComponent