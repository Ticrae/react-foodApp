import React from "react";
import meal1 from "../assets/meal1.svg";
import meal2 from "../assets/meal2.svg";
import meal3 from "../assets/meal3.svg";
import meal4 from "../assets/meal4.svg";
import meal5 from "../assets/meal5.svg";
import meal6 from "../assets/meal6.svg";
import header from "../assets/header.svg";
import dash1 from "../assets/dash1.svg";
import dash2 from "../assets/dash2.svg";
import dash3 from "../assets/dash3.svg";
import dash4 from "../assets/dash4.svg";
import dp from "../assets/dp.svg";
import { Link } from "react-router-dom";
import "./Background.css";

const Background = ({ count }) => {
  const meals = [
    {
      id: 1,
      img: meal1,
      title: "Stir Fry Pasta",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 1000,
      cartBtn: "Add to cart",
      status: "Cooking",
    },
    {
      id: 2,
      img: meal2,
      title: "Indomie",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 1600,
      cartBtn: "Add to cart",
      status: "Delivered",
    },
    {
      id: 3,
      img: meal3,
      title: "Cheese and Pasta",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 2800,
      cartBtn: "Add to cart",
      status: "Cooking",
    },
    {
      id: 4,
      img: meal4,
      title: "Yam peppersoup",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 3300,
      cartBtn: "Add to cart",
      status: "Delivered",
    },
    {
      id: 5,
      img: meal5,
      title: "Fries and Egg",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 1200,
      cartBtn: "Add to cart",
      status: "Cooking",
    },
    {
      id: 6,
      img: meal6,
      title: "Rice and Egg sauce",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 4700,
      cartBtn: "Add to cart",
      status: "Delivered",
    },
  ];

  const user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user);

  let timeDay = new Date().getHours();
  let timeGreet = null;
  if (timeDay < 12) {
    timeGreet = "Good Morinng";
  } else if (timeDay < 16) {
    timeGreet = "Good Afternoon";
  } else if (timeDay < 21) {
    timeGreet = "Good Evening";
  } else {
    timeGreet = "Good Night";
  }

  return (
    <div className="dashboard">
      <div className="left-panel">
        <div className="dash-title">
          <img src={header} alt={"header"} />
          <h1>Lilies</h1>
        </div>

        <ul className={"dash-card-container"}>
          <li id="active" className="nav-card active">
            <img src={dash1} alt={"icon"} />
            <h4 className="link">Dashboard</h4>
          </li>
          <li className="nav-card">
            {" "}
            <img src={dash2} alt={"icon"} />
            <h4 className="link">Your Profile</h4>
          </li>
          <li className="nav-card">
            <img src={dash4} alt={"icon"} />
            <h4 className="link">Orders</h4>
            <div className="OrderBtn" id="green">
              <h5>5</h5>
            </div>
          </li>
          <li className="nav-card">
            <img src={dash3} alt={"icon"} />
            <h4 className="link">Your Cart</h4>
            <div className="OrderBtn" id="orange">
              <h5>{count}</h5>
            </div>
          </li>
        </ul>
      </div>

      <div className="dash-container">
        {user ? (
          <div className="header-container">
            <div className="title-container">
              <h3>
                {timeGreet},{user?.name}!
              </h3>
              <p>What delicious meal are you craving today?</p>
            </div>
            <img src={dp} alt={"dp"} />
          </div>
        ) : (
          ""
        )}
        <div className="menu-data">
          {meals.map((meal) => {
            return (
              <div key={meal.id} className={"food-list"}>
                <Link to={`/meal/${meal.id}`}>
                  <img src={meal.img} alt={"pic"} />
                </Link>
                <Link className="titles" to={`/meal/${meal.id}`}>
                  {meal.title}
                </Link>
                <p>{meal.text}</p>
                <div className="menu-p">
                  <h4>N{meal.price}</h4>
                  <h5>Add to Cart</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Background;
