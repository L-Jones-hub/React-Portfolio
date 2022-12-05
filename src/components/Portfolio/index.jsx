import React from "react";
import Projects from "../Projects/index.jsx";
import projects from "../../projects.json";

function Portfolio() {
  return (<div className="container">
    <div className="row">
      {projects.map(item => {
        return (
          <Projects info={item} />
        )
      })}
    </div>
  </div>
  )
}

export default Portfolio;
