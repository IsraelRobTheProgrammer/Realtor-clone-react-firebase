import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
// import { toast } from "react-toastify";

export default function PrivateRoute() {
  const { loggedIn, checkStatus } = useAuthStatus();
  console.log(loggedIn, "bbb", checkStatus);

  if (checkStatus) {
    return <h3>Loading...</h3>;
  }
  console.log("IN Private");
  return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
