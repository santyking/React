import React,{useState} from 'react'

function MyComponent() {
    const [list,setList] = useState([]);
    const [input,setInput] = useState("");
    function AddItem() {
        setList([...list,{
            id:list.length,
            value:input
        }])
    }
  return (
    <div>
        <h1>Shopping List</h1>
        <input type="text" placeholder='Enter item' value={input} onChange={e=>setInput(e.target.value)}/>
        <p>
            <button onClick={AddItem}>Add</button>
        </p>
        <ul>
            {
                list.map(item=><li key={item.id}>{item.value}</li>)
            }
        </ul>
        
    </div>
  )
}

export default MyComponent