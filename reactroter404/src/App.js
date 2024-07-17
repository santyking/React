import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nopage from './Nopage';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            {/* <Route path='/*' element={<Nopage/>}></Route> */}
            <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
