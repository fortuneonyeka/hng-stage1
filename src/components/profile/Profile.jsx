import React from "react";
import profileImage from "../../assets/images/profile.jpeg";
import avatar from "../../assets/images/_Avatar share buttonforward.png";
import { handles } from "../../assets/links/links";

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile image" id="profile__img" />

      <img className="icon" src={avatar} alt="forward avatar" />
      <div>
        {handles.map((handle, index) => {
          return (
          <div key={index}>
            <h4 id="twitter">{handle.twitter}</h4>
            <h4 id="slack">{handle.slack}</h4>
          </div>
          )
          
        })}
      </div>
    </div>
  );
};

export default Profile;
