import React, { Component } from 'react'

export class MyForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:"",
         password:""
      }
    }

    userIdChange = (event)=>{
        this.setState({
            userid:event.target.value
        })
    }

    passwordChange = (event)=>{
        this.setState({
            password:event.target.value
        })
    }

    submitHandler = (event)=>{
        event.preventDefault(); 
        alert(`u:${this.state.userid} p:${this.state.password}`)
    }
    
  render() {
    return (
      <div>
        <form>
            <h1>Login Page</h1>
            <div>
                <label htmlFor="userid">User Name</label>    
                <input type="text" id='userid' value={this.state.userid} onChange={this.userIdChange}/>
            </div>
            <div>
                <label htmlFor="pwd">Password</label>
                <input type="password" id='password' value={this.state.password} onChange={this.passwordChange}/>
            </div>
            <button onClick={this.submitHandler}>Submit</button>
        </form>        
      </div>
    )
  }
}

export default MyForm
