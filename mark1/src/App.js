// import logo from './logo.svg';
import './App.css';
// import {User} from './User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello main Component
        <User></User>
      </header>
    </div>
  );
}

export default App;

function User() {
  return(
      <div>
          <h1>This is User Component</h1>
          <h1>This is User Component</h1>
      </div>
  )
}