import logo from './logo.svg';
import './App.css';

function App() {
  function alertme() {
    alert("Alertme Function is called");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>On Click Event and Function in ReactJs</h1>
        {/* <button onClick={alertme}>Click Me</button> */}
        <button onClick={()=>alert("Clicked")}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
