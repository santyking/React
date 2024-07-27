import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
