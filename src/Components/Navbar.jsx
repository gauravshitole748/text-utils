import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            {/* Switch for enabling Dark mode */}
            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.modeSetting}
              />
              <label
                className="form-check-label"
                style={{
                  width: "80px",
                  color: props.mode === "light" ? "#000" : "#FFF",
                }}
                htmlFor="flexSwitchCheckChecked">
                Dark Mode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={
                  props.mode === "light" ? "btn btn-light" : "btn btn-dark"
                }
                // style={{
                //   backgroundColor: "transparent",
                //   color: "#000",
                //   borderColor: "#000",
                // }}
                type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set your title",
};
