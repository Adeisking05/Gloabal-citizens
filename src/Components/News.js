import React from "react";

import Rec from "../assets/Rectangle.png";
import Vec from "../assets/Vectary-texture.png";
import "../styles/News.css";
import "../styles/AboutStyles.css";
import money from "../assets/money.png";
import { NewsNav } from "./NewsNav";

const News = () => {
  return (
    <>
      <NewsNav />
      <div className="container">
        <div className="header">News And Event</div>
        <div className="content-large">
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <img src={money} alt="" />
              </div>
              <div className="course-info">
                <div className="progress-container"></div>
                <h6>
                  Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
                  dolor sit
                </h6>
                <h2>2 days ago</h2>
              </div>
            </div>
          </div>
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <img src={money} alt="" />
              </div>
              <div className="course-info">
                <div className="progress-container"></div>
                <h6>
                  Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
                  dolor sit
                </h6>
                <h2>2 days ago</h2>
              </div>
            </div>
          </div>
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <img src={money} alt="" />
              </div>
              <div className="course-info">
                <div className="progress-container"></div>
                <h6>
                  Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
                  dolor sit
                </h6>
                <h2>2 days ago</h2>
              </div>
            </div>
          </div>
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <img src={money} alt="" />
              </div>
              <div className="course-info">
                <div className="progress-container"></div>
                <h6>
                  Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
                  dolor sit
                </h6>
                <h2>2 days ago</h2>
              </div>
            </div>
          </div>
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <img src={money} alt="" />
              </div>
              <div className="course-info">
                <div className="progress-container"></div>
                <h6>
                  Lorem ipsum dolor sit am et, consect et ur adip isci ma ipsum
                  dolor sit
                </h6>
                <h2>2 days ago</h2>
              </div>
            </div>
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
          <p>
            <h1 style={{ fontWeight: "bold" }}>Trending News</h1>
            <br />
            <h1 style={{ fontWeight: "bold", marginTop: "10px" }}>
              {" "}
              Lorem ipsum dolor sit am et,
            </h1>
            <br />
            Lorem ipsum dolor sit am et,
            <br /> Lorem ipsum dolor sit am et,
            <br /> Lorem ipsum dolor sit am et, <br />
            Lorem ipsum dolor sit am et,
            <br />
            <br />
            <h1 style={{ fontWeight: "bold", marginTop: "10px" }}>
              {" "}
              Lorem ipsum dolor sit am et,
            </h1>
            <br />
            Lorem ipsum dolor sit am et,
            <br /> Lorem ipsum dolor sit am et,
            <br /> Lorem ipsum dolor sit am et, <br />
            Lorem ipsum dolor sit am et,
            <br />
            <br />
            <h1 style={{ fontWeight: "bold", marginTop: "10px" }}>
              {" "}
              Lorem ipsum dolor sit am et,
            </h1>
            <br />
            Lorem ipsum dolor sit am et,
            <br /> Lorem ipsum dolor sit am et,
            <br /> Lorem ipsum dolor sit am et, <br />
            Lorem ipsum dolor sit am et,
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default News;
