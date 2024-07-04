import logo from './logo.svg';
import './App.css';
import Carder from './Carder';

function App() {
  const Users = [
    {name:"Santosh",id:1,gender:"Male"},
    {name:"Ankita",id:2,gender:"Female"},
    {name:"Anvi",id:3,gender:"Female"},
  ];
  return (
    <div className="App">
      <header className="App-header">
        {
          Users.map((item)=>
          <Carder data={item}></Carder>
          )
        }
      </header>
    </div>
  );
}

export default App;
