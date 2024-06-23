import React from 'react';
class User extends React.Component{
    constructor(){
        console.warn("Constructor Called");
        super();
        this.state={
            data:"Santosh"
        }
    }
    componentDidMount(){
        console.warn("Component did mount")
    }
    render(){
        console.warn("render Called")
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.setState({data:"Anvi"})}>Call</button>
            </>
        );
    } 
}
export default User;