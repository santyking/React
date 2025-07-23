import React, { useReducer } from "react";

function InputReducer() {
  const initialState = {
    input: "",
    numbers: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATEIP":
        return { ...state, input: action.payload };
      case "PUSHNUM":
        if (state.input.trim() === "") return state;
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
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Add Numbers</h1>
      <input
        type="text"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: "UPDATEIP", payload: e.target.value })
        }
      />
      <p>
        <button onClick={() => dispatch({ type: "PUSHNUM" })}>Add</button>
      </p>
      <ul>
        {state.numbers.map((num) => (
          <li key={num.id}>{num.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputReducer;
