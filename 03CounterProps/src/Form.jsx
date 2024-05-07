import React, { useState } from "react";

// const Data = {
//   fname: "",
//   lname: "",
//   age: 0,
//   email: "",
//   phone: 0,
//   address: "",
// };

const Form = ({ form, HandleChange, Submit }) => {
  // const { form, HandleChange, Submit } = props;

  // console.log(Submit,"Props");

  // const [form, setForm] = useState(Data);
  // const [dataTable, setDataTable] = useState([])
  // const num = 5;
  // console.log(1 +num);
  // console.log(num+ 1);
  // function Submit() {
  //   setDataTable([...dataTable,form])
  // }
  // function HandleChange(e) {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // }

  return (
    <div>
      <h1>Form </h1>
      <input
        type="text"
        onChange={(event) => HandleChange(event)}
        name="fname"
        id="name"
        placeholder="Enter First Name"
        value={form.fname}
      />
      <input
        type="text"
        onChange={(event) => HandleChange(event)}
        name="lname"
        id="lname"
        placeholder="Enter Last Name"
        value={form.lname}

      />

      <input
        type="number"
        onChange={(event) => HandleChange(event)}
        name="age"
        id="age"
        placeholder="Age"
        value={form.age}

      />
      <input
        type="email"
        onChange={(event) => HandleChange(event)}
        name="email"
        id="email"
        placeholder="Enter Email"
        value={form.email}

      />
      <input
        type="number"
        onChange={(event) => HandleChange(event)}
        name="phone"
        id="phone"
        placeholder="Enter Number"
        value={form.phone}

      />

      <button onClick={()=>Submit()}>Submit</button>
    </div>

  );
};

export default Form;
