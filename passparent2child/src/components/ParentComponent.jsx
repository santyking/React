import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Parent'
      }
    }

    greetparent(childName){
        alert(`Hello ${this.state.message} and child data is : ${childName}` );
    }

    greetparent = this.greetparent.bind(this);
    
  render() {
    return (
      <div>
        <ChildComponent greethandler={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent
