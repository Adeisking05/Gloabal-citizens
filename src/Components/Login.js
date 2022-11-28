import React from "react";
import { useState, useContext } from "react";
import "../styles/SignUp.css";
import Data from "../assets/Data-privacy.png";
import Gropup from "../assets/Group.png";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "./UserContext";
import Logo from "../assets/logo.png";
const Login = () => {
  const navigate = useNavigate();
  const userValues = useContext(userContext);
  const { handleSubmit, formData, setFormData, success } = userValues;
  if (success) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="split-screen">
        <div className="left">
          <section className="national">
            <div id="logo-div">
              <img src={Logo} alt="" />
            </div>
          </section>
          <section className="copy-img">
            <img src={Data} alt="" />
          </section>
        </div>

        <div className="right">
          <form onSubmit={handleSubmit}>
            <section className="copy space">
              <h6 className="allrad">
                Don't have an account ?
                <Link to="/SIgnUp">
                  <button
                    style={{
                      backgroundColor: "#a422cd",
                      color: "white",
                      width: "80px",
                      borderRadius: "70px",
                      marginLeft: "260px",
                      margin: "30px",
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              </h6>
              <h2 className="sh2">Login</h2>
              <h3 className="creation">Welcome Back</h3>

              <div className="login-container"></div>
            </section>

            <div className="input-container email">
              <label className="lbb" for="nin">
                NIN
              </label>
              <input
                id="nin"
                type="text"
                value={formData.nin}
                placeholder="Enter NIN"
                onChange={handleChange}
                maxLength={11}
                name="nin"
              />
            </div>
            <div className="input-container password">
              <label className="lbb" for="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                placeholder="Must be at least 6 characters"
                onChange={handleChange}
                minLength={6}
              ></input>
              {/* <i class="far fa-eye-slash"></i> */}
            </div>

            <button className="signup-btns" type="submit">
              Login
            </button>
            <section className="copy legal">
              <p>
                <span className="small">
                  By continuing, you agree to our terms and conditions
                </span>
              </p>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
