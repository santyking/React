import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Protected Component ={Home}/> }></Route>
            <Route path='/about' element={<Protected Component ={About}/>}/>
            <Route path='/login' element={<Login></Login>}/>
          </Routes>
        </BrowserRouter>        
      </header>
    </div>
  );
}

export default App;
