import React, { useEffect } from "react";

function Nav(props) {
  const { pages, setCurrentPage, currentPage } = props;
  console.log(props);

  useEffect(() => {
    document.title = currentPage?.name;
  }, [currentPage]);

  return (
    <nav className="navbar flex-row bg-dark text-white">
      <div className="container-fluid">
        <h3>Lindsey Jones</h3>
        <ul className="navbar-nav list-group-horizontal">
          {pages?.map((page) => (
            <li
              className={`mx-5 nav-item ${
                currentPage.name === page.name && "navActive"
              }`}
              key={page.name}
            >
              <span onClick={() => setCurrentPage(page)}>{page.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
