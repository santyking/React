import React,{useReducer} from 'react'

function Counter() {
    const initialState = {
        count : 0
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case "add":
                return {count:state.count+1};
            case "sub":
                return {count:state.count-1};
            case "res":
                return initialState;
            default:
                return state;
        }

    }
    const[state,dispatch] = useReducer(reducer,initialState);
    const[stateTwo,dispatchTwo] = useReducer(reducer,initialState);
  return (
    <div>
        <p>
            {state.count}
            <button onClick={()=>dispatch({type:"add"})}>+</button>
            <button onClick={()=>dispatch({type:"sub"})}>-</button>
            <button onClick={()=>dispatch({type:"res"})}>x</button>
        </p>
        <p>
            {stateTwo.count}
            <button onClick={()=>dispatchTwo({type:"add"})}>+</button>
            <button onClick={()=>dispatchTwo({type:"sub"})}>-</button>
            <button onClick={()=>dispatchTwo({type:"res"})}>x</button>
        </p>
        </div>
  )
}

export default Counter