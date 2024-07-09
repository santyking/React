import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [data,setData]  =useState("Santosh");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Controlled Component</h1>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
      </header>
    </div>
  );
}

export default App;
