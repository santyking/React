import React, { useReducer } from "react";

function Input2() {
  const initialState = {
    input: "",
    numbers: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE":
        return {
            ...state,
          input: action.payload,
        };
      case "ADDNUM":
        return {
          input: "",
          numbers: [
            ...state.numbers,
            {
              id: state.numbers.length + 1,
              value: state.input,
            },
          ],
        };

      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Add Numbers</h1>
      <input
        type="text"
        onChange={(e) => dispatch({ type: "UPDATE", payload: e.target.value })}
      />
      <p>
        <button onClick={() => dispatch({ type: "ADDNUM" })}>Add</button>
      </p>
      <ul>
        {state.numbers.map((num) => (
          <li key={num.id}>{num.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Input2;
