import React from 'react'

function Title() {
  console.log(`Rendering Title component`);
  
  return (
    <div>
        <h2>useCallBack Hook</h2>
    </div>
  )
}

export default React.memo(Title)