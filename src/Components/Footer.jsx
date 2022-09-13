import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footermaincontainer">
        <div className="footercontainer">
          <div className="leftfootercontent">
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
          </div>
          <div className="rightfootercontent">
            <button className="footerbutton">
              <NavLink to="/" className="footerlink">
                GET STARTED
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="superlastdiv">
        <div className="lastmaindiv">
          <div className="lastdivcontents">
            <div className="firstdiv">
              <p className="headingp">React website</p>
              <p className="paratag">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
            </div>

            <div className="seconddiv">
              <p className="headingp">Subscribe</p>
              <form
                className="inputbar"
                action="https://formspree.io/f/xnqrnbdn"
                method="POST"
              >
                <input
                  type="email"
                  name="Email"
                  placeholder="EMAIL"
                  className="inputtag"
                ></input>
                <input
                  type="submit"
                  className="subsbutton"
                  value="SUBSCRIBE"
                ></input>
              </form>
            </div>

            <div className="thirddiv">
              <p className="headingp">Follow Me</p>
              <div className="iconsdiv">
                <div>
                  <a
                    href="https://www.linkedin.com/in/this-is-shubham-singh/"
                    target="blank"
                  >
                    <FaLinkedin className="icon" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/this.is_shubham/"
                    target="blank"
                  >
                    <FaInstagram className="icon" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/thisisshubham77" target="blank">
                    <FaTwitter className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="fourthdiv">
              <p className="headingp">Call Us</p>
              <p className="paratag">+91 9818259642</p>
            </div>
          </div>
        </div>
        <div className="supersdad">
          <hr />
          <div className="superlastcontent">
            <div>
              <p className="paratag">
                @{new Date().getFullYear()} React website. All Rights Reserved
              </p>
            </div>
            <div>
              <p className="paratag">PRIVACY POLICY</p>
              <p className="paratag">TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
