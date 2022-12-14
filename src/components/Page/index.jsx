import React from "react";
import About from "../About/index.jsx";
import Portfolio from "../Portfolio/index.jsx";
import Contact from "../Contact/index.jsx";
import Resume from "../Resume/index.jsx";
import PageContent from "../PageContent/index.jsx";

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
      <h2 className="text-center my-3">{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default Page;
