// import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Student from './Student';

function App() {
  const [name,fullName] = useState("Santosh");
  function getName() {
    fullName("Santosh Mhatre");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <button onClick={getName}>Get Full Name</button>
        <Student fname="Santosh" gender="Male" others={{city:"Mumbai",country:"India"}}></Student>
        <Student fname="Santoshi" gender="feMale" others={{city:"Mumbai",country:"India"}}></Student>
        <Student fname="Sanchit" gender="Male" others={{city:"Mumbai",country:"India"}}></Student>
      </header>
    </div>
  );
}

export default App;
