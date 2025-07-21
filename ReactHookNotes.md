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
Below is example of simple reducer

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
Below is example of Complex reducer
```
import React,{useReducer,useState} from 'react'

function CounterTwo() {
    const initialState = {
        myState:0
    };
    const reducer = (state,action)=>{
        switch (action.type) {
            case "increment":
               return {myState:state.myState+1};
            case "decrement":
                return {myState:state.myState-1};
            case "reset":
                return initialState;
            default:    
                return state;
        }
    }
    const [state,dispatch]= useReducer(reducer,initialState);
  return (
    <div>
        {state.myState}
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>X</button>
    </div>
  )
}

export default CounterTwo
```
Using Multiple reducers
```
import React,{useReducer} from 'react'

function Counter() {
    const initialState = {
        count : 0
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case "add":
                return {count:state.count+1};
            case "sub":
                return {count:state.count-1};
            case "res":
                return initialState;
            default:
                return state;
        }

    }
    const[state,dispatch] = useReducer(reducer,initialState);
    const[stateTwo,dispatchTwo] = useReducer(reducer,initialState);
  return (
    <div>
        <p>
            {state.count}
            <button onClick={()=>dispatch({type:"add"})}>+</button>
            <button onClick={()=>dispatch({type:"sub"})}>-</button>
            <button onClick={()=>dispatch({type:"res"})}>x</button>
        </p>
        <p>
            {stateTwo.count}
            <button onClick={()=>dispatchTwo({type:"add"})}>+</button>
            <button onClick={()=>dispatchTwo({type:"sub"})}>-</button>
            <button onClick={()=>dispatchTwo({type:"res"})}>x</button>
        </p>
        </div>
  )
}

export default Counter
```
Use Reducer with use Context
App.jsx
```
import { useReducer, createContext } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import "./App.css";
export const CountContext = createContext();

function App() {
  const initialCount = {
    myCount: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { myCount: state.myCount + 1 };
      case "sub":
        return { myCount: state.myCount - 1 };
      case "res":
        return initialCount;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <CountContext.Provider
      value={{ countState: state, CountDispatch: dispatch }}
    >
      <div className="App">
        {state.myCount}
        <CompA />
        <CompB />
        <CompC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
```
CompA
```
import React, { useContext } from "react";
import { CountContext } from "../App";
function CompA() {
  const myContextCount = useContext(CountContext);
  return (
    <div>
      Comp F - {myContextCount.countState.myCount}
      <button onClick={() => myContextCount.CountDispatch({ type: "add" })}>+</button>
      <button onClick={() => myContextCount.CountDispatch({ type: "sub" })}>-</button>
      <button onClick={() => myContextCount.CountDispatch({ type: "res" })}>x</button>
    </div>
  );
}

export default CompA;
```
Comp F
```
import React, { useContext } from "react";
import { CountContext } from "../App";
function CompF() {
  const myContextCount = useContext(CountContext);
  return (
    <div>
      Comp F - {myContextCount.countState.myCount}
      <button onClick={() => myContextCount.CountDispatch({ type: "add" })}>+</button>
      <button onClick={() => myContextCount.CountDispatch({ type: "sub" })}>-</button>
      <button onClick={() => myContextCount.CountDispatch({ type: "res" })}>x</button>
    </div>
  );
}

export default CompF;
```
Fetch data from api using useReducer
```
import axios from "axios";
import { useReducer, useEffect } from "react";

function ApiReducer() {
  const initialState = {
    post: {},
    error: "",
    loading: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          error: "",
          post: action.payload,
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          error: action.payload,
          post: {},
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" ,payload : error});
      });
  }, []);
  return (
    <>
      <h1>Post</h1>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </>
  );
}

export default ApiReducer;
```
**UseCallback**
Parent
```
import { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import React from 'react'
import Button from "./Button";

function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" value={age} />
      <Button action={incrementAge}>Icrement Age</Button>
      <Count text="salary" value={salary} />
      <Button action={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default React.memo(Parent);
```
Title
```
import React from "react";

function Title() {
    console.log("Title is loaded");
    
  return (
    <div>
      <h1>Age & Salary Counter</h1>
    </div>
  );
}

export default React.memo(Title);
```
Count
```
import React from "react";

function Count({ text, value }) {
  console.log(`count of ${text} is loaded`);
  
  return (
    <div>
      {text}-{value}
    </div>
  );
}

export default React.memo(Count);
```
ComponentOne
```
import axios from "axios";
import ChildComponent from "./ChildComponent";
import React, { useEffect, useReducer,createContext } from "react";
export const apiContext = createContext();

function ComponentOne() {
  const initialState = {
    loading: true,
    post: {},
    error: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: "Something went wrong",
        };

      default:
        return state;
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({ payload: response.data, type: "FETCH_SUCCESS" })
      )
      .catch((error) => dispatch({ type: "FETCH_ERROR" }));
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Posts</h1>
      {state.loading?"loading":state.post.title}
      {state.error?state.error:null}
      <apiContext.Provider value={state.post.title}>
        <ChildComponent/>
      </apiContext.Provider>
    </div>
  );
}

export default ComponentOne;
```
Child Component
```
import React,{useContext} from 'react'
import {apiContext} from './ComponentOne'
function ChildComponent() {
    const apiData = useContext(apiContext);
  return (
    <div>the API data is {apiData}</div>
  )
}

export default ChildComponent
```
Count
```
import React from "react";

function Count({ text, value }) {
  console.log(`count of ${text} is loaded`);
  
  return (
    <div>
      {text}-{value}
    </div>
  );
}

export default React.memo(Count);
```
Button
```
import React from "react";

function Button({ action, children }) {
    console.log(`buton of ${children} is loaded`);
    
  return (
    <div>
      <button onClick={action}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
```
**UseMemo**
```
import { useState,useMemo } from "react";

function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
      setCounter1(counter1+1);
    };
    
    const incrementCounter2 = () => {
      setCounter2(counter2+1);
  };

  const isEven = useMemo(()=>{
    return counter1 % 2 == 0;
  },[counter1])

  return (
    <div>
      <p>
        <button onClick={incrementCounter1}>Counter 1 - {counter1}</button>
        <span>{isEven?"Even":"Odd"}</span>
      </p>
      <p>
        <button onClick={incrementCounter2}>Counter 2 - {counter2}</button>
      </p>
    </div>
  );
}

export default Counter;
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
**Custom Hooks**
Custom hook
```
import { useState } from "react";

function useCounter(initialCount = 0,value) {
  const [count, setCount] = useState(initialCount);
  const add = () => {
    setCount(prevCount=>prevCount+value);
  };
  const sub = ()=>{
    setCount(prevCount=>prevCount-value);
  }
  const res = ()=>{
    setCount(initialCount);
  }
  return [count,add,sub,res];
}

export default useCounter
```
Component
```
import { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count,add,sub,res] = useCounter(0,1);
  return (
    <div>
      <p>
        <h1>{count}</h1>
      </p>
      <p>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={res}>Res</button>
      </p>
    </div>
  );
}

export default CounterOne;
```
Setting document title
Custom hook
```
import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = `count - ${count}`;
    },[count])
}

export default useDocumentTitle
```
Using custom hook in component
```
import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ComponentOne() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >{`Count - ${count}`}</button>
    </div>
  );
}

export default ComponentOne;
```
Use input custom hook
Creating custom hook
```
import {useState} from 'react'

function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);
  const reset = ()=>{
    setInput(initialValue);
  }
  const bind = {
    value : input,
    onChange : e=>{
        setInput(e.target.value);
    }
  }
  return [input,bind,reset];
}

export default useInput
```
using Custom hook
```
import useInput from "../hooks/useInput";
function InputForm() {
  const [input1, bind1, reset1] = useInput("");
  const [input2, bind2, reset2] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${input1} ${input2}`);
    reset1();
    reset2();
  };
  return (
    <div>
      <h1>Name Alert</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="First Name" {...bind1} />
        <input type="text" placeholder="Second Name" {...bind2} />
        <p>
          <button type="submit">Say it!</button>
        </p>
      </form>
    </div>
  );
}

export default InputForm;
```