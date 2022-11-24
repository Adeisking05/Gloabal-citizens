import React from "react";
import Big from "../assets/big-money.png";
import Rec from "../assets/Rectangle.png";
import Vec from "../assets/Vectary-texture.png";
import "../styles/AboutStyles.css";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import { useLocation } from "react-router-dom";

const NewsPage = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <div className="container">
        <div
          className="header"
          style={{ fontWeight: "900", color: "gray", fontSize: "30px" }}
        >
          NEWS AND EVENTS
        </div>
        <div className="content-large">
          <div className="blog-card">
            <img src={location.state.image} alt="" />
            <h2>{location.state.title}</h2>
            <br />
            <h4>{location.state.description}</h4>
          </div>
          <p>{location.state.date}</p>
        </div>

        <div className="content-small">
          <input
            type="search"
            placeholder="search"
            style={{ border: "1px solid gray" }}
          ></input>
          <br />
          <hr style={{ border: "1px gray" }}></hr>
          <br />
          Lorem ipsum dolor sit am et,Lorem ipsum dolor sit am et, Lorem ipsum
          dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am
          et,
        </div>
        <div className="content-small">
          Download National Citizen on Playstore & Appstore
          <img src={Vec}></img>
          <a
            style={{
              background: "#A422CD",
              borderRadius: "5.31718px",
              // marginLeft: "30px",
            }}
            className="mt-[30px] block w-full lg:w-[240px] rounded-lg  py-3 px-5 text-center font-medium text-white shadow-lg shadow-indigo-400/25 lg:inline-block"
            href="#"
          >
            Stay Updated
          </a>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default NewsPage;
