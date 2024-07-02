// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [input,setInput] = useState("");
  const [palindrome,setPalindrome] = useState(false);
  const [display,setDisplay] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Palindrome Checker</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/> <br></br>  
        <button onClick={()=>
          {
            setDisplay(true);
            const data = input;
            const finaldata = data.toLowerCase();
            const revdata = data.toLowerCase().split('').reverse().join('');
            console.log(finaldata);
            console.log(revdata);
            if(finaldata === revdata){
              setPalindrome(true);
            }
            else{
              setPalindrome(false);
            }
          }

        }>Check</button>
        {
          display?
          <>
            {
              palindrome?
              <h2>Palindrome</h2>
              :
              <h2>Not a Palindrome</h2>
            }
          </>
          :null
        }
      </header>
    </div>
  );
}

export default App;
