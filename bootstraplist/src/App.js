import "./App.css";
import Table from 'react-bootstrap/Table';

function App() {
  const Users = [
    { name: "Santosh", gender: "M", age: 30 },
    { name: "Anvi", gender: "F", age: 1 },
    { name: "Ankita", gender: "F", age: 29 },
  ];
  return (
    <>
      <h1>Bootstap Table</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Gender</td>
            <td>Age</td>
          </tr>

          {Users.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
