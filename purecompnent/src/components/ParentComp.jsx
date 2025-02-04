import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Santosh"
      }
    }
    
    componentDidMount(){
         setInterval(() => {
            this.setState({
                name:"Santosh"
            })
         }, 2000);
    }
    
  render() {
    console.log("Parent Component is rendered");
    
    return (
      <div><h1>Parent Component</h1>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>  
    )
  }
}

export default ParentComp