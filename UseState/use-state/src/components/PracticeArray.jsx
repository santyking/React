import React,{useState} from 'react'

function PracticeArray() {
    const [number,setNumber] = useState([]);
    const Adder = ()=> {
        setNumber([...number,{
            id: number.length,
            value : Math.floor(Math.random() * 100) + 1
        }])
    }
  return (
    <div>
        <h1>Array</h1>
        <button onClick={Adder}>+</button>
        <ul>
            {
                number.map(num=>(<li key={num.id}>{num.value}</li>))
                // number.map(num=>console.log(num))
            }
        </ul>
    </div>
  )
}

export default PracticeArray