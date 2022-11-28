import React from "react";
import { useState, useEffect } from "react";
import Rec from "../assets/Rectangle.png";
import Vec from "../assets/Vectary-texture.png";
import "../styles/News.css";
import "../styles/AboutStyles.css";
import money from "../assets/money.png";
import { NewsNav } from "./NewsNav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import NewsPage from "./NewsPage";
import { NavBar } from "./NavBar";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const handleClick = (item) => {
    navigate("/NewsPage", {
      state: {
        content: item.content,
        image: item.urlToImage,
        title: item.title,
        description: item.description,
        date: item.publishedAt,
      },
    });
  };

  const fetchNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5df81193e7f4bbab8ff57005a153ead"
    );
    const result = await response.json();
    // const fNews = [];

    // for(let i = 0; i < 10; i++) {
    //   fNews.push(result.articles[i]);
    // }
    // setNews(fNews);

    setNews(result.articles.slice(0, 20));
    setLoading(false);
    console.log(result);
  };
  if (loading) {
    return <h3 className="loader"></h3>;
  } else {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="header">News And Event</div>
          <div className="content-large">
            {news.map((item, i) => (
              <div className="courses-container">
                <div className="course">
                  <div className="course-preview">
                    <img src={item?.urlToImage} alt="" />
                  </div>
                  <div className="course-info">
                    <div className="progress-container"></div>
                    <h6>{item?.title}</h6>
                    <h2>2 days ago</h2>
                    <button onClick={() => handleClick(item)}>View more</button>
                  </div>
                </div>
              </div>
            ))}
            ;
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
            dolor sit am et, Lorem ipsum dolor sit am et, Lorem ipsum dolor sit
            am et,
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
        <br />
        <Footer />
      </>
    );
  }
};

export default News;
