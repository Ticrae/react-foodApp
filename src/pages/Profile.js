import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import dp from "../assets/dp.svg";
import Background from "../components/Background";
import "./Profile.css";

const Profile = ({ count }) => {
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

  // const { id } = useParams();

  return (
    <div className="singlefood-container">
      <div className="food">
        <Background count={count} />
      </div>
      <div className="bg-color"></div>
      <div className="singlefood">
        <Link to="/dashboard">
          <AiOutlineArrowLeft className="go-back" />
        </Link>
        <img src={dp} alt="" />
        {user && (
          <h3>
            {timeGreet}, {user?.name}!
          </h3>
        )}
        <p>Hello there, I enjoy Lilies food cus i'm a foodie ;-)</p>
      </div>
    </div>
  );
};

export default Profile;
