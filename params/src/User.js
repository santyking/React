import React from 'react'
import {useParams} from 'react-router-dom'
export default function User() {
  const myname = useParams();
  const {name} = myname;
  return (
    <div>
        <h1>Hi, i am {name}</h1>
    </div>
  )
}
