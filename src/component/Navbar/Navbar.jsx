import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand me-2" href="/">
            <img
              src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
              height="40"
              loading="lazy"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>

            <div className="d-flex align-items-center">
              <a
                href="/"
                className="link-underline link-underline-opacity-0 p-4 text-black"
              >
                Home
              </a>
              <a className="link-underline link-underline-opacity-0 p-4 text-black">
                About Us
              </a>
              <a className="link-underline link-underline-opacity-0 p-4 text-black">
                Partner with us
              </a>
              <a className="link-underline link-underline-opacity-0 p-4 text-black">
                Blog
              </a>
              <button type="button" className="btn btn-primary me-3 text-white">
                Download ZET
              </button>
            </div>
          </div>
        </div>
      </nav>
      <hr className="z-10"></hr>
    </div>
  );
};

export default Navbar;
