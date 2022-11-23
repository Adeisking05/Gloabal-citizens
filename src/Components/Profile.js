import React from "react";
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";

import bavatar from "../assets/bavatar.png";
import "../Components/profile.css";
import { ProfileNav } from "./ProfileNav";

const Profile = () => {
  return (
    <>
      <ProfileNav />
      <div className="containeree">
        <section className="profilezz">
          <div className="imagezz">
            <img className="baa" src={bavatar} alt="user pic" />{" "}
            {/* <h2>
              Alex johnson <br /> <h4>alexjohnson@gmail.com</h4> <br />
              <button className="edp"> Edit Profile</button>
            </h2> */}
          </div>
        </section>
        <br />
        <br />

        <section className="containeree">
          <div className="grid-containeree">
            <div className="grid-itemzz">
              <h1>BIO ---------------------------</h1>
              <p className="Biop">
                I believe that no one should ever have <br />
                to choose between a career we love and living
                <br /> our lives with authencity and integrity. I’m confident in
                <br />
                the choices i make.
              </p>
              <br />
              <br />
              <br />
              <br />
              <h1>BASIC INFORMATION</h1>
              <label>DOB</label> <label>10/10/10</label>
              <br />
              <label>Gender</label> <label>female</label>
              <br />
              <label>Height</label> <label>25</label>
              <br />
              <label>Interest</label> <label>catering baking sports.</label>
            </div>
            <div className="grid-itemzz">
              <h1>CONTACT INFO ----------------------</h1>
              <label>PHONE NUMBER</label>
              <label>+2348223455489</label>
              <br />
              <label>ADDRESS</label>
              <label>No. 10 owie str off peanut road edo state</label>
              <br />
              <br />
              <br />
              <br />

              <h1>SKILL-----------------------</h1>
              <label>Occupation</label>
              <label>product engineer</label>
              <br />
              <label>Relationship</label>
              <label>single</label>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
