import React, { useState } from "react";

const Counter = () => {

  const arr = {
    name :'Deepak',
    age: 25,
    
  }

  const [count, setCount] = useState(0);

  // function AddValue() {
  //   setCount(count + 1);
  // }
  // function RemoveValue() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <div>Counter : {count}</div>
      <button onClick={()=>setCount(count +1)}>Add</button>
      <button onClick={()=> setCount(count -1)}>Remove</button>
    </>
  );
};

export default Counter;
