import React, { Component } from 'react'

export class RefComp extends Component {
    constructor(props) {
        super(props)
          this.inputRef = React.createRef()
      }
      componentDidMount(){
        this.inputRef.current.focus()
      }
      clickHandler =() =>{
        alert(this.inputRef.current.value);       
      }
    render() { 
    return (
      <div>
        <h1>Ref Component</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>get data</button>
      </div>
    )
  }
}

export default RefComp