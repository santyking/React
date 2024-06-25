import React from "react";
export default class User extends React.Component{
    constructor(){
        console.warn("Constructor");
        super();
        this.state = {
            counter: 0
        }
    }
    componentDidMount(){
        console.warn("Component did Mount");
    }
    componentDidUpdate(preProps,preState,snapshot){
        // console.warn("Component Did Update",preState.counter,this.state.counter);
        console.warn("Component Did Update",snapshot);
        if (preState.counter === this.state.counter) {
            alert("Same");
        }
    }
    render(){
        console.warn("Render");
        return(
            <>
                <h1>{this.state.counter}</h1>
                {/* <button onClick={()=>this.setState({counter:this.state.counter+1})}>Change Name</button> */}
                <button onClick={()=>this.setState({counter:1})}>Change Name</button>
            </>
        );
    }
}