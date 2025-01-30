import React, { Component } from 'react'

export class MyComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      } 
    //   this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState({
    //         message:"GoodBye"
    //         })
    // }
    clickHandler = ()=>{
        this.setState({
            message:"Goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* method 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* method 2 */}
        {/* <button onClick={()=>this.clickHandler()}>Click me</button> */}
        {/* method 3 - add binding in constructor */}
        {/* <button onClick={this.clickHandler}>Click me</button> */}
        {/* method 4 - use arrow function instead of method */}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default MyComponent
