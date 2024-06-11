import React from "react";
import useFetchApi from "./Hooks/UseFetchApi";

const About = () => {
  const { data, loading, error } = useFetchApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(data, "....data");
  // console.log(loading, "....loading");
  // console.log(error, "....error");
  return (
    <div>
      <h1>About US</h1>

      {loading && <h1>Loading.......</h1>}

      {data?.map((userdata, index) => (
        <div className="border-2 border-green-800 w-[150px] m-auto flex justify-center items-center flex-col gap-5 mb-5">
          <h1>{userdata.id}</h1>
          <h1>{userdata.title}</h1>
        </div>
      ))}

      {error && <p>{error}</p>}
    </div>
  );
};

export default About;
