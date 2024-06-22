import react from 'react';

class User extends react.Component{
    
    render(){
        console.warn("Render is called");
        return(
            <h1>{this.props.propdata}</h1>
        );
    }
}
export default User;