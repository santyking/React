import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Company from "./Company";
import Other from "./Other";
import Channel from "./Channel";
import Contact from "./Contact";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}>
              <Route path="company" element={<Company></Company>}></Route>
              <Route path="other" element={<Other/>}></Route>
              <Route path="channel" element={<Channel/>}></Route>
            </Route>
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
