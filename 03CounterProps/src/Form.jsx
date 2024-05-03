import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState({});

  function Submit() {
    setData({ ...data, firstName: name, LastName: lastName });
  }

  return (
    <div>
      <h1>Form </h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="name"
        id=""
        placeholder="Name"
      />
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        name="lastname"
        id=""
        placeholder="Last Name"
      />
      <button onClick={Submit}>Submit</button>

      <h1>
        name: {data.firstName} lastname: {data.LastName}
      </h1>
    </div>
  );
};

export default Form;
