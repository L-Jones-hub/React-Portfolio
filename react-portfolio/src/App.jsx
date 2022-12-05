import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/index.jsx";
import Page from "./components/Page/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  const [pages] = useState([
    {
      name: "About Me",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
