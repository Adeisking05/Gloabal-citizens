import React from "react";

import Rec from "../assets/Rectangle.png";
import Vec from "../assets/Vectary-texture.png";
import "../styles/AboutStyles.css";
import { NavBar } from "./NavBar";

const AboutUs = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="header">About Us</div>
        <div className="content-large">
          Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum
          dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum
          dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem ipsum
          dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am
          et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am
          et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am
          et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem
          ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem
          ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem
          ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem
          ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor
          sit am et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor
          sit am et, Lorem ipsum dolor sit am et, ipsum Lorem ipsum dolor sit am
          et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem
          ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem
          ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem
          ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem
          ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor
          sit am et, sit am et, Lorem ipsum dolor sit am et, ipsum Lorem ipsum
          dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am
          et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am
          et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am
          et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem
          ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem
          ipsum dolor sit am et, ipsum dolor sit am et, Lorem ipsum dolor sit am
          et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am
          et, Lorem ipsum dolor sit am et, sit am et, Lorem ipsum dolor sit am
          et, ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et,
          Lorem ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am et,
          Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum
          Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum
          dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum
          dolor sit am et, Lorem ipsum dolor sit am et, ipsum dolor sit am et,
          Lorem ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor sit am et,
          Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et, sit am et,
          Lorem ipsum dolor sit am et, ipsum Lorem ipsum dolor sit am et, Lorem
          ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem
          ipsum dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor
          sit am et, Lorem ipsum Lorem ipsum dolor sit am et, Lorem ipsum dolor
          sit am et, Lorem ipsum dolor sit am et, Lorem ipsum Lorem ipsum dolor
          sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit am et,
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
    </>
  );
};

export default AboutUs;
