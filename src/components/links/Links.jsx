import React from 'react'
import {projectLinks} from "../../assets/links/links"
import Socials from "../socials/Socials"
import "./link.css"
const Links = () => {
  return (
    <div>
      {projectLinks.map((link) => {
      return(
       <div key={link.id}  className="buttons__container">
    
        <a className="buttons" href={link.url} target="_blank">{link.name}</a>
      <h5></h5>
       </div>
      )
    })}
    <Socials/>
    </div>
  )
}

export default Links