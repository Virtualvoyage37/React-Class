import React, { useCallback, useState } from "react";

const Data = () => {
  const [count, setCount] = useState(0);

  function Add() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => Add()}>Add</button>
      <button onClick={() => AddValue()}>Add Callback</button>
    </div>
  );
};

export default Data;
