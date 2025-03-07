import axios from 'axios'
import React,{useState,useEffect,useReducer} from 'react'

function ReducerApi() {
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then()
})
  return (
    <div>
        <h1>API Call with Reducer</h1>

    </div>
  )
}

export default ReducerApi