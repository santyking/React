import React, { useCallback, useMemo, useState } from 'react'
import Title from './Title'
import Count from './Count';
import Button from './Button';
function NormalCounter() {
    const [counter,setCounter] = useState(0);
    const increrementCounter = useCallback(()=>{
        setCounter(counter+1);
    },[counter]);
    const iseEven = useMemo(()=>{
        return counter%2==0;
    },[counter])
  return (
    <div>
        <Title/>
        <Count value={counter}/>
        {
            iseEven?"Even":"Odd"
        }
        <Button action={increrementCounter}/>
    </div>
  )
}

export default React.memo(NormalCounter);