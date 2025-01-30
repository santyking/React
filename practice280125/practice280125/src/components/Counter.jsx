import React,{ useState } from 'react'

export default function Counter() {
    const [count,setCount]  = useState(0);
    function increment(){
        setCount(prevCount => prevCount+1,()=>{
            console.log(count);
        });
        console.log(count);
    }
  return (
    <>
    <div>Count is {count}</div>
    <button onClick={increment}>Increment</button>
    </>
  )
}
