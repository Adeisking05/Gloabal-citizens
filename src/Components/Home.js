import React from "react";

import Vec from "../assets/Vectary-texture.png";
import money from "../assets/money.png";
import { NavBar } from "./NavBar";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="containerss">
        <div className="cards">
          <div className="cards-header"></div>
          <div className="cards-body">
            <h1 className="shh1">Getting Started</h1>
            <h4>
              Discover and Explore users around you, we provide a Platform where
              your identity is safe.
            </h4>
            <br />
            <br />
            <button className="str-btn">Getting Started</button>

            <div className="user">
              <div className="user-info"></div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cards-header"></div>
          <div className="cards-body">
            <div className="user">
              <div className="user-info"></div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cards-header"></div>
          <div className="cards-body">
            <h1 className="shh1">
              <span>Stay Updated</span>
            </h1>
            <h4>
              Check out our information structure showing feeds & information
              about thing around you.
            </h4>
            <br />
            <br />
            <button className="str-btn">Check Feed</button>
            <div className="user">
              <div className="user-info"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="containerzzz">
        <div className="cardzz">
          <div className="cardzz-image car-1"></div>
          <h2 className="hp">Finance News</h2>
          <p className="cp">
            Get the latest finance news straight to your inbox
          </p>
          <a className="ca" href="#">
            View more
          </a>
        </div>
        <div className="cardzz">
          <div className="cardzz-image car-1"></div>
          <h2 className="hp">Sport News</h2>
          <p className="cp">
            Get the latest sports news straight to your inbox
          </p>
          <a className="ca" href="#">
            View more
          </a>
        </div>
        <div className="cardzz">
          <div className="cardzz-image car-1"></div>
          <h2 className="hp">Politics News</h2>
          <p className="cp">
            Get the latest Politics news straight to your inbox
          </p>
          <a className="ca" href="#">
            View more
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
