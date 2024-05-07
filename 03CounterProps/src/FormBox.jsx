import React, { useState } from 'react'
import Form from './Form';
import TableData from './TableData';

const Data = {
  fname: "",
  lname: "",
  age: '',
  email: "",
  phone: '',
};

const FormBox = () => {
    const [form, setForm] = useState(Data);
    const [dataTable, setDataTable] = useState([])

    function Submit() {
        setDataTable([...dataTable,form]);
      }
      function HandleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      }
    
// console.log(dataTable,'dataTable');
// console.log(form,'form form');

  return (
    <div>
        <Form form={form}  HandleChange={HandleChange} Submit={Submit}/>
        <TableData UserData={dataTable} />
    </div>
  )
}

export default FormBox