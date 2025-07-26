import React from 'react'

function Count({value}) {
    console.log("Count is rendered");
    
  return (
    <div>
        Count is {value}
    </div>
  )
}

export default React.memo(Count)