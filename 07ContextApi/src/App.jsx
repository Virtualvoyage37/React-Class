import { useState } from "react";
import "./App.css";
import Home from "./Home";
// import { CartData } from "./Comp/Context";
import {CartData , ThemeContext , OrderData}  from "./Comp/Context";

function App() {
  
  const [data, setData] = useState({
    name: "Hy Bhai  ",
    btn: "Submit Data",
  });

  return (
    <>
    
      <CartData.Provider value={data}>
        <Home />
      </CartData.Provider>
    </>
  );
}

export default App;
