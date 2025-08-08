import React,{useContext} from 'react'
import { themeContext } from '../App'
function CompA() {
    const theme = useContext(themeContext);
  return (
    <div>Theme is {theme}</div>
  )
}

export default CompA