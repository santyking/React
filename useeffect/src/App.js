// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  const [count,setCount] = useState(0);
  useEffect(
    ()=>{
      console.warn("Use Effect Called");
    }
  )
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count : {count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>Update</button> */}
        <button onClick={()=>setCount(1)}>Update</button>
      </header>
    </div>
  );
}

export default App;
