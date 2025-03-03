import React,{useReducer} from 'react'
const initialState = 0
const reducer = (count,action)=>{
    switch (action) {
        case 'increment':
            return count+1
        case 'decrement':
            return count-1
        case 'reset':
            return initialState
        default:
            return count
    }
}
function CounterOne() {
    const [count,action] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count = {count}</div>
        <button onClick={()=>action('increment')}>Increment</button>
        <button onClick={()=>action('decrement')}>Decrement</button>
        <button onClick={()=>action('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne