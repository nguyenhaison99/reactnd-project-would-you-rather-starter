import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isAuthenticated, Component } = props; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isAuthenticated ? <Component /> : <Navigate to='/' />;
};

export default PrivateRoute;
