import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Lindsey Jones
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                    title="Lindsey Jones Homepage"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="about.html"
                    title="About Lindsey Jones"
                  >
                    About me
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="work.html"
                    title="Lindsey Jones | Work"
                  >
                    My Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="contact.html"
                    title="Contact Lindsey Jones"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
    </div>
  );
}

export default App;