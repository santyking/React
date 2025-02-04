import React, { Component } from 'react'
import MemoComp from './MemoComp';
import RegularComp from './RegularComp';
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
    
    return (
      <div>
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name}/>
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp