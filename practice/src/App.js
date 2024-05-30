import logo from './logo.svg';
import './App.css';

function App() {
  function updateData(val) {
    console.log(val.target.value);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
        <input type="text" onChange={updateData}/>
      </header>
    </div>
  );
}

export default App;
