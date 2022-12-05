import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white p-3 mt-2 text-center">
      <p className="foot">
        Copyright 2022 Lindsey Jones |{" "}
        <span className="socials">
          <a
            href="https://www.linkedin.com/in/lindsey-jones-7778b1103/"
            rel="noreferrer"
            target="_blank"
            className="text-white text-decoration-none"
          >
            LinkedIn{" "}
          </a>
        </span>
        <a
          href="https://github.com/L-Jones-hub"
          rel="noreferrer"
          target="_blank"
          className="text-white text-decoration-none"
        >
          | GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
