import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
export const ProformNav = () => {
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
        <li>Home</li>
        <li>News</li>
        <li>Profile</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};
