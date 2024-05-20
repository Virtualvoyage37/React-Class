import React, { useCallback, useEffect, useState } from "react";

const UseCallbackHook = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = useCallback((a, b) => {
    // setItems([...items, inputValue]);
  return  a + b;
  }, []);

  console.log(addItem(5, 5));
  console.log(addItem(5, 5));
  console.log(addItem(3, 2));
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item..."
        />
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseCallbackHook;
