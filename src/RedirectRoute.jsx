import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RedirectRoute = () => {
  const token = useSelector((state) => state.auth.token);
  return !token ? <Outlet /> : <Navigate to={"/"} />;
};

export default RedirectRoute;
