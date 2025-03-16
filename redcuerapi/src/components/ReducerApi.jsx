// import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React,{useEffect,useReducer} from 'react'

const initialState = {
    loading:true,
    error:'',
    post:{}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                error: 'Something went wrong',
                post : {}
            }
        default:
            return state
    }
}
function ReducerApi() {
    const [state,action] = useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response=>{
            action({type:'FETCH_SUCCESS',payload:response.data})
        })
        .catch(error=>{
            action({type:'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
        <h1>API Call with Reducer</h1>
        {
            state.loading ? 'Loading' : state.post.title
        }
        {
            state.error ? error : null
        }
    </div>
  )
}

export default ReducerApi