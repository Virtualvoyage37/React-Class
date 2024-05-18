import React from "react";

const UserDetails = ({ ItemsList }) => {
  return (
    <div className="detaildata">
      <h1>Items Details</h1>
      {ItemsList.map((itemsdata, index) => (
        <div key={index} className="main">
          <h3> Items: {itemsdata.itemname}</h3>
          <h3> Price: {itemsdata.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
