import React from 'react'

function MyComponent() {
    const names = ["Santosh","Ankita","Anvi"];
    const nameList = names.map((name,index)=>
                <h1 key={index}>{name}</h1>
    );
  return (
    <div>
      {
        nameList
      }
    </div>
  )
}

export default MyComponent
