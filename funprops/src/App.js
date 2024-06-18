// import logo from './logo.svg';
import './App.css';
import Child from './Child';
function alerter() {
  alert("Hello");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Child data={alerter}></Child>
        <Child data={alerter}></Child>
      </header>
    </div>
  );
}

export default App;
