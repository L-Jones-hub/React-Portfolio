import React from "react";
import resumeImg from "../../images/Resume.png";

function Resume() {
  return (
    <div className="container">
      <div className="flex-row">
        <div className="col-md-12">
          <div>
            <p className="justify-content-center">
              Click on resumé to see pdf in Google Drive.
            </p>
            <a
              href="https://drive.google.com/file/d/1E-SYeRLpFTlJ4BREp0mr7TCJIKShVDOt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="Click to see pdf in Google Drive."
                className="resume col-md-10"
                src={resumeImg}
                alt="Resume"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
