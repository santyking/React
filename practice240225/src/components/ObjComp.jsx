import React,{useState} from 'react'

function ObjComp() {
    const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
        <h1>{name.firstName} {name.lastName}</h1>
        <input type="text" placeholder='First Name'onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type="text" placeholder='Last Name'onChange={e=>setName({...name,lastName:e.target.value})}/>
    </div>
  )
}

export default ObjComp