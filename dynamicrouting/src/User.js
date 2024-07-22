import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const params = useParams();
    const {name} = params;
    console.warn(name);
  return (
    <div>
        <h1>this is {name} s component</h1>
    </div>
  )
}
