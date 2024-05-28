// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [data,setData] = useState(null);
  const [print,setPrint] = useState(false);
  function updateData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          print?
          <h1> {data}</h1>
          :null
        }
        <input type="text" onChange={updateData}/>
        {/* <input type="text" /> */}
        <button onClick={()=>{setPrint(true)}}>Update Data</button>
      </header>
    </div>
  );
}

export default App;
