import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
  // const [data,setData] = useState("Santosh");
  const [data,setData] = useState(0);
  function updateData() {
    // setData("Santosh Mhatre");
    setData(data+1);
  }
  console.warn("----------------------------------------")
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
        <button onClick={updateData}>Update Data</button>
      </header>
    </div>
  );
}

export default App;
