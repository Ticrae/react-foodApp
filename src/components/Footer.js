import React from "react";
import playstore from "../assets/playstore.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-list">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-list">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Safety Center</li>
          </ul>
        </div>
        <div className="footer-list">
          <h4>Legal</h4>
          <ul>
            <li>Cookies Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Dispute resolution</li>
          </ul>
        </div>
        <div className="footer-list">
          <h4>Install App</h4>
          <img src={playstore} alt={"playstore"} />
        </div>
      </div>
      <div className="footer-end">
        <h3>© 2021 LILIES, All rights reserved</h3>
        <div className="socials">
          <img src={instagram} alt={"social"} />
          <img src={twitter} alt={"social"} />
          <img src={youtube} alt={"social"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
