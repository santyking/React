import axios from 'axios'
import React,{useReducer,useEffect, act} from 'react'

const initialState = {
    loading: true,
    error:'',
    posts:{}
}

const reducer = (state,action)=>{
    switch (action.type) {
        case "SuccessCall":
            return {
                loading: true,
                error : '',
                posts : action.payload
            }
        case "ErrorCall":
            return{
                loading : true,
                error : 'Something went wrong',
                posts : {}
            }
        default:
            return state
    }
}

function DataFetching() {
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        
    });
  return (
    <div>
        Post
    </div>
  )
}

export default DataFetching