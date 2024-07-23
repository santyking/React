import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Filter></Filter>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
