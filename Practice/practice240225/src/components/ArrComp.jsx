import React,{useState} from 'react'

function ArrComp() {
    const[numbers,setNumbers] = useState([]);
    function adder() {
        setNumbers([...numbers,{
            id: numbers.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <h1>Array Component</h1>
        <button onClick={adder}>+</button>
        <ul>
            {
                numbers.map(number=>(<li key={number.id}>{number.value}</li>))
            }
        </ul>
    </div>
  )
}

export default ArrComp