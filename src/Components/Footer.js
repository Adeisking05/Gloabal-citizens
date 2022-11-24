import React from "react";
import bird from "../assets/footer-bird.png";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="footer-widget">
            <a href="#">
              <img src={bird} className="logo" />
            </a>
            <p className="desc">
              A platform that let you discover and explore users around you, we
              provide a Platform where your identity is safe.
            </p>
          </div>
          <div className="footer-widget">
            {/* <h6>Quick Link</h6>
            <ul className="links">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">testimonial</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul> */}
          </div>
          <div className="footer-widget">
            <h6>Preferences</h6>
            <ul className="links">
              <li>
                <a href="#">User Data</a>
              </li>
              <li>
                <a href="#">User Storage</a>
              </li>
              <br />
              <h6>Relevant Links</h6>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Feed</a>
              </li>
              <li>
                <a href="#">AboutUs</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Help &amp; Support</h6>
            <ul className="links">
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <br />
              <h6>Contact</h6>
              <li>
                <a href="#">Stay in touch with us</a>
              </li>
              <li>
                <a href="#">deebuginstitute@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>© 2022 NC All Rights Reserved. Developed by Deebug Institute</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
