import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Company from './Company';
import Other from './Other';
import Channel from './Channel';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/other' element={<Other/>}></Route>
            <Route path='/channel' element={<Channel/>}></Route>
            <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
