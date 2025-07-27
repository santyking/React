import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
function Counter() {
    const [count,increment,decrement,reset] = useCounter(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>x</button>
    </div>
  )
}

export default Counter