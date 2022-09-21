import React from "react";
import Background from "../components/Background";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <Background />
      </div>
      <div className="bg-color"></div>
      <div className="cart-box">
        <h3>Uh Oooh ;-( Your way?...</h3>
        <Link to="/" className="lost">
          click here to go back home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
