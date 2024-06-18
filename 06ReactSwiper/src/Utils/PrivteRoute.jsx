import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivteRoute = () => {
  const token = localStorage.getItem("token");

  return <>{token === "true" ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivteRoute;
