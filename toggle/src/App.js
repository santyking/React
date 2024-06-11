import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [visible,setVisible] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {
          visible?
          <h1>Lorem ipsum dolor sit amet..</h1>:
          null
        }
        <button onClick={()=>setVisible(false)}>Hide</button>
        <button onClick={()=>setVisible(true)}>Show</button>
      </header>
    </div>
  );
}

export default App;
