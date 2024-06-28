import React, { useReducer, useState } from "react";

const Reducer = () => {
  // const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(first, second, third)
  const count = 0;
  const [state, dispatch] = useReducer(reducer, count);
  function reducer(state, action) {
    switch (action) {
      case "Add":
        return state + 1;
      case "Remove":
        return state - 1;
      default:
        throw new Error("Unexpected action");
    }
  }

 
  return (
    <div>
      <button onClick={() => dispatch("Remove")}>-</button>
      <h1>Reducer {state}</h1>
      <button onClick={() => dispatch("Add")}>+</button>
    </div>
  );
};

export default Reducer;
