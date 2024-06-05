// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const [datum,setDatum]  = useState(null);
  const [print,setPrint] = useState(false);
  function calculateDate(val) {
    const givenDate = new Date(val.target.value);
  if (givenDate.valueOf() < date.valueOf()) {
    const diffTime = Math.abs(givenDate - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDatum(diffDays + 1);
    setPrint(false);
  }


  }
  return (
    <div className="App">
      <header className="App-header">
      <h3>Todays Date is {day}-{month}-{year}</h3> 
      <label htmlFor="">Enter Birth Date:</label>
      <input type="date" onChange={calculateDate}/>
      <button onClick={()=>{setPrint(true)}}>Calulate Age</button>
      {
        print
          ?
        <h4>Op is {datum} Days</h4>
          :
        null
      } 
      </header>
    </div>
  );
}

export default App;
