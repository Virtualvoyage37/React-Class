import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("Use Effect Celled");
  }, [count2,count]);

  return (
    <>
      <h1>Counter : {count}</h1>
      <h1>Counter2 : {count2}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <p>.............</p>
      <button onClick={() => setCount2(count2 + 1)}>Add2</button>
      <button onClick={() => setCount2(count2 - 1)}>Remove2</button>
    </>
  );
}

export default App;
