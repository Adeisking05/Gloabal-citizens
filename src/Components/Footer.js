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
            <h6>Services</h6>
            <ul className="links">
              <li>
                <a href="#">web design</a>
              </li>
              <li>
                <a href="#">web development</a>
              </li>
              <li>
                <a href="#">seo optimization</a>
              </li>
              <li>
                <a href="#">blog writing</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Help &amp; Support</h6>
            <ul className="links">
              <li>
                <a href="#">support center</a>
              </li>
              <li>
                <a href="#">live chat</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">terms &amp; conditions</a>
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
