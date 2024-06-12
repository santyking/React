import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react'

function App() {
  const [name, SetName] = useState(null);
  const [comics, SetComics] = useState(null);
  const [agree, SetAgree] = useState(null);
  function getData(e) {
    console.log(name, comics, agree);
    e.preventDefault();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo Form</h1>
        <form onSubmit={getData}>
          <label htmlFor="nameid">Name</label>
          <input type="text" id="nameid" onChange={(e) => SetName(e.target.value)} /><br></br>
          <select name="comics" id="comics" onChange={(e) => SetComics(e.target.value)}>
            <option value="Select Comics">Select Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
          </select><br></br>
          <input type="checkbox" name="agree" id="agree" onChange={(e) => SetAgree(e.target.checked)} />
          <span>Agree</span><br></br>
          <button type="submit">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
