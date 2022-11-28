import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import News from "./News";
import AboutUs from "./AboutUs";
import SIgnUp from "./SIgnUp";
import Login from "./Login";
export const NewsNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <h2 className="logo">NavBar</h2>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/News">
          <li>News</li>
        </Link>
        <Link to="/AboutUs">
          <li>About</li>
        </Link>
        <Link to="/Login">
          <li>Sign In</li>
        </Link>
        <Link to="/SIgnUp">
          <li className="SignUp-btn">Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};
