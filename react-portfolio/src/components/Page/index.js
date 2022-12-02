import React from "react";
// import PageContent from "../PageContent";
import About from "../About/index";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section>
      <h2>{(currentPage.name)}</h2>
      {renderPage()}
    </section>
  );
};

export default Page;

