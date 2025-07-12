import React,{useContext} from 'react'
import {apiContext} from './ComponentOne'
function ChildComponent() {
    const apiData = useContext(apiContext);
  return (
    <div>the API data is {apiData}</div>
  )
}

export default ChildComponent