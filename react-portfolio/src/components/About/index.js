import React from "react";
import image from "../../Lindsey-Jones-Headshot.jpg";


function About() {
  return (
    <main className="container">
      <br />
      <div className="row">
        <div className="col-md-12">
          <img
            src={image}
            alt="Lindsey Jones"
            width="200"
            height="200"
            className="float-left"
          />
          <h1 className="name">Lindsey Jones</h1>
          <hr />
          <p className="homepage">
            Full Stack Web Developer with a background in English and Education.
            Exceptional experience in organization, problem solving, creativity,
            leadership, and syntax. Experience as both team lead and department
            chair. Completed four workshops through SheCodes, and less than one
            month from completing The University of Texas at Austin’s Full Stack
            Development Certificate Program.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item list-group-item-darks">Front End</li>
            <li className="list-group-item list-group-item-secondary">
              HTML5, CSS3, JavaScript ES6
            </li>
            <li className="list-group-item list-group-item-secondary">
              React.js
            </li>
            <li className="list-group-item list-group-item-secondary">
              jQuery
            </li>
            <li className="list-group-item list-group-item-secondary">
              Bootstrap & Responsive Design
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item list-group-item-darks">Back End</li>
            <li className="list-group-item list-group-item-secondary">
              Node.js & Express.js
            </li>
            <li className="list-group-item list-group-item-secondary">
              MySQL & Sequelize
            </li>
            <li className="list-group-item list-group-item-secondary">
              MongoDB & Mongoose
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item list-group-item-darks">Other</li>
            <li className="list-group-item list-group-item-secondary">
              Object-Oriented Programming
            </li>
            <li className="list-group-item list-group-item-secondary">
              Agile Software Development
            </li>
            <li className="list-group-item list-group-item-secondary">
              RESTful API
            </li>
            <li className="list-group-item list-group-item-secondary">
              Unit Testing & Jest
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default About;
