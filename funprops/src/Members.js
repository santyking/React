import React from 'react'

function Members(props) {
  return (
    <>
        <h1>Member Component</h1>
        <button onClick={()=>props.data()}>Call Members</button>    
    </>
  )
}

export default Members;
