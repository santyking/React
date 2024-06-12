import './App.css';
import React,{useState} from 'react'

function Mycomponent() {
    const [data,setData] = useState(3); 
    return(
        <div className="App">
        <header className="App-header">
        {
            data === 1
        ?
            <h1>Data 1</h1>
        : data === 2
        ?
            <h1>Data 2</h1>
        : 
            <h1>Guest</h1>
        }
        </header>
    </div>
    );
}

export default Mycomponent;