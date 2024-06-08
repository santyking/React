import React, { useState } from 'react';
import './App.css';

function App() {
  const date = new Date();
  const [datum, setDatum] = useState(null);
  const [print, setPrint] = useState(false);

  function calculateDate(val) {
    const givenDate = new Date(val.target.value);
    if (givenDate.valueOf() < date.valueOf()) {
      const diff = calculateAge(givenDate, date);
      setDatum(diff);
      setPrint(true);
    } else {
      setDatum(0);
      setPrint(false);
    }
  }

  function calculateAge(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }

  console.log(datum);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Age Calculator
        </h1>
        <>
          <label htmlFor="birthdate"><h3>Enter Birth date</h3></label>
          <input id ="birthdate" type="date" onChange={calculateDate} />
        </>
        {print && (
          <>
            {(datum !== 0) ? 
              <h4>Age is {datum.years} Years {datum.months} Months {datum.days} Days</h4>
             : (
              <h4>Given date is greater than today</h4>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
