import React,{Component} from "react";
export default class Comp3 extends Component{
    constructor(){
        super();
        this.state = {
            data: "Santosh",
            hide: true
        };   
    }
    render(){
        return(
            <>
                {this.state.hide?
                <h1>{this.state.data}</h1>
                :null}
                <button onClick={()=>this.setState({data: "Anvi"})}>Change Name</button>
                <button onClick={()=>this.setState({hide:!this.state.hide})}>Toggle</button>
            </>
        )
    }
}