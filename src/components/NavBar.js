import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand" href="/">
            News Company
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                 General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Technology
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
