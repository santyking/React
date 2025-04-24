import React,{useState} from 'react'

function UsingArray() {
    const [names,setNames] = useState([{id:0,value:""}]);
    const [newName,setnewName] = useState("");
  return (
    <div>
        <ul>
        {
            names.map(name=>(<li key={name.id}>{name.value}</li>))
        }
        </ul>
        <input type="text" placeholder='Enter New member' onChange={(e)=>setnewName(e.target.value)}/>
        <button onClick={()=>setNames(...names,{
            id:names.length,
            value:newName            
        })}>Add</button>
    </div>
  )
}

export default UsingArray