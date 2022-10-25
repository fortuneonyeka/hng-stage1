import React from 'react'
import { socials } from "../../assets/links/links"

const Socials = () => {
  return (
    <div className="social__icons">
      {socials.map((icon, index) => {
        return (
          <div key={index}>
          <p>
            <img src={icon.name} alt="Icons"/>
            </p>
        </div>
        )
        
      })}
    </div>
  )
}

export default Socials