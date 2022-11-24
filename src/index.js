import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SIgnUp from "./Components/SIgnUp";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import AboutUs from "./Components/AboutUs";
import News from "./Components/News";
import ProfileForm from "./Components/ProfileForm";
import NewsPage from "./Components/NewsPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SIgnUp" element={<SIgnUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/News" element={<News />} />
      <Route path="/ProfileForm" element={<ProfileForm />} />
      <Route path="/NewsPage" element={<NewsPage />} />
    </Routes>
  </BrowserRouter>
);
