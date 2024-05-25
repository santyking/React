// import logo from './logo.svg';
import './App.css';
// import React from 'react'
// import {User} from './User';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Hello main Component
        <User></User> */}
        <ClassComponent></ClassComponent>
      </header>
    </div>
  );
}

// class ClassComponent extends React.Component{
//   render(){
//       return(
//           <h1>Hello from Class User Component</h1>
//       )
//   }
// }

export default App;