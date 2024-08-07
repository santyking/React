import {useEffect,useState} from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((result)=>{
      result.json().then((resp)=>{
        console.log(resp.data);
        setData(resp.data);
      })
    })
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <td>ID Nation</td>
              <td>ID Year</td>
              <td>Nation</td>
              <td>Population</td>
              <td>Slug Nation</td>
              <td>Year</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,i)=>
                <tr key={i}>
                  <td>{item['ID Nation']}</td>
                  <td>{item['ID Year']}</td>
                  <td>{item.Nation}</td>
                  <td>{item.Population}</td>
                  <td>{item['Slug Nation']}</td>
                  <td>{item['ID Nation']}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
