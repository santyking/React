import logo from './logo.svg';
import './App.css';
import {usestate} from react;

function App() {
const [data,setdata] = usestate(null);
  function updateData(val) {
    console.log(val.target.value);
    setdata(val.target.value);
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
