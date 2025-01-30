import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greethandler('child')}>Greet Parent</button>
    </div>
  )
}
