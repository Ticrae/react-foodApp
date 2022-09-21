import React, { useState } from "react";
import header from "../assets/header.svg";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);

  const showSidebar = () => setsidebar(!sidebar);

  const sidebarData = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "Login",
      path: "/login",
      cName: "nav-text",
    },
    {
      title: "Signup",
      path: "/signup",
      cName: "nav-text",
    },
  ];

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={header} alt={"logo"} />
          <h1>Lilies</h1>
        </div>

        <div className="nav-bar">
          <Link to={"#"} className={"menu-bars"}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li className="navbar-toggle">
              <Link className="menu-bars" to={"#"}>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link className="nav-links-a" id="home" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" id="logins" to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" id="signup" to={"/signup"}>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
