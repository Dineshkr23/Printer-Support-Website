import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              decoding="async"
              src="/images/logo.png"
              alt="Printzaa Logo"
              className="img-fluid"
              style={{ height: '45px', objectFit: 'contain' }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-align-justify navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="help">
            <a className="blue">Need Help?</a>
            <a href="tel:(888) 366-2141" className="contact">
              (888) 366-2141
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
