import React from "react";
import { useState } from "react";
import "../styles/SignUp.css";
import Data from "../assets/Data-privacy.png";
import Gropup from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nin: "",
    password: "",
  });
  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fast-Woodland-39897.herokuapp.com/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
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
      if (data.msg === "Successfully logged in") {
        navigate("/");
      } else {
        alert("error creating account");
      }
      console.log(data);
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
                Don't have an account ?
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
              </h6>
              <h2 className="sh2">Login</h2>
              <h3>Sign in to an account</h3>

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
                placeholder="must be at least 6 characters"
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

export default Login;
