import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [passwordType, setpasswordType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };

  const [InputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;

    setInputValue(() => {
      return {
        ...InputValue,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();

    let user = JSON.parse(sessionStorage.getItem("user"));

    if (
      InputValue?.email === user?.email &&
      InputValue?.password === user?.password
    ) {
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      toast.error("Wrong Email or password");
    }

    // const getUserArr = localStorage.getItem("Profile1");

    // const { email, password } = InputValue;

    // if (email === "") {
    //   alert("Email field is required");
    // } else if (password === "") {
    //   alert("Password field is required");
    // } else if (!email.includes("@")) {
    //   alert("Email specification not met");
    // } else if (password.length < 5) {
    //   alert("Password cannot be less than 5 characters");
    // } else {
    //   if (getUserArr && getUserArr.length) {
    //     const userData = JSON.parse(getUserArr);
    //     console.log(userData);
    //     const userLogin = userData.filter((el) => {
    //       return el.email === email && el.password === password;
    //     });
    //     console.log(userLogin);
    //     if (userLogin.length === 0) {
    //       alert("Invalid details");
    //     } else {
    //       console.log("login successful");
    //       toast.success("Login Successful");
    //       setInterval(() => {
    //         window.location = "/dashboard";
    //       }, 1500);
    //       // navigate("/dashboard");
    //     }
    //   }
    // }
  };

  return (
    <div className="login">
      <ToastContainer />
      <div className="container-login">
        <div className="overlay"></div>
      </div>
      <div className="content-login">
        <h1>Welcome Back!</h1>
        <form className="login-form" onSubmit={addData}>
          <input
            type={"text"}
            placeholder={"Your Email Address"}
            name={"email"}
            onChange={getData}
            required
          />
          <div className="passdiv">
            <input
              type={passwordType}
              placeholder={"Your Password"}
              name={"password"}
              onChange={getData}
              required
            />
            <h6 className="togPass" onClick={togglePassword}>
              {passwordType === "password" ? "show" : "hide"}
            </h6>
          </div>

          <button className="loginbtn">LOGIN</button>
        </form>
        <p className="login-text">
          <Link id="register" to={"/signup"}>
            Create an account
          </Link>
          Forgot Password
        </p>
      </div>
    </div>
  );
};

export default Login;
