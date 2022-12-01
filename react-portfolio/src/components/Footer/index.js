import React from "react";

function Footer() {
  return (
    <footer>
      <div className="contact-box justify-content-between mb-5 mt-5 d-none d-md-flex">
        <div>
          <h4>Work Inquiry</h4>
          <p className="" text-muted>
            Let's work together!
          </p>
        </div>
        <div>
          <a
            href="contact.html"
            className="btn btn-branding"
            title="Contact Lindsey"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5 mt-5">
        <a
          href="mailto:lindseyjones92@gmail.com"
          className="email-link"
          title="Email Lindsey"
        >
          lindseyjones92@gmail.com
        </a>
      </div>
      <div className="social-links d-flex justify-content-center mb-5">
        <a
          href="https://www.linkedin.com/in/lindsey-jones-7778b1103/"
          target="_blank"
          rel="noreferrer"
          title="Lindsey's LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/L-Jones-hub"
          target="_blank"
          rel="noreferrer"
          title="Lindsey's GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
