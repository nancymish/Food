import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo1} alt="" className="logo"/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos dolorum accusamus delectus itaque rem minima, dolor
            nulla porro distinctio rerum, quam deleniti ut ullam iste odio
            vitae, similique voluptatibus? Ducimus.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-202-456-9909</li>
                <li>Contact298@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © GoodFood.com - All Right Reserved.©</p>
    </div>
  );
};

export default Footer;
