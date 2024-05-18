import React, { useEffect, useState } from "react";

const Syn = () => {
  const [name, setName] = useState(false);
  const [chnage, setChnage] = useState(false);

  useEffect(()=>{
    return () => {
      <h1>Use Effect Call </h1>
      console.log("Myyy ");
      console.log("Bhai");
      console.log("Hello");
    }
  },[chnage])


  return (
    <div>
      <h1>{name ? "Deepak" : "Raju"}</h1>
      <button onClick={() => setName(!name)}>Change</button>
      <button onClick={() => setChnage(!chnage)}>Use Effect</button>
    </div>
  );
};

export default Syn;
