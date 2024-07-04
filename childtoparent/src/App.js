import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  function alerter(namer) {
    alert(namer);
  }
  return (
    <div className="App">
      <header className="App-header">
        <User data={alerter}></User>
      </header>
    </div>
  );
}

export default App;
