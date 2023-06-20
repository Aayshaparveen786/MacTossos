import React from "react";
import "./FooterStyle .css";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icon">
          <ImFacebook size="1.5em" cursor="pointer" />
          <AiOutlineInstagram size="1.6em" cursor="pointer" />
          <BsTwitter size="1.6em" cursor="pointer" />
          <a href="https://www.linkedin.com/in/aaysha-parveen-155354275/">
            <FiLinkedin color="white" size="1.6em" cursor="pointer" />
          </a>
        </div>

        <div className="last-box">
          {/* <h3>Privacy Policy</h3>
            <h3>Terms of Use</h3> */}
          <p className="last-para-link">
            <a href="./ServicePage">Privacy Policy</a>
          </p>
          <p className="last-para-link">
            <a href="https://neutrelle.co.uk/terms-of-use/">Terms of Use</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
