import React from "react";
import { useState } from "react";
import "../styles/SignUp.css";
import Data from "../assets/Data-privacy.png";
import Gropup from "../assets/Group.png";

import { useNavigate, Link, UseLocation } from "react-router-dom";

const SIgnUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    nin: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fast-Woodland-39897.herokuapp.com/auth/signup",
        {
          method: "POST",
          body: JSON.stringify({
            email: formData.email,
            nin: formData.nin,
            password: formData.password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
        }
      );
      const data = await res.json();
      const result = res;
      console.log(data);
      // console.log(result);

      if (data.msg === "Successfully created user") {
        navigate("/Login");
      } else {
        setMessage(data.msg);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="split-screen">
        <div className="left">
          <section className="national">
            <h4>NATIONAL CITIZEN</h4>
          </section>
          <section className="copy-img">
            <img src={Data} alt="" />
          </section>
        </div>

        <div className="right">
          <form onSubmit={handleSubmit}>
            <section className="copy">
              <h6 className="allrad">
                Already have an acount ?
                <Link to="/Login">
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
                    Sign In
                  </button>
                </Link>
              </h6>
              <h2 className="sh2">Sign Up</h2>
              <h3>Create an account</h3>

              <div className="login-container"></div>
            </section>
            <div className="input-container name">
              <label className="lbb " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div className="input-container email">
              <label className="lbb" htmlFor="nin">
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
            {message ? <div>{message}</div> : null}
            <div className="input-container password">
              <label className="lbb" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                placeholder="must be at least 6 characters"
                onChange={handleChange}
                minLength={6}
              ></input>
              {/* <i class="far fa-eye-slash"></i> */}
            </div>

            <button className="signup-btns" type="submit">
              Sign Up
            </button>
            <section className="copy legal">
              <p>
                <span className="small">
                  By continuing you agree to ou terms
                </span>
              </p>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default SIgnUp;
