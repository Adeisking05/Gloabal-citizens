import React from "react";
import "../styles/SignUp.css";
import Data from "../assets/Data-privacy.png";
import Gropup from "../assets/Group.png";
const SIgnUp = () => {
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
          <form>
            <section className="copy">
              <h2 className="sh2">Sign Up</h2>
              <h3>Create an account</h3>

              <div className="login-container"></div>
            </section>
            <div className="input-container name">
              <label className="lbb " for="fname">
                Name
              </label>
              <input id="fname" name="fname" type="text"></input>
            </div>
            <div className="input-container email">
              <label className="lbb" for="email">
                Email
              </label>
              <input id="email" name="email" type="email"></input>
            </div>
            <div className="input-container password">
              <label className="lbb" for="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="must be at least 16 characters"
              ></input>
              <i class="far fa-eye-slash"></i>
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
