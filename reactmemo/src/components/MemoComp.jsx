import React from 'react'

function MemoComp(props) {
    console.log("Memo component is rendered");
    
  return (
    <div>
        <h1>Memo Component</h1>
        {props.name}
    </div>
  )
}

export default React.memo(MemoComp)