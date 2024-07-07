import logo from './logo.svg';
import './App.css';
import React,{useRef} from 'react';

function App() {
  const myref = useRef(null);
  function datar() {
    myref.current.value = "1000";
    myref.current.focus();
    myref.current.style.display = "none";
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <input type="text" ref={myref}/>
        <button onClick={datar}>change</button>
      </header>
    </div>
  );
}

export default App;
