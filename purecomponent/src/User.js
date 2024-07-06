import React,{PureComponent} from "react";
class User extends PureComponent{
    constructor(){
        super();
        this.state = {
            name:"Santosh"
        }
    }
    render(){
        console.log("Render is Called");
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Anvi"})}>Click Me</button>
            </>
        );
    }
}
export default User;