import React,{ useState } from 'react'

export default function Func() {
    const [data,setData] = useState("Santosh");
  return (
    <>
    <h1>{data}</h1>
    <button onClick={()=>setData("Anvi")}>Get Child</button>
    </>
  )
}
