// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [name,setName] = useState('');
  const [palindrome,setPlaindrome] = useState(null);
  
  function checkPalindrome(e) {
    setName(e.target.value);
    // console.log(name);
    checkPalindrome(e.target.value);
  }
  function checkPalindrome(str) {
    const data = str.toLowerCase();
    console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Palindrome checker</h1>
        <input type="text" placeholder='Enter Name' onChange={checkPalindrome}/>
        {
          palindrome?
          <h2>Palindrome</h2>:
          <h2>Not a Palindrome</h2>
        }
      </header>
    </div>
  );
}

export default App;
