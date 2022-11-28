import React, { useState, useContext } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Nav.css";
import { userContext } from "./UserContext";
import News from "./News";
import AboutUs from "./AboutUs";
import SIgnUp from "./SIgnUp";
import Login from "./Login";

export const NavBar = () => {
  const userValues = useContext(userContext);
  const { token } = userValues;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate();

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
        {token ? (
          <Link to="/Profile">
            <li>Profile</li>
          </Link>
        ) : (
          <Link to="/Login">
            <li>Sign In</li>
          </Link>
        )}

        {token ? (
          <li
            onClick={() => {
              alert("You are about to Log Out");
              localStorage.clear();
              navigate("/", { replace: true });
              window.location.reload(true);
            }}
          >
            Log Out
          </li>
        ) : (
          <Link to="/SIgnUp">
            <li className="SignUp-btn">Sign Up</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};
