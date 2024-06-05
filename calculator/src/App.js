import React, { useState } from 'react';
import './App.css';

function App() {
  const date = new Date();
  const [datum, setDatum] = useState(null);
  const [print, setPrint] = useState(false);

  function calculateDate(val) {
    const givenDate = new Date(val.target.value);
    if (givenDate.valueOf() < date.valueOf()) {
      const diffTime = Math.abs(givenDate - date);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDatum(diffDays + 1);
      setPrint(true);
    } else {
      setDatum(null);
      setPrint(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Today's Date is {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
        </h3>
        <label htmlFor="">Enter Birth Date:</label>
        <input type="date" onChange={calculateDate} />
        <button onClick={() => setPrint(true)}>Calculate Age</button>
        {print && (
          <>
            {datum ? (
              <h4>Age is {datum} Days</h4>
            ) : (
              <h4>Given date is greater than today</h4>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
