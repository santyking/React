import React, { Component } from 'react'

export class MyClassComponent extends Component {
    clicker(){
        console.log("Button is clicked");
        
    }
  render() {
    return (
      <>
        <button onClick={this.clicker}>Click me</button>
      </>
    )
  }
}

export default MyClassComponent
