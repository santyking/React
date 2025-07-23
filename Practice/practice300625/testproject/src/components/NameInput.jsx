import React,{useState} from 'react'

function NameInput() {
    const [name,setName] = useState({firstName:'',lastName:''});
  return (
    <div>
        <h1>{name.firstName} {name.lastName}</h1>
        <input type="text" placeholder='First Name' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type="text" placeholder='Last Name' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
    </div>
  )
}

export default NameInput