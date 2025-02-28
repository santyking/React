import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(5);
    const [click,setClick] = useState(false);
    useEffect(()=>{
        document.title = `Clicked ${count} times`
    },[])
  return (
    <div>
        <button onClick={()=>{
            setClick(false);
            setCount(prevState=>prevState+1);
        }
            }>Clicked {count} times</button>
        <button onClick={()=>setClick(true)}>Update Title</button>
    </div>
  )
}

export default Counter