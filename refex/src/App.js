import logo from './logo.svg';
import './App.css';
import React,{createRef} from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.inputref = createRef();
  }
  componentDidMount(){
    // console.log(this.inputref.current.value = "1000");
  }
  Clickme() {
    console.log(this.inputref.current.value);
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Use Ref</h1>
          <input type="text" ref={this.inputref}/>
          <button onClick={()=>this.Clickme()}>Get</button>
        </header>
      </div>
    );
  }
  
}

export default App;
