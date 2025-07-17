import { useState } from "react";

function useCounter(initialCount = 0,value) {
  const [count, setCount] = useState(initialCount);
  const add = () => {
    setCount(prevCount=>prevCount+value);
  };
  const sub = ()=>{
    setCount(prevCount=>prevCount-value);
  }
  const res = ()=>{
    setCount(initialCount);
  }
  return [count,add,sub,res];
}

export default useCounter