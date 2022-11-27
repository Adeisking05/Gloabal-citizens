import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import News from "./News";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
export const ProfileNav = () => {
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
        <Link to="/Profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};
