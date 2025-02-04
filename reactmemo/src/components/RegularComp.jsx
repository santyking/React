import React from 'react'

function RegularComp(props) {
    console.log("Regular component is rendered");
    
  return (
    <div>RegularComp
    {props.name}
    </div>
  )
}

export default RegularComp