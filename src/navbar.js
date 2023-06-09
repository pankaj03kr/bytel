import React from "react";

function Sample() {
  return (
    <>
      <header id="nav" className="px-md-5 shadow-sm p-3">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#">
              BY<span style={{ color: "red" }}>tel</span>
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
                  <a className="nav-link  my-navlink" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link my-navlink" href="#">
                    Plans
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link my-navlink" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link my-navlink">My Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Sample;
