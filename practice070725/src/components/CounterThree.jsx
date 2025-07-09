import React,{useReducer} from 'react'
import { useContext } from 'react';
import {myTheme} from '../App' 
function CounterThree() {
    const PgTheme = useContext(myTheme);
    const initialState = {
        myCount:0
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case "add":
                return {myCount:state.myCount+1};
            case "sub":
                return {myCount:state.myCount-1};
            case "res":
                return initialState;
            default:
                return state;
        }
    }
    const[state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <p>{PgTheme}</p>
        <p>{state.myCount}</p>
        <button onClick={()=>dispatch({type:"add"})}>+</button>
        <button onClick={()=>dispatch({type:"sub"})}>-</button>
        <button onClick={()=>dispatch({type:"res"})}>X</button>
    </div>
  )
} 

export default CounterThree