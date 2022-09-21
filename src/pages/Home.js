import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import food1 from "../assets/food1.svg";
import playstore from "../assets/playstore.svg";
import food2 from "../assets/food2.svg";
import food3 from "../assets/food3.svg";
import food4 from "../assets/food4.svg";
import Footer from "../components/Footer";

const Home = () => {
  const foodData = [
    {
      img: food2,
      title: "Stir fry Pasta",
      text: "Stir fry pasta yada yada yada because of Sesan",
      cName: "food-data",
    },
    {
      img: food3,
      title: "Meat Balls",
      text: "Stir fry pasta yada yada yada because of Sesan",
      cName: "food-data",
    },
    {
      img: food4,
      title: "Burger Meal",
      text: "Stir fry pasta yada yada yada because of Sesan",
      cName: "food-data",
    },
  ];

  return (
    <>
      <div className="homepage">
        <Navbar />

        <div className="first-content">
          <div className="first-content-left">
            <h1>Order food anytime, anywhere</h1>
            <p>
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
            <img src={playstore} alt={"playstore"} />
          </div>
          <div className="first-content-right">
            <img src={food1} alt={"food"} />
          </div>
        </div>

        <div className="second-content">
          <h1>Special Meals of the day!</h1>
          <p>
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
          <div className="display-meals">
            {foodData.map((item, index) => {
              return (
                <div className={item.cName} key={index}>
                  <img src={item.img} alt={"img"} />
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="third-content">
          <div className="third-content-left">
            <h1>Get notified when we update!</h1>
            <p>
              Get notified when we add new items to our specials menu, update
              our price list of have promos!
            </p>
          </div>
          <div className="third-content-right">
            <input type={"text"} placeholder={"abc@gmail.com"} />
            <button>Get notified</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
