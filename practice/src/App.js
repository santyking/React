import logo from './logo.svg';
import './App.css';
import User from './User';
import Comp2 from './Comp2';

function UserClick() {
  alert("Component is called");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User data = {UserClick}></User>
        <Comp2 data = {UserClick}></Comp2>
      </header>
    </div>
  );
}

export default App;
