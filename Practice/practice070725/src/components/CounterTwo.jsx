import React,{useReducer,useState} from 'react'

function CounterTwo() {
    const initialState = {
        myState:0
    };
    const reducer = (state,action)=>{
        switch (action.type) {
            case "increment":
               return {myState:state.myState+1};
            case "decrement":
                return {myState:state.myState-1};
            case "reset":
                return initialState;
            default:    
                return state;
        }
    }
    const [state,dispatch]= useReducer(reducer,initialState);
  return (
    <div>
        {state.myState}
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>X</button>
    </div>
  )
}

export default CounterTwo