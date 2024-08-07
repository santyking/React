import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
