import React from "react";
import ProfileForm from "./ProfileForm";
import bavatar from "../assets/bavatar.png";
import "../Components/profile.css";
import { ProfileNav } from "./ProfileNav";
import { useState, useEffect, useContext } from "react";
import { NavBar } from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";
import Footer from "./Footer";

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userValues = useContext(userContext);
  const { token } = userValues;
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    // e.preventDefault();
    try {
      const res = await fetch(
        "https://fast-Woodland-39897.herokuapp.com/profile/view_profile",
        {
          method: "POST",
          body: JSON.stringify({
            token: JSON.parse(token),
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
        }
      );
      const data = await res.json();
      setUser(data?.user);
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <NavBar />
      <div className="containeree">
        <section className="profilezz">
          <div className="imagezz">
            <div className="stat">
              <img className="baa" src={bavatar} alt="user pic" />{" "}
              <p>{user.status}</p>
            </div>
            <h2 style={{ marginLeft: "10px" }}>
              <br />
              {user?.name} <h4>{user?.email}</h4> <br />
              <button
                className="edp"
                onClick={() =>
                  navigate("/ProfileForm", { state: { name: user?.name } })
                }
              >
                {" "}
                Edit Profile
              </button>
            </h2>
          </div>
        </section>

        <br />
        <br />

        <section className="containeree">
          <div className="grid-containeree">
            <div className="grid-itemzz">
              <h1>BIO ---------------------------</h1>
              <p className="Biop">{user?.bio}</p>
              <br />
              <br />
              <br />
              <br />
              <h1>BASIC INFORMATION</h1>
              <label>DOB</label> <label>{user?.date_of_birth}</label>
              <br />
              <label>Gender</label> <label>{user?.gender}</label>
              <br />
              <label>Height</label> <label>{user?.height}</label>
              <br />
              <label>Interest</label> <label>{user?.interest}</label>
            </div>
            <div className="grid-itemzz">
              <h1>CONTACT INFO ----------------------</h1>
              <label>PHONE NUMBER</label>
              <label>{user?.phone}</label>
              <br />
              <label>ADDRESS</label>
              <label>{user?.address}</label>
              <br />
              <br />
              <br />
              <br />

              <h1>SKILL-----------------------</h1>
              <label>Occupation</label>
              <label>{user?.occupation}</label>
              <br />
              <label>Relationship</label>
              <label>{user?.status}</label>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Profile;
