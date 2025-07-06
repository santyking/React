import React,{useContext} from 'react'
import {ThemeContext} from '../App' // step 4
function CompF() {
  const theme  = useContext(ThemeContext) // step 5
  return (
    <div>CompF theme is {theme}</div>
  )
}

export default CompF