import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const counterRef = useRef();
  useEffect(() => {
    counterRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(counterRef.current);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <p>
        <button onClick={() => clearInterval(counterRef.current)}>Reset</button>
      </p>
    </div>
  );
}

export default Counter;
