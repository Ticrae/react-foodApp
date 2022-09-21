import React from "react";
import Background from "../components/Background";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = ({ meals, count, cartItems }) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <Background count={count} />
      </div>
      <div className="bg-color"></div>
      <div className="cart-box">
        <Link to="/dashboard">
          <AiOutlineArrowLeft className="go-back" />
        </Link>
        <h3>Your Orders</h3>
        <div className="items-header">
          <div className="image">
            <strong className="t-amnt">Item</strong>
          </div>
          <div className="quantity-header" id="end">
            <strong className="noNeed">Qty</strong>
            <strong className="noNeed">Sub-total</strong>
            <strong>Status </strong>
          </div>
        </div>
        {cartItems.map((meal) => {
          return (
            <div key={meal.id} className="items">
              <div className="image">
                <img src={meal.img} alt="" />
                <div className="title">
                  <h5>{meal.title}</h5>
                  <button>Remove</button>
                </div>
              </div>
              <div className="quantity" id="end">
                <strong className="noNeed">{meal.quantity}</strong>
                <strong className="noNeed">
                  ₦{meal.quantity * meal.price}
                </strong>
                <strong
                  className={
                    meal.status === "Delivered" ? "delivered" : "cooking"
                  }
                >
                  {meal.status}
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
