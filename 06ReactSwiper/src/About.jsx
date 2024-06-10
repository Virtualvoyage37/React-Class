import React from "react";
import useFetchApi from "./Hooks/UseFetchApi";

const About = () => {
  const { data, loading, error } = useFetchApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //   console.log(data, "....data");
  //   console.log(loading, "....loading");
  //   console.log(error, "....error");
  return <div></div>;
};

export default About;
