import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Higher Order Component</h1>
        <HOCRed cmp={Counter}></HOCRed>
        <HOCGreen cmp={Counter}></HOCGreen>
        <HOCBlue cmp={Counter}></HOCBlue>
      </header>
    </div>
  );
}

function HOCRed(props){
  return(
    <h2 style={{backgroundColor:'red',width:100}}><props.cmp/></h2>
  );
}
function HOCGreen(props){
  return(
    <h2 style={{backgroundColor:'green',width:100}}><props.cmp/></h2>
  );
}
function HOCBlue(props){
  return(
    <h2 style={{backgroundColor:'blue',width:100}}><props.cmp/></h2>
  );
}

function Counter() {
  const [count,setCount] = useState(0);
  return(
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
  ); 
}

export default App;
