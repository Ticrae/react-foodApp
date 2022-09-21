import React from "react";
import { Link, useParams } from "react-router-dom";
import Background from "./Background";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import "./SideCart.css";

const SideCart = ({ meal, onAdd, onRemove, cartItems, count }) => {
  const { id } = useParams();

  return (
    <div>
      <>
        {meal.id == id ? (
          <>
            <div className="food">
              <Background count={count} />
            </div>
            <div className="bgColor"></div>
            <div className="itemDetail">
              <Link to={"/dashboard"}>
                <AiOutlineArrowLeft className="goBack" />
              </Link>
              <div className="itemDetails">
                <img src={meal.img} alt={"imag"} />
                <h1>{meal.title}</h1>
                <p>{meal.text}</p>
                <div className="itemDetailsPrice">
                  <h4>N{meal.price}</h4>
                  <h4>10-20mins</h4>
                  <h4>10 Pcs Avail</h4>
                </div>
                <div className="addBtns">
                  <div className="quantity">
                    {cartItems.map((x) => {
                      if (x.id == id) {
                        return (
                          <div key={x.id}>
                            {x.quantity ? (
                              <div className="group">
                                <AiFillMinusSquare
                                  className="icon"
                                  onClick={() => onRemove(meal)}
                                />
                                <p>{x.quantity}</p>
                                <AiFillPlusSquare
                                  className="icon"
                                  onClick={() => onAdd(meal)}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button onClick={() => onAdd(meal)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Great is thy faithfulness"
        )}
      </>
    </div>
  );
};

export default SideCart;
