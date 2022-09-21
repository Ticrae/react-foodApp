import React from "react";
import "./Dashboard.css";
import dash1 from "../assets/dash1.svg";
import dash2 from "../assets/dash2.svg";
import dash3 from "../assets/dash3.svg";
import dash4 from "../assets/dash4.svg";
import dp from "../assets/dp.svg";
import header from "../assets/header.svg";
import { Link } from "react-router-dom";

const Dashboard = ({ meals, onAdd, count }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user);

  let timeDay = new Date().getHours();
  let timeGreet = null;
  if (timeDay < 12) {
    timeGreet = "Good Morning";
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
          <li className="nav-card active">
            <img src={dash1} alt={"icon"} />
            <h4>
              <Link id="active" className="hlinks" to={"/dashboard"}>
                Dashboard
              </Link>
            </h4>
          </li>
          <li className="nav-card">
            {" "}
            <img src={dash2} alt={"icon"} />
            <h4>
              <Link className="hlinks" to={"/profile"}>
                Your Profile
              </Link>
            </h4>
          </li>
          <li className="nav-card">
            <img src={dash4} alt={"icon"} />
            <h4>
              <Link className="hlinks" to={"/orders"}>
                Orders
              </Link>
            </h4>
            <div className="OrderBtn" id="green">
              <h5>5</h5>
            </div>
          </li>
          <li className="nav-card">
            <img src={dash3} alt={"icon"} />
            <h4>
              <Link className="hlinks" to={"/cart"}>
                Your Cart
              </Link>
            </h4>
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
                {timeGreet}, {user?.name}!
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
                <Link id="image" to={`/meal/${meal.id}`}>
                  <img src={meal.img} alt={"pic"} />
                </Link>
                <Link className="titles" to={`/meal/${meal.id}`}>
                  {meal.title}s
                </Link>
                <p className="meal-text">{meal.text}</p>
                <div className="menu-p">
                  <h4>N{meal.price}</h4>
                  <h5 onClick={() => onAdd(meal)}>Add to Cart</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
