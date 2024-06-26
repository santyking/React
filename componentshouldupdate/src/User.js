import React from 'react'
export default class User extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    shouldComponentUpdate(){
        if (this.state.counter <7) {
            return true;
        }
        else{
            return false;
        }
    }
    render(){
        return(
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button>
            </>
        );
    }
}