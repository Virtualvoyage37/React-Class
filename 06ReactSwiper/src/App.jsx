import Home from "./Pages/Home";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState("signup");

  return (
    <>
      {login === "login" ? (
        <Login setLogin={setLogin} />
      ) : login === "home" ? (
        <Home />
      ) : (
        <SignUp setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
