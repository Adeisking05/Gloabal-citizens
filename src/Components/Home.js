import React from "react";

import Phone from "../assets/Phone-img.png";
import money from "../assets/money.png";
import { NavBar } from "./NavBar";
import "../styles/Home.css";
import BrowseUsers from "../Components/BrowseUsers";
const Home = () => {
  return (
    <>
      <NavBar />
      <header className="busers">
        <h1 className="bh1">Browse Users</h1>
        <BrowseUsers />
      </header>

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
        <div className="cards" id="scard">
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
      <div className="cta-sectionzz">
        <div className="cta-contentzz">
          <div className="cta-col col_1">
            <div className="col-contentzz">
              <h2 className="playstoreh1">
                Look Out For Ios and
                <br />
                Android
              </h2>
              <p> Search Connect</p>
              {/* <p className="iosp"> */}
              <button className="dbtnzz">Download Now</button> {/* </p> */}
            </div>
          </div>
          <div className="cta-col col_2">
            <div className="col-contentzz"></div>
            <div className="btn-holder">
              <img src={Phone} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
