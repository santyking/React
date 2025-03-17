import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React,{useReducer,useEffect} from 'react'

const initialState = {
    post:{},
    loading:true,
    error:''
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'success':
            return{
                loading:false,
                post:action.payload,
                error:''
            }

        case 'failure':
            return{
                loading:false,
                post:{},
                error: action.payload
            }
    
        default:
            return state
    }

}

function ReducerApi3() {
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response=>dispatch({type:'success',payload:response.data}))
        .catch(error=>dispatch({type:'failure',payload:'Something went wrong'}))
    },[]);
  return (
    <div>
        <h1>Reducer API 3</h1>
        {
            state.loading? "Loading data":state.post.title
        }
        {
            state.error? state.error : null
        }
    </div>
  )
}

export default ReducerApi3