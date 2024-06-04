// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const [print,setPrint] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
      <h3>Todays Date is {day}-{month}-{year}</h3> 
      <label htmlFor="">Enter Birth Date:</label>
      <input type="date" />
      <button onClick={()=>{setPrint(true)}}>Calulate Age</button>
      </header>
    </div>
  );
}

export default App;
