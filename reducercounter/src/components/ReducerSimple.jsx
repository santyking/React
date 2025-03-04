import React,{useReducer} from 'react'
const intialState = 0;

const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1 ;
        case 'reset':
            return intialState;
        default:
            return state;
    }
}

function ReducerSimple() {
    const [state,action]= useReducer(reducer,intialState);
  return (
    <div>
        <h1>Count-{state}</h1>
        <button onClick={()=>action('increment')}>+</button>
        <button onClick={()=>action('decrement')}>-</button>
        <button onClick={()=>action('reset')}>0</button>
    </div>
  )
}

export default ReducerSimple