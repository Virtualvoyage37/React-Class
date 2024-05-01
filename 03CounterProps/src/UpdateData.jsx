import React, { useState } from "react";

const UpdateData = () => {
  const [data, setData] = useState({ name: "Deepak", age: 25 });


  function UpdateValue() {
      // setData({name:'Raju', age:20})
    setData(res =>({name:'Raju', age: res.age}))
  }
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age }</h1>
      <button onClick={UpdateValue}>Update Name</button>
      <button> </button>
    </div>
  );
};

export default UpdateData;
