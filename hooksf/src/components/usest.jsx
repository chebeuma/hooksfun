import React, { useState } from "react";

function Usest() {
  const [count, setCount] = useState(0);

  function add() {
    const count = count + 1;
  }

  function del() {
    const count = count + 1;
  }
  return (
    <div>
      <button onClick={() => add}>increment</button>
      <h1>count:{count}</h1>
      <button onClick={() => del}>delete</button>
    </div>
  );
}

export default Usest;
