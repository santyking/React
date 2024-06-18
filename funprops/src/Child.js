import React from 'react';
import './App.css';

export default function Child(props) {
  return (
    <>
    <h1>Child Component</h1>
    <button onClick={props.data}>alert</button>
    </>
  )
}
