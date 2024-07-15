import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route path='/' element=''></Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
