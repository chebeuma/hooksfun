import React, { useState, useEffect } from "react";

function Useeff() {
  const [sourceType, setSourceType] = useState("posts");
  console.log("render");
  useEffect(() => {
    console.log("source type changed");
  }, [sourceType]);

  return (
    <div>
      <button onClick={() => setSourceType("posts")}>posts</button>
      <button onClick={() => setSourceType("users")}>users</button>
      <h1>{sourceType}</h1>
    </div>
  );
}

export default Useeff;
