import React from "react";

function Contact() {
  return (
    <main className="container">
      <div class="content-container container">
        <div class="content contact">
          <h3>Email: </h3>
          <p>
            <a href="mailto:lindseyjones92@gmail.com" title="Email Lindsey">
              lindseyjones92@gmail.com
            </a>
          </p>

          <h3>LinkedIn: </h3>
          <p>
            <a
              href="https://www.linkedin.com/in/lindsey-jones-7778b1103/"
              target="_blank"
              rel="noreferrer"
              title="Lindsey's LinkedIn"
            >
              @LindseyJones
            </a>
          </p>
          <h3>GitHub: </h3>
          <p>
            <a
              href="https://github.com/L-Jones-hub"
              target="_blank"
              rel="noreferrer"
              title="Lindsey's GitHub"
            >
              L-Jones-hub
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
