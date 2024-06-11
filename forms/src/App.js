import logo from './logo.svg';
import './App.css';

function App() {
  function submitDetails(e) {
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo Form</h1>
        <label htmlFor="nameid">Name</label>
        <input type="text" id='nameid'/>
        <select name="comics" id="comics">
          <option value="Select Comics">Select Comics</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>
        <input type="checkbox" name="agree" id="agree" />
        <span>Agree</span>
        <button type="submit" onClick={submitDetails}>Submit</button>
      </header>
    </div>
  );
}

export default App;
