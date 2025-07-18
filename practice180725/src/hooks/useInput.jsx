import {useState} from 'react'

function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);
  const reset = ()=>{
    setInput(initialValue);
  }
  const bind = {
    value : input,
    onChange : e=>{
        setInput(e.target.value);
    }
  }
  return [input,bind,reset];
}

export default useInput