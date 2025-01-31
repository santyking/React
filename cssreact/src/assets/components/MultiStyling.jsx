import React from 'react'
import '../../App.css'

function MultiStyling(props) {
  return (
    <div>
      <h1 className={`${props.type} fontxl`}>Hello There!</h1>
    </div>
  )
}

export default MultiStyling
