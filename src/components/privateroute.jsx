import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./spinner";

export default function PrivateRoute() {
  const { loggedIn, checkStatus } = useAuthStatus();
  console.log(loggedIn, "bbb", checkStatus);

  if (checkStatus) {
    return <Spinner />;
  }

  console.log("IN Private");
  return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
