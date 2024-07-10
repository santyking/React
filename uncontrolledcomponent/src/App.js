import React,{useRef} from 'react';
import './App.css';

function App() {
  const myRef = useRef(null);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uncontrolled Component</h1>
        <input type="text" ref={myRef}/>
        <button>Change</button>
      </header>
    </div>
  );
}

export default App;
