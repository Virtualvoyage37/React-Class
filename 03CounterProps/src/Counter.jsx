import React, { useState } from "react";

const Counter = () => {

  const arr = {
    name :'Deepak',
    age: 25,
    
  }

  const [count, setCount] = useState(0);

  function AddValue() {
    setCount(count + 1);
  }
  function RemoveValue() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter : {count} Heloo Bhai Kya Haal</h1>
      <footer>About Us : {count} </footer>
      <button onClick={()=>setCount(count +1)}>Add :{count}</button>
      <button onClick={()=> setCount(count -1)}>Remove :{count}</button>
      <footer>Footer : {count}</footer>
    </>
  );
};

export default Counter;
