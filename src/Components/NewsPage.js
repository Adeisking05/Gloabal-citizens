import React from "react";
import Big from "../assets/big-money.png";
import Rec from "../assets/Rectangle.png";
import Vec from "../assets/Vectary-texture.png";
import "../styles/AboutStyles.css";
import Footer from "./Footer";
import { NavBar } from "./NavBar";

const NewsPage = () => {
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
            <img src={Big} alt="" />
            <h2>
              Lorem ipsum dolor sit am et, consect et ur adip adip Lorem Lorem
              ipsum dolor sit am et <p> 2 days ago</p>
            </h2>
            <br />
            <h4>
              Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
              dolor sit am et, consect et ur ad consect et Lorem ipsum dolor sit
              am et, consect et ur adip isci ma ipsum dolor sit am et, consect
              et ur ad consect et Lorem ipsum dolor sit am et, consect et ur
              adip isci ma ipsum dolor sit am et, consect et ur ad consect et
              Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
              dolor sit am et, consect et ur ad consect et Lorem ipsum dolor sit
              am et, consect et ur adip isci ma ipsum dolor sit am et, consect
              et ur ad consect et Lorem ipsum dolor sit am et, consect et ur
              adip isci ma ipsum dolor sit am et, consect et ur ad consect et
              Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
              dolor sit am et, consect et ur ad consect et Lorem ipsum dolor sit
              am et, consect et ur adip isci ma ipsum dolor sit am et, consect
              et ur ad consect et Lorem ipsum dolor sit am et, consect et ur
              adip isci ma ipsum dolor sit am et, consect et ur ad consect et
            </h4>
          </div>
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
