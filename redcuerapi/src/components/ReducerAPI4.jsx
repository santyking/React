import React,{useEffect,useReducer} from 'react'
import axios from 'axios';
// import { type } from '@testing-library/user-event/dist/type';
const initialState = {
    post:{},
    error:'',
    loading:true
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'success':
            return{
                post:action.payload,
                error:'',
                loading: false
            }

        case 'error':
            return{
                post:{},
                error:action.payload,
                loading:false
            }
    
        default:
            return state
    }
};
function ReducerAPI4() {
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>dispatch({type:'success',payload: response.data}))
        .catch(error=>dispatch({type:'error',payload:error}))
    },[]);
  return (
    <div>
        <h1>Reducer Api 4</h1>
        {
            state.loading ? 'Loading ...' : state.post.title
        }
        {
            state.error ? state.error : null
        }
    </div>
  )
}

export default ReducerAPI4