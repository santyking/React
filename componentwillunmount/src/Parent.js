import React, { Component } from 'react'
import Student from './Student'

export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            show : true
        }
    }
  render() {
    return (
        <>
            {
                this.state.show?
                <Student></Student>:
                null
            }
            <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>
        </>
    )
  }
}
