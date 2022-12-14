import React from 'react'
import {footer} from "../../assets/links/links"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      {footer.map((icon, index) => {
        return(
          <div key={index}>
            <img src={icon} alt="" />

          </div>
        )
      })}
    </div>
  )
}

export default Footer