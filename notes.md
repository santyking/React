**useState Hook**

useState with Previous State
```
import React,{useState} from 'react'

function FunctionName() {
const [count,setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
        <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
        <button onClick={()=>setCount(0)}>X</button>
    </div>
  )
}
export default FunctionName
```
useState with Array
```
import React,{useState} from 'react'
function PracticeArray() {
    const [number,setNumber] = useState([]);
    const Adder = ()=> {
        setNumber([...number,{
            id: number.length,
            value : Math.floor(Math.random() * 100) + 1
        }])
    }
  return (
    <div>
        <h1>Array</h1>
        <button onClick={Adder}>+</button>
        <ul>
            {
                number.map(num=>(<li key={num.id}>{num.value}</li>))
            }
        </ul>
    </div>
  )
}
export default PracticeArray
```
useState with Object 
```
import React,{useState} from 'react'
function PracticeObj() {
  const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
      <h1>Enter your Name</h1>
      <h2>{name.firstName} {name.lastName}</h2>
      <input type="text" placeholder='First Name'  value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
      <input type="text" placeholder='Last Name' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
    </div>
  )
}
export default PracticeObj
```
**UseEffect Hook**
Get List of items through API and display it.
Note : When you want to call the useEffect hook on every reload, dont write any [] . 
When you want to run useeffect only on initial load, use [] .
When you want to run useeffect when a particular state is updated, write [stateName]. 
With the help of this callback, we can run useffect conditionally, this is same as componentdidmount, componentdidupdate. 
```
import axios from "axios";
import React, { useState, useEffect } from "react";

function ApiComponent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <h1>Api Response</h1>

      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiComponent;
```
Show particular item using API
```
import axios from 'axios';
import React,{useState,useEffect} from 'react'

function PostComponent() {
    const [id,setId] = useState(1);
    const [buttonClick,setButtonClick] = useState(1);
    const [posts,setPosts] = useState({});
    function ClickHandler() {
        setButtonClick(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
        .then(response=>setPosts(response.data))
        .catch(err=>console.log(err))
    },[buttonClick]);
  return (
    <div>
        <h1>Post Component</h1>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={ClickHandler}>Click</button>
        <h2>{posts.body}</h2>
    </div>
  )
}

export default PostComponent
```


