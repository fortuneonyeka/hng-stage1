import React from 'react'
import {projectLinks} from "../../../assets/links/links"
// import {BrowserRouter as Router, Route, Link,NavLink, Routes} from "react-router-dom"

const Links = () => {
  return (
    <div>{projectLinks.map((link) => {
      return(
       <div key={link.id}  className="buttons__container">
    
        <a className="buttons" href={link.url} target="_blank">{link.name}</a>
       </div>
      )
    })}</div>
  )
}

export default Links