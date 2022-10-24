import React from "react";
import profileImage from "./assets/images/profile.jpeg";
import avatar from "./assets/images/_Avatar share buttonforward.png";

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile image" id="profile__img" />

      <img className="icon" src={avatar} alt="forward avatar" />
      <div>
        <h4 id="slack">Ihedoro Fortunatus </h4>
      </div>
    </div>
  );
};

export default Profile;
