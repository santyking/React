import React,{useState,useEffect} from 'react'

export default function User(props) {
    const [data,setData] = useState(10);
    const [count,setCount] = useState(100);
    useEffect(()=>{
      console.log("Data Updated");
    },[data]);
    useEffect(()=>{
      console.log("Count Updated");
    },[count]);
    useEffect(()=>{
      console.log("Props Updated");
    },[props.name]);
  return (
    <>
    <div>Data : {data} and Count : {count}</div>
    <button onClick={()=>setData(data+1)}>Update Data</button>
    <button onClick={()=>setCount(count+1)}>Update Count</button>
    </>
  )
}
