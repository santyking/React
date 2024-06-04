// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  const [data,setData] = useState(null);
  const [print,setPrint] = useState(false);
  function getData(val) {
    // setData(val);
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  function printer() {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        {print
        ? 
          <h1>{data}</h1>
        :
          null
        }
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Update</button>
      </header>
    </div>
  );
}

export default App;
