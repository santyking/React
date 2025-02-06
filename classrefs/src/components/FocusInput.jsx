import React, { Component } from 'react'
import InputRef from './InputRef'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.compoentRef = React.createRef()
    }
    clickHandler=()=>{
        this.compoentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <InputRef ref={this.compoentRef}/>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default FocusInput