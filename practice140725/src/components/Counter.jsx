import { useState,useMemo } from "react";

function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
      setCounter1(counter1+1);
    };
    
    const incrementCounter2 = () => {
      setCounter2(counter2+1);
  };

  const isEven = useMemo(()=>{
    return counter1 % 2 == 0;
  },[counter1])

  return (
    <div>
      <p>
        <button onClick={incrementCounter1}>Counter 1 - {counter1}</button>
        <span>{isEven?"Even":"Odd"}</span>
      </p>
      <p>
        <button onClick={incrementCounter2}>Counter 2 - {counter2}</button>
      </p>
    </div>
  );
}

export default Counter;
