import React, { useContext } from "react";
import { CountContext } from "../App";
function CompE() {
  const myContextCount = useContext(CountContext);
  return (
    <div>
      Comp F - {myContextCount.countState.myCount}
      <button onClick={() => myContextCount.CountDispatch({ type: "add" })}>+</button>
      <button onClick={() => myContextCount.CountDispatch({ type: "sub" })}>-</button>
      <button onClick={() => myContextCount.CountDispatch({ type: "res" })}>x</button>
    </div>
  );
}

export default CompE;
