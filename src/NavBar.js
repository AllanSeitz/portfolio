import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Allan's Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact Me
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="https://github.com/AllanSeitz"
                    target="_blank"
                  >
                    <i class="fab fa-github" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="mailto:allanseitz@yahoo.com"
                  >
                    <i class="fas fa-envelope" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://suncoast.io/"
                    target="_blank"
                  >
                    <i class="fas fa-graduation-cap" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
