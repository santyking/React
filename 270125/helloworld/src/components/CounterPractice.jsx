import React, { Component } from 'react'

export class CounterPractice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        this.setState(prevState =>({
            count : prevState.count+1
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
  render() {
    return (
      <div>
        Count is {this.state.count}
        <div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
        </div>
      </div>
    )
  }
}

export default CounterPractice
