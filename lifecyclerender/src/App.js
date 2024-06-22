import logo from './logo.svg';
import './App.css';
import User from './User';
import React,{useState} from 'react';

function App() {
  const [data,setData] = useState("Santosh");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User propdata={data}></User>
        <button onClick={()=>setData("Anvi")}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
