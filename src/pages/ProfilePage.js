import { useState, useEffect } from "react";
import { getProfileService } from "../services/profile.services.js";
import { Link, Outlet } from "react-router-dom";
import profileImg from "../images/profile.jpg";
import React from "react";
import addIcon from "../images/addIcon-01.png";
import updateProfileService from "../services/profile.services";

function ProfilePage(props) {
  const [profile, setProfile] = useState("profile");

  const getProfile = async () => {
    try {
      const response = await getProfileService();
      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="profile">
      <div className="profile-side">
        <img src={profileImg} alt="my-profile" className="circular-portrait" />

        <h1>{profile.name}</h1>
        <p>This is the profile description</p>
        <p>Styles I dance</p>

        <Link className="link" to="/profile/given">
          Gived Lessons
        </Link>

        <Link className="link" to="/profile/received">
          Received Lessons
        </Link>
        <br />
        <Link to="/profile/newLesson">
          <img
            src={addIcon}
            alt="icon to add clases"
            width={"10%"}
            style={{ marginTop: "10px" }}
          />
        </Link>
        <br />
        <Link to="/profile/edit">Edit Profile</Link>
      </div>

      <div className="profileOutlet">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilePage;
