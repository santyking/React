import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}/>
            <Route path='/login' element={<Login></Login>}/>
          </Routes>
        </BrowserRouter>        
      </header>
    </div>
  );
}

export default App;
