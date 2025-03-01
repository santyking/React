import React,{useContext} from 'react'
import {MyTheme} from '../App'

function ComponentC() {
  const userTheme = useContext(MyTheme);
  return (
    <div>{userTheme}</div>
  )
}

export default ComponentC