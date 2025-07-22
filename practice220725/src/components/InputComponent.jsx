import React,{useReducer} from 'react'

function InputComponent() {
    const initialState = {
        currentNumber:0,
        numbers:[]
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case "ADD":
                return {currentNumber:state.currentNumber}
            default:
                state
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h1>Input Numbers</h1>
        <input type="text" placeholder='Input Number' />
        <button>Add</button>
    </div>
  )
}

export default InputComponent