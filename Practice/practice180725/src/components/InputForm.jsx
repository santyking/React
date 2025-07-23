import useInput from "../hooks/useInput";
import { useEffect, useRef } from "react";

function InputForm() {
  const [input1, bind1, reset1] = useInput("");
  const [input2, bind2, reset2] = useInput("");
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Input1: ${input1}, Input2: ${input2}`); // Debugging line
    alert(`Hello ${input1} ${input2}`);
    reset1();
    reset2();
  };
  return (
    <div>
      <h1>Name Alert</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="First Name" {...bind1} />
        <input type="text" placeholder="Second Name" {...bind2} />
        <input type="text" ref={inputRef}/>
        <p>
          <button type="submit">Say it!</button>
        </p>
      </form>
    </div>
  );
}

export default InputForm;
