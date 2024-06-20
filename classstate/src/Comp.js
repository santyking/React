import React,{Component} from "react";

class Comp extends Component{
    constructor(){
        super();
        this.state = {
            data:"Santosh"
        }
    }
    anvi() {
        this.setState({data:"Anvi"})
    }
    render(){
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.anvi(
                  
            )}>Button</button>
            </>
            
        )
    }
}
export default Comp;