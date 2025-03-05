import React,{useReducer} from 'react'
const initialState = 0;
const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function MultiReducers() {
    const[count,dispatch] =  useReducer(reducer,initialState)
    const[count2,dispatch2] =  useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>+</button>
        <button onClick={()=>dispatch('decrement')}>-</button>
        <button onClick={()=>dispatch('reset')}>0</button>
        <h1>{count2}</h1>
        <button onClick={()=>dispatch2('increment')}>+</button>
        <button onClick={()=>dispatch2('decrement')}>-</button>
        <button onClick={()=>dispatch2('reset')}>0</button>
    </div>
    
  )
}

export default MultiReducers