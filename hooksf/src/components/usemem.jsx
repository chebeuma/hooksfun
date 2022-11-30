import React, { useState, useMemo } from "react";

function Usemem() {
  const [number, setNumber] = useState(4);

  const double = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <button onClick={setNumber}>setnumber</button>
      <button onClick={double}>double</button>
    </div>
  );
}
function slowFunction(num) {
  console.log("slow function calling");
  for (let i = 0; i < 1000000; i++) return num * 2;
}

export default Usemem;
