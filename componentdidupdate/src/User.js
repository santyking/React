import React from "react";
export default class User extends React.Component{
    constructor(){
        console.warn("Constructor");
        super();
        this.state = {
            data: "Santosh"
        }
    }
    componentDidMount(){
        console.warn("Component did Mount");
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.warn("Component Did Update",preState.data);
    }
    render(){
        console.warn("Render");
        return(
            <>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.setState({data:"Anvi"})}>Change Name</button>
            </>
        );
    }
}