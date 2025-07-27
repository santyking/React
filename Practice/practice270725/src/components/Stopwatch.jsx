import React, { useRef, useState, useEffect, use } from "react";

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  const counterRef = useRef();
  const buttonRef = useRef();
  useEffect(()=> {
    buttonRef.current.focus();
  }, []);
  useEffect(() => {
    if (isRunning) {
      counterRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
        setButtonText("Pause");
    } else {
      clearInterval(counterRef.current);
        setButtonText("Start");
    }
    return () => {
      clearInterval(counterRef.current);
      setButtonText("Start");
    };
  }, [isRunning]);
  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>
      {count}
      </h2>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
        ref={buttonRef}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Stopwatch;
