import React, { Component } from 'react'

export class MyComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    return (
      <div>
        {
            this.state.isLoggedIn && 
            <p>Hello Santosh</p> 
            // : 
            // <p>Hello Visitor</p>
        }
      </div>
    )
  }
}

export default MyComponent
