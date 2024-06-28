import React, { useContext } from "react";
import { Product } from "./ContectApi";

const ProductDetails = () => {
  const ProductUser = useContext(Product);

  console.log("ProductUser", ProductUser);



  return (
    <div>
      <h1>User Details </h1>

      {ProductUser?.map((details) => (
        <div style={{ border: "1px solid red" }} key={details.id}>
          <p>{details?.name?.firstname}</p>
          <p>{details?.email}</p>
          <p>{details?.phone}</p>
          <p>{details?.address?.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
