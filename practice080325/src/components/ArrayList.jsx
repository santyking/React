import React, { useState } from "react";

function ArrayList() {
  const [init, setInit] = useState(true);
  const [names, setNames] = useState([]);
  const [ip, setIp] = useState("");
  const addItem = () => {
    setInit(false);
    setNames([
      ...names,
      {
        id: names.length + 1,
        value: ip,
      },
    ]);
  };
  return (
    <div>
      <h1>Array List</h1>
      <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
      <button onClick={addItem}>Add</button>
      {init ? (
        ""
      ) : (
        <ul>
          {names.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArrayList;
