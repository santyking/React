import { useReducer } from "react";
import useInputForm from "../hooks/useInputForm";
function InputForm() {
  const [firstName, bindFirstName, resetFirstName] = useInputForm('');
  const [lastName, bindLastName, resetLastName] = useInputForm('');
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
  const initialState = {
    count:0
  }
  const reducer = (state,action)=>{
    switch (action.type) {
      case "submit":
        return ({
          count : state.count +1
        })  
      default:
        return state;
    }
  }
  const [count,dispatch] = useReducer(reducer,initialState);
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
            <button type="submit" onClick={()=>dispatch({type:"submit"})}>Submit</button>
          </p>
        </form>
        <h2>Stats</h2>
        <p>First Name was updated {count.count} times</p>
        <p>Last Name was updated {count.count} times</p>
    </div>
  );
}

export default InputForm;
