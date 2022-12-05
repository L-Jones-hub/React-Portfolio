import React from "react";

function Projects() {
  return (
    <div className="container row col-md-12 d-flex justify-content-center">
      <div className="card m-2 col-3">
        <img
          src={require("../../images/Dictionary-App.png")}
          className="card-img-top"
          alt="Dictionary App"
        />
        <div className="card-body">
          <h4 className="card-title">Dictionary App</h4>
          <p className="card-text">
            This is a dictionary app created with React.
          </p>
          <p className="card-text">Technologies: React.js</p>
          <a
            href="https://github.com/L-Jones-hub/React-Dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://super-llama-f8a10f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
      <div className="card m-2 col-3">
        <img
          src={require("../../images/Weather-App.png")}
          className="card-img-top"
          alt="Weather App"
        />
        <div className="card-body">
          <h4 className="card-title">Weather App</h4>
          <p className="card-text">
            This is a weather app created with vanilla JavaScript.
          </p>
          <p className="card-text">
            Technologies: HTML, CSS, JavaScript, Weather API
          </p>
          <a
            href="https://github.com/L-Jones-hub/Weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://famous-wisp-26babe.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
      <div className="card m-2 col-3">
        <img
          src={require("../../images/Recipe-Ready.png")}
          className="card-img-top"
          alt="Recipe Ready"
        />
        <div className="card-body">
          <h4 className="card-title">Recipe Ready</h4>
          <p className="card-text">
            The user is able to search ingredients and price items for a recipe.
          </p>
          <p className="card-text">
            Technologies: HTML, JavaScript, Bulma CSS Framework, Spoonacular
            API, Calorie Ninjas API
          </p>
          <a
            href="https://github.com/L-Jones-hub/Recipe-Ready-Jones"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://mchughmegan.github.io/Recipe-Ready/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
      <div className="card m-2 col-3">
        <img
          src={require("../../images/React-Weather-App.png")}
          className="card-img-top"
          alt="React Weather App"
        />
        <div className="card-body">
          <h4 className="card-title">React Weather App</h4>
          <p className="card-text">
            This is a weather app created with React.js.
          </p>
          <p className="card-text">
            Technologies: React.js, HTML, CSS, Weather API
          </p>
          <a
            href="https://github.com/L-Jones-hub/React-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://candid-truffle-6c77cb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
      <div className="card m-2 col-3">
        <img
          src={require("../../images/Password-Generator.png")}
          className="card-img-top"
          alt="Password Generator"
        />
        <div className="card-body">
          <h4 className="card-title">Password Generator</h4>
          <p className="card-text">
            This project's purpose is to randomly generate a password based on
            criteria entered by the user.
          </p>
          <p className="card-text">Technologies: HTML, JavaScript, CSS</p>
          <a
            href="https://github.com/L-Jones-hub/Password-Generator"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://l-jones-hub.github.io/Password-Generator/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
