import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const addCounter = () => setCounter(counter + 1);
  const subtractCounter = () => setCounter(counter - 1);
  return (
    <div>
      <button onClick={addCounter}>Add</button>
      <h1>{counter}</h1>
      <button onClick={subtractCounter}>Subtract</button>
    </div>
  );
};

export default Counter;