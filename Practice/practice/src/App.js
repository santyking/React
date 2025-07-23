import './App.css';
import {useState} from 'react';
function App(){
    const [data,setData]  = useState();
    const [press,setPress] = useState(false);
    function updateData(val){
      setData(val.target.value);
    }
    return (
      <div className="App">
        <header className="App-header">
          {
            press?<h1>{data}</h1>:null
          }
          
          <input type="text" onChange={updateData}/>
          <button onClick={()=>setPress(true)}>Update</button>
        </header>
      </div>
    );  
}
export default App;