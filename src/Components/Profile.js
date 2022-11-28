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
                  navigate("/ProfileForm", {
                    state: {
                      name: user?.name,
                      status: user?.status,
                      bio: user?.bio,
                      occupation: user?.occupation,
                      interest: user?.interest,
                      address: user?.address,
                      email: user?.email,
                      dob: user?.date_of_birth,
                      gender: user?.gender,
                      height: user?.height,
                      phone: user?.phone,
                    },
                  })
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
        <div className="profilecon">
          <div className="divi">
            <div className="biodiv">BIO ------------</div>
            <div className="contactdiv">
              CONTACT INFORMATION ---------
              <h5>Phone number</h5> <label className="">6464738293939</label>
              <h5>Address</h5>{" "}
              <label>
                Plot 1122, Block 44, Unity road, aja, Lekki, Lagos, Nigeria.
              </label>
            </div>
          </div>
          <div className="divii">
            <div className="basicdiv">
              BASIC INFORMATION ------------
              <h5>D.O.B</h5> <label>22/22/22</label>
              <h5>Gender</h5> <label>Female</label>
              <h5>Height</h5> <label>22cm</label>
              <h5>Interest</h5> <label>Codin cooking sports</label>
            </div>
            <div className="skilldiv">
              SKILLS ---------
              <h5>Occupation</h5> <label>designer</label>
              <h5>Relationship</h5> <label>Single</label>
            </div>
          </div>
        </div>
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
