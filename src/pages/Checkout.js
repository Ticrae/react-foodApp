import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import PaystackPop from "@paystack/inline-js";
import "./Checkout.css";

const Checkout = ({ count }) => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const navigate = useNavigate();

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8e5e3e4000c39bc9cf14f24831cc4f46dac60117",
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
      },
      onCancel() {
        alert("You have Cancelled the transaction");
      },
    });
    navigate("/orders");
  };

  return (
    <div className="singlefood-container">
      <div className="food">
        <Background count={count} />
      </div>
      <div className="bg-color"></div>
      <div className="checkout">
        <Link to="/dashboard">
          <AiOutlineArrowLeft className="go-back" />
        </Link>
        <form className="checkout-form">
          <h3>Checkout</h3>
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email address"
            required
          />
          <input
            type={"number"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
          <input
            type={"text"}
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type={"text"}
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <button onClick={paywithpaystack} className="checkout-btn">
            MAKE PAYMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
