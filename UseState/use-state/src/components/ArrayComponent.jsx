import React,{useState} from 'react'

function ArrayComponent() {
    const [students,setStudents] = useState([]);
    const adder = () =>{
        setStudents([...students,{
            id: students.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div>
        <h1>Array Component</h1>
        <button onClick={adder}>Add</button>
        <ul>
            {
                students.map(student=>
                {
                    return  <li key={student.id}>{student.value}</li>
                }
                )
            }
        </ul>
    </div>
  )
}

export default ArrayComponent