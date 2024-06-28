// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [data,setData] = useState("Santosh");
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
        <button onClick={()=>setData("Anvi")}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
