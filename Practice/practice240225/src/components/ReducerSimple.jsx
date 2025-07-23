import React,{useReducer} from 'react'
const intitalState = 0;
const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return intitalState;
        default:
            return state;
    }
}

function ReducerSimple() {
    const [count,dispatch] = useReducer(reducer,intitalState)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={()=>dispatch('increment')}>+</button>
        <button onClick={()=>dispatch('decrement')}>-</button>
        <button onClick={()=>dispatch('reset')}>0</button>
    </div>
  )
}

export default ReducerSimple