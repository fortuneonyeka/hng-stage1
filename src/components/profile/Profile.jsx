import React from "react";
import profileImage from "../../assets/images/profile.jpeg";
import avatar from "../../assets/images/_Avatar share buttonforward.png";
import dotButton from "../../assets/images/_Avatar share button.png"
import { handles } from "../../assets/links/links";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="dotshare__container">
      <img src={profileImage} alt="Profile image" id="profile__img" />
      <img src={dotButton} alt="avatasharedot" className="avatatdot"/>
      </div>
     
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
