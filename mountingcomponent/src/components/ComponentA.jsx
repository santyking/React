import React, { Component } from 'react'

export class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      console.log("Constructor is called");
      
    }
    
    static getDerivedStateFromProps(){
        console.log("Get derived state from props");
       return null;
    }

    componentDidMount(){
        console.log("Component mounted");
        
    }
    
  render() {
    console.log("Render is called");
    
    return (
      <div>
        Hello There
      </div>
    )
  }
}

export default ComponentA
