import React from "react";
import { Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const auth = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  return user;
};

const notify = () => {
  toast.error("Sign up first to see dashboard");
  setInterval(() => {
    window.location = "/signup";
  }, 5000);
};

const ProtectedRoutes = () => {
  const userAuth = auth();

  return (
    <>
      <ToastContainer />;{userAuth ? <Outlet /> : notify()}
    </>
  );
};

export default ProtectedRoutes;
