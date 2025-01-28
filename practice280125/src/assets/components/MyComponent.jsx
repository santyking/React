import React from 'react'

export default function MyComponent({name,address}) {
    // const {}
    // const {name, address} = props;  
  return (
    <>
        <h1>Component</h1>
        <p>Name : {name}</p>
        <p>Address : {address.add1},{address.add2},{address.city},{address.country}</p>
    </>
  )
}
