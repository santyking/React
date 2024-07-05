import logo from './logo.svg';
import './App.css';
import React,{ useState,useMemo } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [updat,updater] = useState(20);
  const multicounter = useMemo(function mulcount() {
    console.log("Multicount Called");
    return counter * 5;
  },[counter]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <h1>{updat}</h1>
        <h1>{multicounter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>updater(updat+10)}>Update</button>
      </header>
    </div>
  );
}

export default App;
