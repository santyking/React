import React from 'react'

export default function MyComponent() {
    function clickme(){
        console.log("The button is clicked");
        
    }
  return (
    <>
        <button onClick={clickme}>Click me</button>
    </>
  )
}
