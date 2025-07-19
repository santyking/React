import { useEffect, useRef } from "react";
import useInputForm from "../hooks/useInputForm";
function InputForm() {
  const [firstName, bindFirstName, resetFirstName] = useInputForm("");
  const [lastName, bindLastName, resetLastName] = useInputForm("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  // const inputRef = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  // useEffect(()=>{
  //   inputRef.current.focus();
  // },[]);
  return (
    <div>
      <h1>Form</h1>
        <form onSubmit={formHandler}>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            //   value={firstName}
            //   onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
            // ref={inputRef}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            //   value={lastName}
            //   onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
          />
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
    </div>
  );
}

export default InputForm;
