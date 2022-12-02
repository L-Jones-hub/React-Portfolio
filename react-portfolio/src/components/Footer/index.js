import React from "react";

function Footer() {
  return (
    <footer className="fixed-bottom bg-dark">
      <p className="foot">
        Copyright 2022 Lindsey Jones||{" "}
        <span className="socials">
          <a
            href="https://www.linkedin.com/in/lindsey-jones-7778b1103/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </span>
        <a
          href="https://github.com/L-Jones-hub"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
