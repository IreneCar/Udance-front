import { useState, useEffect } from "react";
import { getProfileService } from "../services/profile.services.js";
import { Link, Outlet } from "react-router-dom";

import React from "react";
import addIcon from "../images/addIcon-01.png";


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
        <div className="circular-portrait">
          <img src={profile.imageUrl} alt="my-profile" />
       
        </div>

        <h1>{profile.name}</h1>
        <p>{profile.description}</p>
        <p>{profile.danceStyles}</p>

        <Link className="link" to="/profile/given">
          Gived Lessons
        </Link>
        <span className="separator">|</span>
        <Link className="link" to="/profile/received">
          Received Lessons
        </Link>
        <br />
        <div className="newLessonContainer">
          <Link to="/profile/newLesson">
            <img src={addIcon} alt="icon to add clases" className="icon" />
          </Link>
          <p className="addNewLesson">Add lesson</p>
        </div>

        <Link to="/profile/edit" className="link tiny">
          Edit Profile
        </Link>
      </div>

      <div className="profileOutlet">
        <Outlet context={[getProfile,profile,setProfile]} />
      </div>
    </div>
  );
}

export default ProfilePage;
