import React from "react";
import { Redirect } from "react-router-dom";

const protectRoute = Component => props => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export { protectRoute };
