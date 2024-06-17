import Home from "./Pages/Home";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import { useEffect, useState } from "react";
import About from "./About";

function App2() {
  const [login, setLogin] = useState("signup");
  // const [inputdata, setData] = useState(null);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const HandleSubmit = (val) => {
      // val.preventDefault();
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json ",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log("error...", err));
    };
    return HandleSubmit;
  }, []);

  const HandleSubmit = async (val) => {
    val.preventDefault();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ",
      },
      body: JSON.stringify(inputData),
    });
    // .then((res) => res.json())
    // .then((data) => setData(data))
    // .catch((err) => console.log("error...", err));

    const data = response.json();
    console.log("data...", data);
  };

  return (
    <>
      {/* <form onSubmit={HandleSubmit}>
        <div>
          <label
            htmlhtmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="name"
              // autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  name: e.target.value,
                })
              }
            />
            <p name="name" className="error" />
          </div>
        </div>
        <div>
          <label
            htmlhtmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              // autoComplete="email"
              // required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  email: e.target.value,
                })
              }
            />
            <p name="email" className="error" />
          </div>
        </div>

        <input
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          value="Submit"
        />
      </form> */}
      {/* 
      {login === "login" ? (
        <Login setLogin={setLogin} />
      ) : login === "home" ? (
        <Home />
      ) : (
        <SignUp setLogin={setLogin} />
      )} */}

      <About />
    </>
  );
}

export default App2;
