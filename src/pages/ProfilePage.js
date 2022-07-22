import { useState, useEffect } from "react";
import { getProfileService } from "../services/profile.services.js";
import { Link, Outlet } from "react-router-dom";
import profileImg from "../images/profile.jpg";
import React from "react";

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
        <Link className="navBarLink" to="/profile/given">
          Gived Lessons
        </Link>
        <Link className="navBarLink" to="/profile/received">
          Received Lessons
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilePage;
