import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';
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
            <Route path='/*' element={Navigate(<Home/>)}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
