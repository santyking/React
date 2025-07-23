import React, { useState } from "react";

function ListAdder() {
  const [list, setList] = useState([]);
  const [input,setInput] = useState(0);
  const AddNumber = ()=>{
    setList([...list,{
        id:list.length,
        value:input
    }]);
  }
  return (
    <div>
      <h1>List Adder</h1>
      <input type="number" placeholder="Enter Number" value={input} onChange={e=>setInput(e.target.value)}/>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      <button onClick={AddNumber}>Add</button>
    </div>
  );
}

export default ListAdder;
