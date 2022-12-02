import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/index.js";
import Nav from "./components/Nav/index.js";
import Page from "./components/Page/index.js";
import Footer from "./components/Footer/index.js";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import PageContent from "./components/PageContent";
// import Portfolio from "./components/Portfolio";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header className="header">
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
