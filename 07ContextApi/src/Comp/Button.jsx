import React, { useContext }  from "react";
import {CartData} from "./Context";

const Button = () => {
  const data = useContext(CartData)

  return (
    <div>
      {/* {data.btn} */}
      <h>{data.btn}</h>
    </div>
  );
};

export default Button;
