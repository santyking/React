import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevState) => prevState + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [count]);
  function PauseTimer() {
    clearInterval(intervalId);
  }
  return (
    <>
      <h1>{count}</h1>
      <button>Start</button>
      <button onClick={PauseTimer}>Pause</button>
      <button>Reset</button>
    </>
  );
}

export default Counter;
