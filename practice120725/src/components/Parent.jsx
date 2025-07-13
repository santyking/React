import { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import React from 'react'
import Button from "./Button";

function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" value={age} />
      <Button action={incrementAge}>Icrement Age</Button>
      <Count text="salary" value={salary} />
      <Button action={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default React.memo(Parent);
