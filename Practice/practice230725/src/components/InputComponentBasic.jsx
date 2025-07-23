import { useState } from "react";

function InputComponentBasic() {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const add2Array = () => {
    setNumbers([
      ...numbers,
      {
        id: numbers.length+1,
        value: input,
      },
    ]);
    setInput("");
  };
  return (
    <div>
      <h1>Add Numbers</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>
        <button onClick={add2Array}>Add</button>
      </p>
      <ul>
        {numbers.map(({id, value}) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputComponentBasic;
