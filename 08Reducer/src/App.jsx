import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

const initailValue = {
  name: "abhy",
  mobile: "213264",
  email: "aa@gmail.com",
};
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Product, UserData } from "./Component/ContectApi";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((userdata) => setData(userdata))
      .catch((err) => console.error(err));
  }, []);


  return (
    <UserData.Provider value={initailValue}>
      <Product.Provider value={data}>
        <Home />
        <About />
      </Product.Provider>
    </UserData.Provider>
  );
}

export default App;
