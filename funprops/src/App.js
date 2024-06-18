// import logo from './logo.svg';
import './App.css';
import Child from './Child';
import Members from './Members';
function alerter() {
  alert("Hello");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Child data={alerter}></Child>
        <Members data={alerter}></Members>
      </header>
    </div>
  );
}

export default App;
