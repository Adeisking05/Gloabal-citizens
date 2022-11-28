import React from "react";
import { useState, useContext } from "react";
import avatar from "../assets/avatar.png";
import "../Components/profile.css";
import { NavBar } from "./NavBar";
import { ProformNav } from "./ProformNav";
import { userContext } from "./UserContext";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
const ProfileForm = () => {
  const location = useLocation();
  const name = location.state.name;
  const status = location.state.status;
  const bio = location.state.bio;
  const occupation = location.state.occupation;
  const interest = location.state.interest;
  const address = location.state.address;
  const email = location.state.email;
  const dob = location.state.dob;
  const gender = location.state.gender;
  const height = location.state.height;
  const phone = location.state.phone;
  const [formData, setFormData] = useState({
    name: name,
    status: status,
    address: address,
    phone: phone,
    email: email,
    date_of_birth: dob,
    occupation: occupation,
    height: height,
    interest: interest,
    bio: bio,
  });

  const userValues = useContext(userContext);
  const { token } = userValues;

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fast-Woodland-39897.herokuapp.com/profile/edit_profile",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            status: formData.email,
            address: formData.address,
            phone: formData.phone,
            email: formData.email,
            date_of_birth: formData.date_of_birth,
            occupation: formData.occupation,
            height: formData.height,
            interest: formData.interest,
            bio: formData.bio,
            token: JSON.parse(token),
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <NavBar />
      <div className="aligned">
        <img src={avatar} alt="" className="img" />
        <button className="imgb">Upload new picture</button>
      </div>
      <div className="containerzz">
        <form className="pf" onSubmit={handleSubmit}>
          <div className="row">
            <label for="name">First Name</label>

            <input
              className="bb"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="status">Status</label>

            <input
              className="bb"
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="address">Address</label>

            <input
              className="bb"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Enter address"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="phone">Phone Number</label>

            <input
              className="bb"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label required for="email">
              Email
            </label>

            <input
              className="bb"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="date_of_birth">D.O.B</label>

            <input
              className="bb"
              type="text"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="occupation">Occupation</label>

            <input
              className="bb"
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="height">Height</label>

            <input
              className="bb"
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="interest">Interest</label>

            <input
              className="bb"
              type="text"
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label for="bio">Bio</label>

            <input
              className="bb"
              type="text"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input className="btt" type="submit" value="Save profile" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProfileForm;
