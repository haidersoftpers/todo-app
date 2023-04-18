import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Protected = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);

  if (!user) {
     return <Navigate to="/login" />
  }
  return children;
};

export default Protected;
