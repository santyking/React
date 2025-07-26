import React from 'react'

function Button({action}) {
    console.log("Button is rendered");
    
  return (
    <div>
        <button onClick={action}>Add</button>
    </div>
  )
}

export default React.memo(Button)