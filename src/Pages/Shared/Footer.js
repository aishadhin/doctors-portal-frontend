import React from "react";
import bg from "../../../src/assets/images/bg.png";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundImage: `url(${bg})` }}
        className="text-[#3A4256] footer justify-around p-10 text-neutral-content"
      >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
