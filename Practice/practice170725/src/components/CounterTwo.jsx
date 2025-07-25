import { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count,add,sub,res] = useCounter(10,10);
  return (
    <div>
      <p>
        <h1>{count}</h1>
      </p>
      <p>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={res}>Res</button>
      </p>
    </div>
  );
}

export default CounterTwo;
