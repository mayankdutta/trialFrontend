import React from "react";
import { Navigate, Outlet } from "react";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateComponent;
