import './App.css';
import User from './User';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User name="Santosh" wife="Ankita" daughter="Anvi" other={{add:"1302",city:"Mumbai"}}/>
      </header>
    </div>
  );
}

export default App;