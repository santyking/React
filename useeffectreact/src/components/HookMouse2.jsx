import React,{useState,useEffect} from 'react'

function HookMouse2() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const MoveMousePointer = e =>{
        console.log("Mouse Pointer is called");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log("Use Effect is called");
        window.addEventListener("mousemove",MoveMousePointer);
        return()=>{
            console.log("UnMounting Component");
            window.removeEventListener("mousemove",MoveMousePointer);
        }
    },[])
  return (
    <div>
        Hook X - {x} Y - {y}
    </div>
  )
}

export default HookMouse2