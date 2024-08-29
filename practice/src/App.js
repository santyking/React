import './App.css';
import User from './User';
import React from 'react';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      name :"Santosh"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <User name={this.state.name}/>
          <button onClick={()=>this.setState({name:"Anvi"})}>Update</button>
        </header>
      </div>
    );  
  }
}
export default App;