import React from "react";

import avatar from "../assets/avatar.png";
import "../Components/profile.css";
import { ProformNav } from "./ProformNav";

const ProfileForm = () => {
  return (
    <>
      <ProformNav />
      <div className="aligned">
        <img src={avatar} alt="" className="img" />
        <button className="imgb">Upload new picture</button>
      </div>
      <div className="containerzz">
        <form className="pf">
          <div className="row">
            <label for="fname">First Name</label>

            <input className="bb" type="text" id="fname" name="firstname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>
          <div className="row">
            <label for="lname">Last Name</label>

            <input className="bb" type="text" id="lname" name="lastname" />
          </div>

          <div className="row">
            <input className="btt" type="submit" value="Save profile" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
