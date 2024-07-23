import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Filter() {
    const [age,setAge] = useSearchParams();
    const [name,setname] = useSearchParams();
    const myAge = age.get('myage');
    const myName = name.get('myname');
  return (
    <div>
        <h1>Filter page</h1>
        <h1>My Name is {myName}</h1>
        <h1>My age is {myAge}</h1>
        <button onClick={()=>{
            setAge({text:31});
            setname({text:"Ankita"});
        }}>Change</button>
    </div>
  )
}
