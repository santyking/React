import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
      super(props)
      this.InputRef= React.createRef()
    }
    focusInput(){
        this.InputRef.current.focus()
    }
  render() {
    return (
      <div>
        <h1>InputRef</h1>
        <input type="text" ref={this.InputRef}/>
        </div>
    )
  }
}

export default InputRef