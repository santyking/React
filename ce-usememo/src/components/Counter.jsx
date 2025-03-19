import {useState,useMemo} from 'react'

function Counter() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const incrementOne = ()=>{
        setCounter1(counter1 +1);
    }
    const incrementTwo = ()=>{
        setCounter2(counter2+1);
    }
    const isEven = useMemo(()=>{
        let i=1;
        while (i>2000000000000000) {
            i++;
        }
        return counter1 %2 === 0;
        console.log(counter1 %2 === 0);
        console.log(counter1);
        },[counter1])
  return (
    <div>
        <button onClick={incrementOne}>Counter1 - {counter1}</button>
        {
            isEven?"Even":"Odd"
        }
        <button onClick={incrementTwo}>Counter2 - {counter2}</button>
    </div>
  )
}

export default Counter