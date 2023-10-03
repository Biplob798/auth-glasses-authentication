import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  console.log(loading);

  // we have to wait here for loading
  if (loading) return <h2 className="p-8 text-5xl">Loading....</h2>;
  //

  if (!user.email) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
