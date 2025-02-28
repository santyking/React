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