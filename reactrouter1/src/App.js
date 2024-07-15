import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
