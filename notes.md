**useState Hook**

useState with Previous State
```
import React,{useState} from 'react'

function FunctionName() {
const [count,setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
        <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
        <button onClick={()=>setCount(0)}>X</button>
    </div>
  )
}
export default FunctionName
```
useState with Array
```
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
            }
        </ul>
    </div>
  )
}
export default PracticeArray
```
useState with Object 
```
import React,{useState} from 'react'
function PracticeObj() {
  const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
      <h1>Enter your Name</h1>
      <h2>{name.firstName} {name.lastName}</h2>
      <input type="text" placeholder='First Name'  value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
      <input type="text" placeholder='Last Name' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
    </div>
  )
}
export default PracticeObj
```
