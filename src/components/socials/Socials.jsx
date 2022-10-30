import React from "react";
import { socials } from "../../assets/links/links";
import "./socials.css"

const Socials = () => {
  return (
    <div className="social__icons">
      {socials.map((icon, index) => {
        return (
          <div key={index}>
            <p >
              <img  src={icon} alt="Icons" />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
