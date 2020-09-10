import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm nav-bg  mb-3 py-0 ">
      <div className="container">
        <a href="/" className="navbar-brand text-uppercase"></a>
        {branding}
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fa fa-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fa fa-plus"></i>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fa fa-question"></i>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
