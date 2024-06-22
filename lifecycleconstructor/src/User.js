import react from 'react'

export default class User extends react.Component{
    constructor(){
        super();
        console.log("Contructor is Called")
    }
    render(){
        console.log("Render is called")
        return(
            <>
                <h1>Hello!</h1>
            </>
        );
    }
}