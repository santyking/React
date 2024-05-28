// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [data,setData] = useState(null);
  function updateData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
        <input type="text" onChange={updateData}/>
      </header>
    </div>
  );
}

export default App;
