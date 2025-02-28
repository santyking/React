import React,{useState} from 'react'
import HookMouse2 from './HookMouse2';

function MouseContainer() {
    const [display,setDisplay] = useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {
            display && <HookMouse2/>
        }
    </div>
  )
}

export default MouseContainer