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
**UseContext Hook**

In the case of nested components it becomes difficult to pass props. With usecontent you can declare at parent level and passdown directly at nth child level.

Step 1 - import createContext
```
import {createContext,useState} from 'react' // STEP 1
```
Step 2 - create context variable
```
export const ThemeContext = createContext(); // step 2
```
Step 3 - wrap context around parent
```
      <ThemeContext.Provider value={theme}> // step 3
        <CompC/>
      </ThemeContext.Provider>
```
Step 4 - import the context in required app along with usecontext
```
import React,{useContext} from 'react'
import {ThemeContext} from '../App' // step 4
```
Step 5 - use usecontext to get value in variable and use it ahead
```
const theme  = useContext(ThemeContext) // step 5
```
**UseReducer Hook**

Used for State management similar to usestate.  It is used when the state of a component is complex and requires more than one state variable.

```
import React, { useReducer, useState } from "react"; // step 1
function CounterOne() {
  const initialState = 0; // step 3
  const reducer = (state, action) => {
    //step 4
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState); // step 2
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>X</button>
    </div>
  );
}
export default CounterOne;
```
**UseRef**
In useRef we can access and manupulate dom nodes directly.
Eg 1
```
import React, { useEffect, useRef, useState } from "react"; // step 1

function FocusInput() {
  const inputRef = useRef(null); // step 2
  useEffect(() => {
    inputRef.current.focus() // step 3
  }, [])
  
  return (
    <div>
      <h1>Focus Input</h1>
      <input ref={inputRef} type="text" /> // step 4
    </div>
  );
}

export default FocusInput;
```
eg 2
```
import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const counterRef = useRef();
  useEffect(() => {
    counterRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(counterRef.current);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <p>
        <button onClick={() => clearInterval(counterRef.current)}>Reset</button>
      </p>
    </div>
  );
}

export default Counter;

```