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
    useReducer(reducer,intitalState)
  return (
    <div>
        <h1>Count</h1>
        <button>+</button>
        <button>-</button>
        <button>0</button>
    </div>
  )
}

export default ReducerSimple