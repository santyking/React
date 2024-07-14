import React,{useState} from 'react';
function Form1(){
    const [myName,setMyName] = useState("");
    const [show,setShow] = useState(false);
    function inputCheck(e) {
        console.log(e.target.value);
        setMyName(e.target.value);
    }
    return(
        <>
            <h1>Input form</h1>
            <input type="text" onChange={inputCheck}/>
            <button onClick={()=>setShow(true)}>Submit</button>
            {
                show?
                <h2>{myName}</h2>:
                null
            }
        </>
    );
}
export default Form1;