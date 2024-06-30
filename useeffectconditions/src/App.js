import logo from './logo.svg';
import './App.css';
import User from './User';
import React,{useState} from 'react';

function App() {
  const[myname,setmyname]= useState("Santosh");  
  return (
    <div className="App">
      <header className="App-header">
        <User name={myname}></User>
        <button onClick={()=>setmyname("Anvi")}>Update props</button>
      </header>
    </div>
  );
}

export default App;
