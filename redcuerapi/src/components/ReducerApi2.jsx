import axios from 'axios'
import React,{useReducer,useEffect} from 'react'
const intialState = {
    error:'',
    post:{},
    loading:true
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'SUCCESSFUL':
            return {
                error: '',
                post:action.payload,
                loading:false
            }
        case 'FAILURE':
            return {
                error: 'Something went wrong',
                post:{},
                loading:false
            }
        default:
            return state;
    }
}
function ReducerApi2() {
    const [state,action] = useReducer(reducer,intialState);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response=>{
            action({type:'SUCCESSFUL',payload:response.data})
        })
        .catch(error=>{
            action({type:'FAILURE'})
        })
    },[]);
  return (
    <div>
        <h1>Reducer API</h1>
        {
            state.loading?"Loading, please wait":state.post.title
        }
        {
             state.error ? error : null
        }
    </div>
  )
}

export default ReducerApi2