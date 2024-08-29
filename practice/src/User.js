import React from 'react';
class User extends React.Component{
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            </>
        );
    }
}
export default User;