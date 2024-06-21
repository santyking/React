import React,{Component} from "react";
export default class Comp3 extends Component{
    constructor(){
        super();
        this.state = {
            data: "Santosh"
        }   
    }
    render(){
        return(
            <>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.setState({data: "Anvi"})}>Change Name</button>
            </>
        )
    }
}