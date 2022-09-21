import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [passType, setpassType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    if (passType === "password") {
      setpassType("text");
      return;
    }
    setpassType("password");
  };

  const [InputValue, setInputValue] = useState({
    name: "",
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

    sessionStorage.setItem("user", JSON.stringify(InputValue));

    toast.success("Sign Up Successful");

    navigate("/login");

    // const { name, email, password } = InputValue;

    // if (name === "") {
    //   alert("Name field is required");
    // } else if (email === "") {
    //   alert("Email field is required");
    // } else if (password === "") {
    //   alert("Password field is required");
    // } else if (!email.includes("@")) {
    //   alert("Email specification not met");
    // } else if (password.length < 5) {
    //   alert("Password cannot be less than 5 characters");
    // } else {
    //   console.log("Successfully registered");
    //   sessionStorage.setItem("Profile1", JSON.stringify([InputValue]);
    //   toast.success("Sign Up Successful")
    //   setInterval(() => {
    //     window.location = "/login"
    //   }, 1500)
    //   navigate("/login");
    // }
  };

  return (
    <div className="signup">
      <div className="container-signup">
        <div className="overlay"></div>
      </div>
      <div className="content-signup">
        <h1>Welcome to Lilies!</h1>
        <form className="signup-form" onSubmit={addData}>
          <input
            type={"text"}
            placeholder={"Your First Name"}
            name={"name"}
            onChange={getData}
            required
          />
          <input
            type={"text"}
            placeholder={"Your Email Address"}
            name={"email"}
            onChange={getData}
            required
          />
          <div className="passdiv">
            <input
              type={passType}
              placeholder={"Your Password"}
              name={"password"}
              onChange={getData}
              required
            />
            <h6 className="togPass" onClick={togglePassword}>
              {passType === "password" ? "show" : "hide"}
            </h6>
          </div>

          <button className="signupbtn">SIGN UP</button>
        </form>
        <p className="signup-text">
          Already have an account.{" "}
          <Link id="login" to={"/login"}>
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
