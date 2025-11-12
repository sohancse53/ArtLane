import React, { use } from "react";
import Authcontext from "../context/Authcontext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(Authcontext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <LoadingSpinner/>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  
};

export default PrivateRoute;
