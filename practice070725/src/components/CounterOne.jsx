import React, { useReducer, useState } from "react"; // step 1
function CounterOne() {
  const initialState = 0; // step 3
  const reducer = (state, action) => {
    //step 4
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState); // step 2
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>X</button>
    </div>
  );
}
export default CounterOne;
