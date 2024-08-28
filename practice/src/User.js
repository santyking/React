import React,{Component} from "react";
class User extends Component{
    constructor(){
        super();
        this.state = {
            data:"Santosh"
        };
    }
    apple(){
        this.setState({
            data:"Anvi"
        })
    }
    render(){
        return(
            <> 
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.apple()}>Update</button>
            </>
        );
    }
}
export default User;