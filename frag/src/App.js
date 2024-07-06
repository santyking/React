import logo from './logo.svg';
import './App.css';
import User from './User';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            <tr>
              <User></User>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
