import React, { Fragment } from "react";

const TableData = ({ UserData }) => {
  console.log(UserData, "UserData");

  return (
    <>
      {UserData.map((userdetails, index) =>(

          <div className="table">
            <h1>User Details</h1>
            <h3>First name : </h3>
            <h3>Last name : </h3>
            <h3>Age : </h3>
            <h3>Email : </h3>
            <h3>Phone No : </h3>
          </div>
      )
      )}
      {/* <div className="table">
        <h1>User Details</h1>
        <h3>First name : </h3>
        <h3>Last name : </h3>
        <h3>Age : </h3>
        <h3>Email : </h3>
        <h3>Phone No : </h3>
      </div> */}
    </>
  );
};

export default TableData;
