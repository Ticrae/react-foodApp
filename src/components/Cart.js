import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Background from "./Background";
import "./Cart.css";

const Cart = ({ meals, onRemove, count, cartItems }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="cart">
      <div className="bg">
        <Background count={count} />
      </div>
      <div className="bgColor"></div>
      <div className="cartTable">
        <div className="cartHeader">
          <h1>Your Cart</h1>
          <p>
            <Link to={"/dashboard"} className="links">
              Back to Dashboard
            </Link>
          </p>
        </div>

        {count > 0 ? (
          <>
            <div className="itemss">
              <div className="images">
                <strong>Item</strong>
              </div>
              <div className="quantitys" id="end">
                <strong>Qty</strong>
                <strong id="unitP">Unit Price</strong>
                <strong>Sub-total </strong>
              </div>
            </div>
            {cartItems.map((meal) => {
              return (
                <div key={meal.id} className={"itemsMenu"}>
                  <div className="image">
                    <img src={meal.img} alt={"image"} />
                    <div className="titles">
                      <h5>{meal.title}</h5>
                      <button onClick={() => onRemove(meal)}>Remove</button>
                    </div>
                  </div>
                  <div className="quantityFigure" id="end">
                    <strong className="cartFigure">{meal.quantity}</strong>
                    <strong id="unitPrice" className="cartFigure">
                      N{meal.price}
                    </strong>
                    <strong className="cartFigure">
                      N{meal.quantity * meal.price}
                    </strong>
                  </div>
                </div>
              );
            })}
            <p className="total">
              Total: &nbsp;
              <strong>₦{totalPrice.toFixed(2)}</strong>
            </p>
            <button className="button" onClick={handleSubmit}>
              Checkout
            </button>
          </>
        ) : (
          "Your Cart is currently empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
