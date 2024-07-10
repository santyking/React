import React,{useRef} from 'react';
import './App.css';

function App() {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    console.log(myRef1.current.value);
    console.log(myRef2.current.value);
    let input3 = document.getElementById("my3").value;
    console.log(input3);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form action="submitForm">
          <h1>Uncontrolled Component</h1>
          <input type="text" id='my1' ref={myRef1}/>
          <input type="text" id='my2' ref={myRef2}/>
          <input type="text" id='my3'/>
          <button onClick={submitForm}>Change</button>
        </form>
      </header>
    </div>
  );
}
export default App;
