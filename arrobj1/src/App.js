import logo from './logo.svg';
import './App.css';

function App() {
  const students = ["Santosh","Anvi","Ankita"];
  const studData = [
    {name:"Santosh",id:1,gen:"M"},
    {name:"Anvi",id:2,gen:"F"},
    {name:"Ankita",id:3,gen:"F"}
  ]
  return (
    <div
     className="App">
      <header className="App-header">
      {
        students.map((data)=>
          <h2>{data}</h2>
        )
      }
      {
        studData.map((item)=>
        <h2>Name: {item.name}, ID: {item.id} , Gender: {item.gen}</h2>
        )
      }

      <table border={1}>
        {
          studData.map((item)=>
        <tr>
          <td>{item.name}</td> 
          <td>{item.id}</td> 
          <td>{item.gen}</td> 
        </tr>
          )
        }
      
      </table>

      </header>
    </div>
  );
}

export default App;
