import React, { useState } from 'react';
import './App.css';

function App() {
  const date = new Date();
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const [datum, setDatum] = useState(null);
  const [print, setPrint] = useState(false);
  const [displayDate, setDisplayDate] = useState(null);

  function calculateDate(val) {
    const givenDate = new Date(val.target.value);
    const givenDateNormalized = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate());

    if (givenDateNormalized < today) {
      const diff = calculateAge(givenDateNormalized, today);
      setDatum(diff);
      setPrint(true);
      setDisplayDate(2);
    } else if (givenDateNormalized.getTime() === today.getTime()) {
      setDatum(null);
      setPrint(true);
      setDisplayDate(1);
    } else {
      setDatum(null);
      setPrint(true);
      setDisplayDate(0);
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Age Calculator
        </h1>
        <>
          <label htmlFor="birthdate"><h3>Enter Birth date</h3></label>
          <input id="birthdate" type="date" onChange={calculateDate} />
        </>
        {
          print && (
            displayDate === 2 ? 
            <h4>Age is {datum.years} Years {datum.months} Months {datum.days} Days</h4>
            : displayDate === 1 ? 
            <h4>You are born today!</h4>
            : <h4>Born in the future</h4>
          )
        }
      </header>
    </div>
  );
}

export default App;
