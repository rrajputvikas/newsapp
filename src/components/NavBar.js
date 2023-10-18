import React, { Component } from "react";

const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology']; 

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid justify-content-between">
          <ul className="navbar-nav">
            <li className="navbar-brand" onClick={() => this.props.setChoice('general')} role='button'>
              News Company
            </li>
          </ul>
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
              {
                categories.map((category) => {
                  return (
                    <li key={category} className="nav-link" onClick={() => this.props.setChoice(category.toLowerCase())} role='button'>
                      {category}
                    </li>
                  )
                })
              }
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
