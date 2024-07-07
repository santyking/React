import React,{useRef}  from 'react';
import './App.css';
import User from './User';

function App() {
  const myRef = useRef(null);
  function changeData() {
    myRef.current.value = "1000";
  } 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Forward Ref</h1>
        <User ref={myRef}></User>
        <button onClick={changeData}>Change Input</button>
      </header>
    </div>
  );
}

export default App;
