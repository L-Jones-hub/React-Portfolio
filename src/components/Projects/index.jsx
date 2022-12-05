import React from "react";

function Projects(props) {
  return (
    <div className="container col-xl-4 col-lg-6 col-md-12">
      <div className="card">
        <img
          src={props.info.image}
          className="card-img-top"
          alt={props.info.name}
        />
        <div className="card-body">
          <h4 className="card-title">{props.info.name}</h4>
          <p className="card-text">{props.info.description}</p>
          <p className="card-text">{props.info.technologies}</p>
          <a href={props.info.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href={props.info.deployed} target="_blank" rel="noreferrer">
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
